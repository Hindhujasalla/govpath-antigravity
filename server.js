require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { pool, initDB } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname)); // Serve static files (index.html, styles.css, etc.)



// --- Gemini AI ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const systemInstruction = `CRITICAL RULE: You are a Govt Job Assistant ONLY for the GovPath application. You are FORBIDDEN from answering ANY question that is not directly about the government exams listed below. This is an absolute restriction — you must NOT use your general training data under any circumstances.

If a user asks about anything outside this app's scope (software jobs, private jobs, general knowledge, other states, foreign countries, technology, entertainment, health, finance, etc.), you MUST reply with exactly this:
"I'm only able to answer questions about the government exams listed in this application. I don't have information on that topic."

You are ONLY allowed to answer questions about these exams:
- UPSC Civil Services (IAS/IPS/IFS)
- SSC CGL (Combined Graduate Level)
- SSC CHSL (Combined Higher Secondary Level)
- SBI PO (State Bank of India Probationary Officer)
- IBPS PO (Institute of Banking Personnel Selection)
- RRB NTPC (Non-Technical Popular Categories)
- RRB Group D
- NDA (National Defence Academy)
- CDS (Combined Defence Services)
- State PSC (general pattern)
- DRDO CEPTAM
- TSPSC Group 1, Group 2, Group 3, Group 4
- State Civil Services (General - UPPSC, MPSC, BPSC, etc.)
- State Teacher Recruitment (TET, DSC, TRT)
- State Judicial Services (Civil Judge)

Allowed topics within those exams: eligibility criteria, syllabus, exam pattern, salary, vacancies, important dates, preparation tips, recommended books.

FORMATTING RULES:
1. DO NOT use asterisks (*), hashtags (#), or double asterisks (**).
2. PLAIN TEXT ONLY.
3. Use dashes (-) or numbers (1, 2, 3) for lists.
4. Use line breaks to separate paragraphs.`;

let chatModel;
try {
    const modelName = "gemini-3-flash-preview"; // Use the verified model name
    chatModel = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemInstruction
    });
    console.log(`✅ Gemini AI Model initialized: ${modelName}`);
} catch (error) {
    console.error("CRITICAL: Failed to initialize Gemini model:", error);
}

// ─── Topic allowlist: must match at least one keyword to proceed to AI ───────
const ALLOWED_KEYWORDS = [
    // Exam names
    'upsc', 'ias', 'ips', 'ifs', 'civil service',
    'ssc', 'cgl', 'chsl', 'mts',
    'sbi', 'ibps', 'po', 'probationary officer', 'bank', 'banking',
    'rrb', 'ntpc', 'railway', 'group d',
    'nda', 'national defence', 'cds', 'combined defence',
    'psc', 'state psc', 'drdo', 'ceptam',
    'tspsc', 'telangana', 'group 1', 'group 2', 'group 3', 'group 4',
    'uppsc', 'mpsc', 'kpsc', 'bpsc', 'wbpsc', 'tet', 'dsc', 'trt', 'teacher',
    'judicial', 'judge', 'llb', 'civil judge',
    // Generic govt-job topics
    'government job', 'govt job', 'sarkari', 'exam', 'syllabus',
    'eligibility', 'age limit', 'vacancy', 'vacancies', 'salary',
    'selection process', 'prelims', 'mains', 'interview', 'admit card',
    'notification', 'application form', 'cut off', 'preparation', 'tips',
    'books', 'recommended', 'pattern', 'marks', 'negative marking',
    'qualification', 'graduation', 'degree', 'attempt'
];

function isAllowedTopic(message) {
    const lower = message.toLowerCase();
    return ALLOWED_KEYWORDS.some(kw => lower.includes(kw));
}

// Handle chat requests
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) return res.status(400).json({ error: "Message is required" });
        if (!process.env.GEMINI_API_KEY) return res.status(500).json({ error: "API key missing" });

        // ── Server-side guard: block off-topic questions before calling the AI ──
        if (!isAllowedTopic(message)) {
            return res.json({
                reply: "I'm only able to answer questions about the government exams listed in this application. I don't have information on that topic."
            });
        }

        if (!chatModel) {
            console.error("AI chatModel is not initialized.");
            return res.status(500).json({ error: "AI service is currently unavailable. Please try again later." });
        }

        const result = await chatModel.generateContent(message);
        
        if (!result || !result.response) {
            throw new Error("Empty response from AI service");
        }

        let responseText = result.response.text();

        // Strip any accidental markdown symbols
        responseText = responseText.replace(/[#*]/g, '');

        res.json({ reply: responseText.trim() });
    } catch (error) {
        console.error("AI Generation Error Details:", {
            message: error.message,
            status: error.status,
            statusText: error.statusText,
            stack: error.stack
        });
        res.status(500).json({ error: "AI service error." });
    }
});

// --- User Auth & MySQL Registration ---
app.post('/api/auth/login', async (req, res) => {
    const { google_id, email, name } = req.body;
    console.log("Login Request Received:", { google_id, email, name });

    if (!google_id) return res.status(400).json({ error: "Google ID is required" });

    try {
        const query = `
            INSERT INTO users (google_id, email, name)
            VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE
                name = VALUES(name),
                last_login = CURRENT_TIMESTAMP;
        `;

        await pool.query(query, [google_id, email, name]);
        
        // Get the internal ID
        const [rows] = await pool.query("SELECT id FROM users WHERE google_id = ?", [google_id]);
        res.json({ success: true, message: "User synced with database.", id: rows[0].id });
    } catch (error) {
        console.error("Database Auth Error:", error);
        res.status(500).json({ error: "Failed to sync user with database." });
    }
});

// --- Mock Test System APIs ---

// Get all tests, optionally filtered by job_id
app.get('/api/tests', async (req, res) => {
    try {
        const { job_id } = req.query;
        let query = "SELECT * FROM mock_tests";
        let params = [];
        if (job_id) {
            query += " WHERE job_id = ?";
            params.push(job_id);
        }
        const [rows] = await pool.query(query, params);
        res.json(rows);
    } catch (error) {
        console.error("Fetch Tests Error:", error);
        res.status(500).json({ error: "Failed to fetch tests." });
    }
});

// Get questions for a test
app.get('/api/tests/:id/questions', async (req, res) => {
    try {
        const testId = req.params.id;
        // Don't send the correct_option to frontend!
        const [rows] = await pool.query(
            "SELECT id, test_id, question_text, option1, option2, option3, option4 FROM questions WHERE test_id = ?",
            [testId]
        );
        res.json(rows);
    } catch (error) {
        console.error("Fetch Questions Error:", error);
        res.status(500).json({ error: "Failed to fetch questions." });
    }
});

// Submit test and calculate score
app.post('/api/tests/submit', async (req, res) => {
    try {
        const { google_id, test_id, answers } = req.body; // answers is { qid: selected_option }
        
        if (!google_id || !test_id || !answers) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Get user internal ID
        const [userRows] = await pool.query("SELECT id FROM users WHERE google_id = ?", [google_id]);
        if (userRows.length === 0) return res.status(404).json({ error: "User not found" });
        const userId = userRows[0].id;

        // Get correct answers
        const [questions] = await pool.query(
            "SELECT id, correct_option FROM questions WHERE test_id = ?",
            [test_id]
        );

        let score = 0;
        const feedback = [];

        questions.forEach(q => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer == q.correct_option;
            if (isCorrect) score++;
            feedback.push({
                question_id: q.id,
                user_answer: userAnswer,
                correct_answer: q.correct_option,
                is_correct: isCorrect
            });
        });

        // Save attempt
        await pool.query(
            "INSERT INTO test_attempts (user_id, test_id, score, answers) VALUES (?, ?, ?, ?)",
            [userId, test_id, score, JSON.stringify(answers)]
        );

        res.json({
            success: true,
            score: score,
            total: questions.length,
            feedback: feedback
        });
    } catch (error) {
        console.error("Submit Test Error:", error);
        res.status(500).json({ error: "Failed to submit test." });
    }
});

// Get user result history
app.get('/api/results', async (req, res) => {
    try {
        const { google_id } = req.query;
        if (!google_id) return res.status(400).json({ error: "Google ID required" });

        const query = `
            SELECT ta.id, mt.title, mt.job_id, ta.score, ta.completed_at
            FROM test_attempts ta
            JOIN mock_tests mt ON ta.test_id = mt.id
            JOIN users u ON ta.user_id = u.id
            WHERE u.google_id = ?
            ORDER BY ta.completed_at DESC
        `;
        const [rows] = await pool.query(query, [google_id]);
        res.json(rows);
    } catch (error) {
        console.error("Fetch Results Error:", error);
        res.status(500).json({ error: "Failed to fetch results." });
    }
});

// Get detailed result of a past attempt
app.get('/api/results/:attempt_id', async (req, res) => {
    try {
        const attemptId = req.params.attempt_id;
        
        const [attempts] = await pool.query(
            "SELECT ta.*, mt.duration_minutes FROM test_attempts ta JOIN mock_tests mt ON ta.test_id = mt.id WHERE ta.id = ?",
            [attemptId]
        );
        if(attempts.length === 0) return res.status(404).json({error: "Attempt not found"});
        const attempt = attempts[0];
        
        const [questions] = await pool.query(
            "SELECT id, question_text, option1, option2, option3, option4, correct_option FROM questions WHERE test_id = ?",
            [attempt.test_id]
        );
        
        const answers = attempt.answers || {};
        const feedback = [];
        let score = 0;
        
        questions.forEach(q => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer == q.correct_option;
            if (isCorrect) score++;
            feedback.push({
                question_id: q.id,
                user_answer: userAnswer,
                correct_answer: q.correct_option,
                is_correct: isCorrect
            });
        });
        
        res.json({
            success: true,
            score: score,
            total: questions.length,
            feedback: feedback,
            test_id: attempt.test_id,
            completed_at: attempt.completed_at
        });
    } catch (error) {
        console.error("Fetch Specific Result Error:", error);
        res.status(500).json({ error: "Failed to fetch attempt details." });
    }
});

app.listen(PORT, async () => {
    await initDB();
    console.log(`GovPath AI Backend running on http://localhost:${PORT}`);
});

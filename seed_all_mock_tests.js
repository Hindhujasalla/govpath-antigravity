const fs = require('fs');
const { pool, initDB } = require('./db');

async function seedAllMockTests() {
    try {
        await initDB();
        console.log("Seeding Mock Tests for all matching jobs...");

        const dataContent = fs.readFileSync('./data.js', 'utf8');
        // Extract all ids, e.g., id: 'tspsc-group-1'
        const idRegex = /id:\s*['"]([^'"]+)['"]/g;
        const nameRegex = /name:\s*['"]([^'"]+)['"]/g;
        
        let ids = [];
        let match;
        while ((match = idRegex.exec(dataContent)) !== null) {
            ids.push(match[1]);
        }
        // Deduplicate
        ids = [...new Set(ids)];
        console.log(`Found ${ids.length} jobs in data.js. Generating tests...`);

        // Check if any tests currently exist
        const [existing] = await pool.query("SELECT job_id FROM mock_tests");
        const existingJobIds = existing.map(row => row.job_id);

        for (const jid of ids) {
            if (existingJobIds.includes(jid)) {
                console.log(`Skipping ${jid}, already has a test.`);
                continue;
            }

            console.log(`Adding test for ${jid}`);
            
            // Insert mock test
            const title = `Mock Exam for ${jid.replace(/-/g, ' ').toUpperCase()}`;
            const [testResult] = await pool.query(
                "INSERT INTO mock_tests (job_id, title, duration_minutes) VALUES (?, ?, ?)",
                [jid, title, 15]
            );
            const testId = testResult.insertId;

            // Generate 3 random questions for the test
            const genericQuestions = [
                {
                    text: `What is the most important skill for a candidate applying for the ${jid.replace(/-/g, ' ')} examination?`,
                    options: ["Consistency", "Procrastination", "Guessing", "Memorization only"],
                    correct: 1
                },
                {
                    text: `Based on the latest syllabus, how much time should typically be dedicated to current affairs for this role?`,
                    options: ["Never study them", "1-2 hours daily", "10 minutes before the exam", "Only weekend review"],
                    correct: 2
                },
                {
                    text: `What is the negative marking policy generally applied to this exam?`,
                    options: ["0.5 marks", "0.25 marks or 1/3rd", "1 full mark", "No negative marking"],
                    correct: 2
                }
            ];

            for (const q of genericQuestions) {
                await pool.query(
                    "INSERT INTO questions (test_id, question_text, option1, option2, option3, option4, correct_option) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    [testId, q.text, q.options[0], q.options[1], q.options[2], q.options[3], q.correct]
                );
            }
        }

        console.log("✅ All missing job tests have been seeded!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Seeding Error:", error);
        process.exit(1);
    }
}

seedAllMockTests();

const { pool, initDB } = require('./db');

async function seedMockTests() {
    try {
        await initDB();
        console.log("Seeding Mock Tests...");

        // Insert a test for upsc-civils
        const [testResult1] = await pool.query(
            "INSERT INTO mock_tests (job_id, title, duration_minutes) VALUES (?, ?, ?)",
            ['upsc-civils', 'UPSC Prelims Mock Test - History & Polity', 15]
        );
        const testId1 = testResult1.insertId;

        const questions1 = [
            {
                text: "Who has the power to declare an emergency in India?",
                options: ["Prime Minister", "President", "Chief Justice", "Parliament"],
                correct: 2 // President (1-indexed based on options, I'll use 1 for first option, so 2)
            },
            {
                text: "Which article of the Indian Constitution is related to the Right to Equality?",
                options: ["Article 14-18", "Article 19-22", "Article 23-24", "Article 25-28"],
                correct: 1
            },
            {
                text: "The first session of the Indian National Congress was held at which place?",
                options: ["Calcutta", "Surat", "Lahore", "Bombay"],
                correct: 4
            },
            {
                text: "Who is known as the 'Father of Indian Constitution'?",
                options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel"],
                correct: 3
            },
            {
                text: "What is the minimum age required to become a member of the Rajya Sabha?",
                options: ["21 years", "25 years", "30 years", "35 years"],
                correct: 3
            }
        ];

        for (const q of questions1) {
            await pool.query(
                "INSERT INTO questions (test_id, question_text, option1, option2, option3, option4, correct_option) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [testId1, q.text, q.options[0], q.options[1], q.options[2], q.options[3], q.correct]
            );
        }

        // Insert a test for ssc-cgl
        const [testResult2] = await pool.query(
            "INSERT INTO mock_tests (job_id, title, duration_minutes) VALUES (?, ?, ?)",
            ['ssc-cgl', 'SSC CGL General Awareness Mock', 10]
        );
        const testId2 = testResult2.insertId;

        const questions2 = [
            {
                text: "What is the SI unit of electric current?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 2
            },
            {
                text: "Which gas is most abundant in the Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correct: 3
            },
            {
                text: "Who wrote the play 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                correct: 2
            }
        ];

        for (const q of questions2) {
            await pool.query(
                "INSERT INTO questions (test_id, question_text, option1, option2, option3, option4, correct_option) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [testId2, q.text, q.options[0], q.options[1], q.options[2], q.options[3], q.correct]
            );
        }

        console.log("✅ Seed data inserted successfully.");
        process.exit(0);

    } catch (error) {
        console.error("❌ Seeding Error:", error);
        process.exit(1);
    }
}

seedMockTests();

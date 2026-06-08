const { pool, initDB } = require('./db');

const REALISTIC_TESTS = {
  'upsc-cse': [
    {
       text: "The voting age in India was changed from 21 years to 18 years under which one of the following Constitutional Amendment Acts?",
       options: ["The 43rd Amendment Act, 1977", "The 48th Amendment Act, 1984", "The 61st Amendment Act, 1989", "The 69th Amendment Act, 1991"],
       correct: 3
    },
    {
       text: "Which of the following statements regarding the Constitution of India are correct?<br><br>I. No part of the Constitution can be changed by an ordinary legislation unless so authorized.<br>II. All parts of the Constitution can be amended including the basic features.<br>III. The Fundamental Rights can be amended under Article 368.<br><br>Select the answer using the code given below.",
       options: ["I and III only", "I and II only", "II and III only", "I, II and III"],
       correct: 1
    },
    {
       text: "In India, which one of the following compiles information on industrial disputes, closures, retrenchments and lay-offs in factories employing workers?",
       options: ["Central Statistics Office", "Department for Promotion of Industry and Internal Trade", "Labour Bureau", "National Technical Information System Manpower"],
       correct: 3
    },
    {
       text: "With reference to the Indian economy, what are the advantages of 'Inflation-Indexed Bonds (IIBs)'?<br><br>1. Government can reduce the coupon rates on its borrowing by way of IIBs.<br>2. IIBs provide protection to the investors from uncertainty regarding inflation.<br>3. The interest received as well as capital gains on IIBs are not taxable.<br><br>Which of the statements given above are correct?",
       options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
       correct: 1
    }
  ],
  'ts-group1': [
    {
      text: "The Ramappa Temple, a UNESCO World Heritage Site, was built during the reign of which Kakatiya ruler?",
      options: ["Prataparudra I", "Ganapati Deva", "Rudrama Devi", "Prataparudra II"],
      correct: 2
    },
    {
      text: "Which of the following bodies was formed specifically following the Gentlemen's Agreement of 1956?",
      options: ["Telangana State Public Service Commission", "Telangana Regional Committee", "Hyderabad State Congress", "Andhra Pradesh Reorganization Council"],
      correct: 2
    },
    {
      text: "The 'Mission Kakatiya' program launched by the Telangana government is primarily aimed at:",
      options: ["Providing free 24/7 electricity to farmers", "Restoring minor irrigation tanks across the state", "Distributing agricultural land to marginalized farmers", "Providing piped drinking water to every rural household"],
      correct: 2
    }
  ],
  'ts-group2': [
    {
      text: "In which year was the historic Mulki Rules agitation started in Hyderabad State?",
      options: ["1948", "1952", "1969", "1972"],
      correct: 2
    },
    {
      text: "Who among the following authored the famous book 'The End of an Era' relating to Hyderabad's history?",
      options: ["K.M. Munshi", "Swami Ramananda Tirtha", "Burgula Ramakrishna Rao", "V.P. Menon"],
      correct: 1
    },
    {
      text: "The Rythu Bandhu scheme of the Telangana Government provides agricultural investment support at the rate of:",
      options: ["₹4,000 per acre per season", "₹5,000 per acre per season", "₹8,000 per acre per year", "₹10,000 per family per year"],
      correct: 2
    }
  ],
  'ssc-cgl': [
    {
      text: "Which of the following schedules of the Indian Constitution lists the names of states and specifies their territories?",
      options: ["First Schedule", "Second Schedule", "Third Schedule", "Fourth Schedule"],
      correct: 1
    },
    {
      text: "If A:B = 3:4 and B:C = 8:9, what is A:C?",
      options: ["1:3", "3:2", "2:3", "1:2"],
      correct: 3
    },
    {
      text: "Select the synonym of the given word: 'ABUNDANT'",
      options: ["Scarce", "Plentiful", "Minimal", "Rare"],
      correct: 2
    }
  ]
};

async function seedRealisticMockTests() {
    try {
        await initDB();
        console.log("Replacing generic test questions with highly realistic questions...");

        for (const [jobId, questionsData] of Object.entries(REALISTIC_TESTS)) {
            // Find existing test for this job
            const [tests] = await pool.query("SELECT id FROM mock_tests WHERE job_id = ?", [jobId]);
            
            let testId;
            if (tests.length > 0) {
                testId = tests[0].id;
                console.log(`Found existing test for ${jobId} (ID: ${testId}). Clearing old generic questions...`);
                // Clear old questions
                await pool.query("DELETE FROM questions WHERE test_id = ?", [testId]);
            } else {
                console.log(`No test found for ${jobId}. Creating one...`);
                const title = `Mock Exam for ${jobId.replace(/-/g, ' ').toUpperCase()}`;
                const [result] = await pool.query(
                    "INSERT INTO mock_tests (job_id, title, duration_minutes) VALUES (?, ?, ?)",
                    [jobId, title, 30]
                );
                testId = result.insertId;
            }

            console.log(`Inserting ${questionsData.length} realistic questions for ${jobId}...`);
            for (const q of questionsData) {
                await pool.query(
                    "INSERT INTO questions (test_id, question_text, option1, option2, option3, option4, correct_option) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    [testId, q.text, q.options[0], q.options[1], q.options[2], q.options[3], q.correct]
                );
            }
        }

        console.log("✅ Successfully swapped out placeholder questions for realistic questions!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Seeding Error:", error);
        process.exit(1);
    }
}

seedRealisticMockTests();

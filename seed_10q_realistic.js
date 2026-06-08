const { pool, initDB } = require('./db');
const fs = require('fs');

const POOLS = {
  civil_services: [
    { text: "The voting age in India was changed from 21 years to 18 years under which Constitutional Amendment Act?", options: ["42nd", "44th", "61st", "69th"], correct: 3 },
    { text: "Which of the following statements regarding the Constitution is correct?<br><br>I. The Preamble is not a part of the Constitution.<br>II. Fundamental Rights are amendable.<br>III. Directive Principles are justiciable.", options: ["I only", "II only", "I and III", "I, II, and III"], correct: 2 },
    { text: "The Ramappa Temple, a UNESCO World Heritage Site, was built during which dynasty?", options: ["Chola", "Kakatiya", "Vijayanagara", "Satavahana"], correct: 2 },
    { text: "In which year was the historic Mulki Rules agitation started in Hyderabad State?", options: ["1948", "1952", "1969", "1972"], correct: 2 },
    { text: "The Rythu Bandhu scheme of the Telangana Government provides agricultural investment support at the rate of:", options: ["₹4,000 / acre", "₹5,000 / acre", "₹8,000 / acre", "₹10,000 / acre"], correct: 2 },
    { text: "Who is the ex-officio chairman of the NITI Aayog?", options: ["President", "Vice-President", "Prime Minister", "Finance Minister"], correct: 3 },
    { text: "Which article of the Constitution deals with the special status of Jammu and Kashmir (which was revoked)?", options: ["Article 352", "Article 356", "Article 360", "Article 370"], correct: 4 },
    { text: "Who was the founder of the Asaf Jahi dynasty in Hyderabad?", options: ["Nizam Ali Khan", "Mir Qamar-ud-din Khan", "Salar Jung I", "Mahbub Ali Khan"], correct: 2 },
    { text: "Which committee is associated with the delimitation of constituencies?", options: ["Rangarajan", "Kothari", "Delimitation Commission", "Sachar"], correct: 3 },
    { text: "What is the primary objective of the 'Dalit Bandhu' scheme?", options: ["Scholarships", "Entrepreneurship grants of ₹10 lakh", "Housing allocation", "Free medical care"], correct: 2 },
    { text: "Which of the following bodies was formed specifically following the Gentlemen's Agreement of 1956?", options: ["TSPSC", "Telangana Regional Committee", "Hyderabad State Congress", "Andhra Pradesh Council"], correct: 2 },
    { text: "What does the 10th Schedule of the Indian Constitution deal with?", options: ["Panchayati Raj", "Defection", "Languages", "Land Reforms"], correct: 2 },
    { text: "In India, inflation is officially measured via:", options: ["WPI", "CPI", "GDP Deflator", "Sensex"], correct: 2 }
  ],
  banking: [
    { text: "What does 'CRR' stand for in banking?", options: ["Cash Return Ratio", "Cash Reserve Ratio", "Credit Risk Rate", "Central Repo Rate"], correct: 2 },
    { text: "Which organization regulates the mutual fund industry in India?", options: ["RBI", "SEBI", "IRDAI", "PFRDA"], correct: 2 },
    { text: "Which of the following is a direct tax?", options: ["Excise Duty", "Customs Duty", "GST", "Income Tax"], correct: 4 },
    { text: "What is the primary function of the Reserve Bank of India (RBI)?", options: ["Issuing currency notes", "Lending to the public", "Accepting retail deposits", "Providing insurance"], correct: 1 },
    { text: "A check that is torn into two or more pieces is called:", options: ["Stale check", "Mutilated check", "Post-dated check", "Crossed check"], correct: 2 },
    { text: "Data Interpretation: If total sales in 2020 were 500,000 and increased by 20% in 2021, what are the sales in 2021?", options: ["550,000", "600,000", "650,000", "700,000"], correct: 2 },
    { text: "In a certain code, 'RAIL' is written as 'KCTN'. How is 'SPEAK' written in that code?", options: ["MRGUC", "UCMRG", "RGCMU", "MGUCR"], correct: 1 },
    { text: "Which rate is used by Banks to lend to their most creditworthy customers?", options: ["Repo Rate", "Base Rate / MCLR", "Bank Rate", "Call Money Rate"], correct: 2 },
    { text: "What is the full form of NEFT?", options: ["National Electronic Fund Transfer", "National Electrical Fund Tracking", "Net Electronic Fund Transfer", "National Economy Finance Task"], correct: 1 },
    { text: "If the simple interest on a certain sum of money for 3 years at 5% is Rs. 150, what is the sum?", options: ["1000", "1500", "2000", "2500"], correct: 1 },
    { text: "A and B alone can do a piece of work in 15 and 20 days respectively. Working together, they will finish the work in:", options: ["8(4/7) days", "9 days", "10 days", "12 days"], correct: 1 },
    { text: "Calculate the compound interest on Rs 1000 at 10% per annum for 2 years.", options: ["200", "210", "220", "230"], correct: 2 }
  ],
  ssc_railway: [
    { text: "Which component of blood is responsible for clotting?", options: ["RBCs", "WBCs", "Platelets", "Plasma"], correct: 3 },
    { text: "Which is the longest river in India?", options: ["Brahmaputra", "Yamuna", "Godavari", "Ganga"], correct: 4 },
    { text: "Select the synonym of the word: 'ABUNDANT'", options: ["Scarce", "Plentiful", "Minimal", "Rare"], correct: 2 },
    { text: "Which is the longest railway platform in India?", options: ["Kharagpur", "Gorakhpur", "Hubballi", "Howrah"], correct: 3 },
    { text: "When did the first passenger train run in India?", options: ["1853", "1857", "1869", "1901"], correct: 1 },
    { text: "Who was the founder of the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Dasharatha"], correct: 2 },
    { text: "If 1st January 2001 was a Monday, what day of the week was 1st January 2002?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], correct: 2 },
    { text: "What is the chemical formula of water?", options: ["H2O2", "HO", "H2O", "H3O"], correct: 3 },
    { text: "Which logic gate outputs 1 only when all inputs are 1?", options: ["OR", "XOR", "AND", "NAND"], correct: 3 },
    { text: "Where is the headquarters of ISRO located?", options: ["New Delhi", "Mumbai", "Bengaluru", "Chennai"], correct: 3 },
    { text: "Who discovered the electron?", options: ["J.J. Thomson", "Ernest Rutherford", "Neils Bohr", "James Chadwick"], correct: 1 },
    { text: "The SI unit of power is:", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 2 },
    { text: "Identify the antonym of 'COMPLEX':", options: ["Complicated", "Simple", "Intricate", "Difficult"], correct: 2 }
  ],
  defence_police: [
    { text: "What is the motto of the Indian Army?", options: ["Service Before Self", "Touch the Sky with Glory", "Valour and Faith", "Sham No Varunah"], correct: 1 },
    { text: "Which is the highest peacetime gallantry award in India?", options: ["Param Vir Chakra", "Maha Vir Chakra", "Ashoka Chakra", "Kirti Chakra"], correct: 3 },
    { text: "What does DRDO stand for?", options: ["Defense Research and Development Organization", "Dept of Rural Development Org", "Defense Resources and Deployment Org", "Data Request and Delivery Operation"], correct: 1 },
    { text: "Who is the Supreme Commander of the Indian Armed Forces?", options: ["Prime Minister", "Defense Minister", "Chief of Army Staff", "President of India"], correct: 4 },
    { text: "Section 302 of the Indian Penal Code broadly deals with:", options: ["Theft", "Murder", "Fraud", "Cybercrime"], correct: 2 },
    { text: "What is the rank structure of IPS starting from the highest?", options: ["DGP > ADGP > IG > DIG", "IG > DGP > DIG > SP", "DIG > IG > SP > DSP", "DGP > IG > ADGP > SP"], correct: 1 },
    { text: "Which layer of the atmosphere reflects radio waves back to Earth?", options: ["Troposphere", "Stratosphere", "Ionosphere", "Exosphere"], correct: 3 },
    { text: "What is the derivative of sin(x) with respect to x?", options: ["-cos(x)", "sin(x)", "cos(x)", "tan(x)"], correct: 3 },
    { text: "What is the name of India's indigenous light combat aircraft?", options: ["Sukhoi", "Rafale", "Tejas", "Mirage"], correct: 3 },
    { text: "The headquarters of the Eastern Naval Command is located at:", options: ["Kochi", "Visakhapatnam", "Kolkata", "Port Blair"], correct: 2 },
    { text: "Under which Article of the Constitution can a National Emergency be declared?", options: ["Article 352", "Article 356", "Article 360", "Article 365"], correct: 1 },
    { text: "What does the abbreviation 'FIR' stand for in police terminology?", options: ["First Investigation Report", "First Information Record", "First Information Report", "Forensic Investigation Report"], correct: 3 }
  ],
  education_specialized: [
    { text: "Dyslexia is associated primarily with difficulties in:", options: ["Speaking", "Reading", "Writing", "Hearing"], correct: 2 },
    { text: "According to the RTE Act 2009, education is a fundamental right for children of what age group?", options: ["0-6 years", "6-14 years", "14-18 years", "6-18 years"], correct: 2 },
    { text: "Who developed the theory of Multiple Intelligences?", options: ["Jean Piaget", "Lev Vygotsky", "Howard Gardner", "B.F. Skinner"], correct: 3 },
    { text: "Which vitamin is synthesized by the human body in the presence of sunlight?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], correct: 4 },
    { text: "What does CPR stand for?", options: ["Cardiopulmonary Resuscitation", "Cardiac Pulse Rate", "Central Pulmonary Restoration", "Cardiopulmonary Record"], correct: 1 },
    { text: "In a cantilever beam subjected to a point load at the free end, the maximum bending moment occurs at:", options: ["The free end", "The fixed end", "The mid-point", "Quarter span"], correct: 2 },
    { text: "Which writ is issued by a higher court when a lower court exceeds its jurisdiction?", options: ["Habeas Corpus", "Mandamus", "Prohibition", "Quo Warranto"], correct: 3 },
    { text: "Under the Indian Contract Act, an agreement enforceable by law is a:", options: ["Promise", "Contract", "Obligation", "Proposal"], correct: 2 },
    { text: "What is the term for a Latin phrase meaning 'let the buyer beware'?", options: ["Res judicata", "Caveat emptor", "Amicus curiae", "De facto"], correct: 2 },
    { text: "What is the normal resting heart rate for an adult?", options: ["40-50 bpm", "60-100 bpm", "110-130 bpm", "130-150 bpm"], correct: 2 },
    { text: "Ohm's law states that:", options: ["V = I/R", "I = V*R", "V = I*R", "R = V*I"], correct: 3 },
    { text: "The primary objective of continuous and comprehensive evaluation (CCE) is to:", options: ["Test memory", "Evaluate cognitive and non-cognitive aspects", "Rank students", "Assign grades"], correct: 2 }
  ]
};

// Maps categories to jobs based on keywords
function getPoolForJob(jobId) {
    if (jobId.includes('bank') || jobId.includes('sbi') || jobId.includes('ibps')) return POOLS.banking;
    if (jobId.includes('ssc') || jobId.includes('rail') || jobId.includes('rrb')) return POOLS.ssc_railway;
    if (jobId.includes('defence') || jobId.includes('nda') || jobId.includes('cds') || jobId.includes('police') || jobId.includes('drdo')) return POOLS.defence_police;
    if (jobId.includes('educat') || jobId.includes('teach') || jobId.includes('health') || jobId.includes('engineer') || jobId.includes('judic')) return POOLS.education_specialized;
    return POOLS.civil_services; // Default for UPSC and TSPSC
}

// Ensure 10 questions by repeating generic aptitude if necessary
const FALLBACK_Qs = [
    { text: "If the cost of 5 apples is Rs 60, what is the cost of 12 apples?", options: ["120", "144", "150", "160"], correct: 2 },
    { text: "Choose the correct spelling:", options: ["Accommodate", "Acommodate", "Accomodate", "Acomodate"], correct: 1 },
    { text: "Complete the series: 2, 6, 12, 20, ?", options: ["28", "30", "32", "36"], correct: 2 },
    { text: "If 'A' is the son of 'B' and 'B' is the brother of 'C', how is 'A' related to 'C'?", options: ["Nephew", "Uncle", "Brother", "Cousin"], correct: 1 },
    { text: "Find the odd one out:", options: ["Apple", "Orange", "Tomato", "Potato"], correct: 4 }
];

async function seedTenQuestionsForAll() {
    try {
        await initDB();
        console.log("Upgrading database: Injecting 10 questions for ALL jobs.");

        const dataContent = fs.readFileSync('./data.js', 'utf8');
        const idRegex = /id:\s*['"]([^'"]+)['"]/g;
        let match;
        const allIds = [];
        while ((match = idRegex.exec(dataContent)) !== null) {
            allIds.push(match[1]);
        }
        const jobIds = [...new Set(allIds)];

        for (const jobId of jobIds) {
            const rawPool = [...getPoolForJob(jobId)];
            
            // Randomize and slice 10 items
            let qPool = rawPool.sort(() => 0.5 - Math.random());
            if (qPool.length < 10) {
                // supplement with fallback
                qPool = [...qPool, ...FALLBACK_Qs.sort(() => 0.5 - Math.random())];
            }
            if (qPool.length > 10) qPool = qPool.slice(0, 10);
            
            // Setup DB entry
            const [tests] = await pool.query("SELECT id FROM mock_tests WHERE job_id = ?", [jobId]);
            let testId;

            if (tests.length > 0) {
                testId = tests[0].id;
                await pool.query("DELETE FROM questions WHERE test_id = ?", [testId]);
                await pool.query("UPDATE mock_tests SET duration_minutes = 30 WHERE id = ?", [testId]);
            } else {
                const title = `Mock Exam for ${jobId.replace(/-/g, ' ').toUpperCase()}`;
                const [result] = await pool.query(
                    "INSERT INTO mock_tests (job_id, title, duration_minutes) VALUES (?, ?, ?)",
                    [jobId, title, 30]
                );
                testId = result.insertId;
            }

            for (const q of qPool) {
                await pool.query(
                    "INSERT INTO questions (test_id, question_text, option1, option2, option3, option4, correct_option) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    [testId, q.text, q.options[0], q.options[1], q.options[2], q.options[3], q.correct]
                );
            }
            console.log(`Inserted exactly 10 questions for ${jobId}.`);
        }

        console.log("✅ Successfully injected 10 questions for every single job mapping!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Seeding Error:", error);
        process.exit(1);
    }
}

seedTenQuestionsForAll();

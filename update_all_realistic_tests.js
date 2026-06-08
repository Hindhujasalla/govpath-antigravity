const { pool, initDB } = require('./db');

const ALL_REALISTIC_TESTS = {
  'upsc-cse': [
    { text: "The voting age in India was changed from 21 years to 18 years under which one of the following Constitutional Amendment Acts?", options: ["The 43rd Amendment Act, 1977", "The 48th Amendment Act, 1984", "The 61st Amendment Act, 1989", "The 69th Amendment Act, 1991"], correct: 3 },
    { text: "Which of the following statements regarding the Constitution of India are correct?<br><br>I. No part of the Constitution can be changed by an ordinary legislation unless so authorized.<br>II. All parts of the Constitution can be amended including the basic features.<br>III. The Fundamental Rights can be amended under Article 368.", options: ["I and III only", "I and II only", "II and III only", "I, II and III"], correct: 1 },
    { text: "In India, which one of the following compiles information on industrial disputes, closures, retrenchments and lay-offs in factories employing workers?", options: ["Central Statistics Office", "DPIIT", "Labour Bureau", "NTISM"], correct: 3 }
  ],
  'ssc-cgl': [
    { text: "Which of the following schedules of the Indian Constitution lists the names of states and specifies their territories?", options: ["First Schedule", "Second Schedule", "Third Schedule", "Fourth Schedule"], correct: 1 },
    { text: "If A:B = 3:4 and B:C = 8:9, what is A:C?", options: ["1:3", "3:2", "2:3", "1:2"], correct: 3 },
    { text: "Select the synonym of the given word: 'ABUNDANT'", options: ["Scarce", "Plentiful", "Minimal", "Rare"], correct: 2 }
  ],
  'ssc-chsl': [
    { text: "What is the simple interest on Rs. 4000 for 3 years at 10% per annum?", options: ["Rs. 1000", "Rs. 1100", "Rs. 1200", "Rs. 1300"], correct: 3 },
    { text: "Identify the part of speech of the underlined word: She sings *beautifully*.", options: ["Noun", "Adjective", "Adverb", "Pronoun"], correct: 3 },
    { text: "Who was the founder of the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Dasharatha"], correct: 2 }
  ],
  'sbi-po': [
    { text: "In a certain code, 'RAIL' is written as 'KCTN'. How is 'SPEAK' written in that code?", options: ["MRGUC", "UCMRG", "RGCMU", "MGUCR"], correct: 1 },
    { text: "What is the primary function of the Reserve Bank of India (RBI)?", options: ["Issuing currency notes", "Lending to the public", "Accepting deposits from the public", "Providing insurance"], correct: 1 },
    { text: "A train running at a speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?", options: ["120 metres", "150 metres", "180 metres", "200 metres"], correct: 2 }
  ],
  'ibps-po': [
    { text: "Which of the following is a direct tax?", options: ["Excise Duty", "Customs Duty", "Goods and Services Tax (GST)", "Income Tax"], correct: 4 },
    { text: "Six persons are sitting in a circle facing the centre. A is facing B. B is to the right of E and left of C. C is to the left of D. F is to the right of A. Now D exchanges his seat with F and E with B. Who will be sitting to the left of D?", options: ["A", "B", "E", "C"], correct: 1 },
    { text: "Data Interpretation: If the total sales in 2020 were 500,000 and increased by 20% in 2021, what are the sales in 2021?", options: ["550,000", "600,000", "650,000", "700,000"], correct: 2 }
  ],
  'rrb-ntpc': [
    { text: "Which component of blood is responsible for clotting?", options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"], correct: 3 },
    { text: "If 1st January 2001 was a Monday, what day of the week was 1st January 2002?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], correct: 2 },
    { text: "Where is the headquarters of ISRO located?", options: ["New Delhi", "Mumbai", "Bengaluru", "Chennai"], correct: 3 }
  ],
  'rrb-group-d': [
    { text: "What is the chemical formula of water?", options: ["H2O2", "HO", "H2O", "H3O"], correct: 3 },
    { text: "Which is the longest river in India?", options: ["Brahmaputra", "Yamuna", "Godavari", "Ganga"], correct: 4 },
    { text: "A boy runs 20 metres towards East and turns Right, runs 10 metres and turns Right, runs 9 metres and turns Left; runs 5 metres and turns Left, runs 12 metres and finally turns Left and runs 6 metres. Which direction is the boy facing?", options: ["North", "South", "East", "West"], correct: 1 }
  ],
  'nda': [
    { text: "What is the derivative of sin(x) with respect to x?", options: ["-cos(x)", "sin(x)", "cos(x)", "tan(x)"], correct: 3 },
    { text: "Which layer of the atmosphere reflects radio waves back to the Earth's surface?", options: ["Troposphere", "Stratosphere", "Ionosphere", "Exosphere"], correct: 3 },
    { text: "Who is the Supreme Commander of the Indian Armed Forces?", options: ["Prime Minister", "Defense Minister", "Chief of Army Staff", "President of India"], correct: 4 }
  ],
  'cds': [
    { text: "The headquarters of the Eastern Naval Command of the Indian Navy is located at:", options: ["Kochi", "Visakhapatnam", "Kolkata", "Port Blair"], correct: 2 },
    { text: "Which of the following treaties formally ended the American Revolutionary War?", options: ["Treaty of Versailles", "Treaty of Paris (1783)", "Treaty of Ghent", "Treaty of London"], correct: 2 },
    { text: "Complete the series: 2, 5, 10, 17, 26, ?", options: ["35", "36", "37", "39"], correct: 3 }
  ],
  'drdo-ceptam': [
    { text: "What does DRDO stand for?", options: ["Defense Research and Development Organization", "Department of Rural Development Organization", "Defense Resources and Deployment Organization", "Data Request and Delivery Operation"], correct: 1 },
    { text: "Which programming language is known as the 'mother of all languages'?", options: ["Java", "C", "Python", "Assembly"], correct: 2 },
    { text: "The unit of electrical resistance is:", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 3 }
  ],
  'ts-group1': [
    { text: "The Ramappa Temple, a UNESCO World Heritage Site, was built during the reign of which Kakatiya ruler?", options: ["Prataparudra I", "Ganapati Deva", "Rudrama Devi", "Prataparudra II"], correct: 2 },
    { text: "Which of the following bodies was formed specifically following the Gentlemen's Agreement of 1956?", options: ["TSPSC", "Telangana Regional Committee", "Hyderabad State Congress", "Andhra Pradesh Reorganization Council"], correct: 2 },
    { text: "The 'Mission Kakatiya' program launched by the Telangana government is aimed at:", options: ["Free electricity", "Restoring minor irrigation tanks", "Land distribution", "Piped drinking water"], correct: 2 }
  ],
  'ts-group2': [
    { text: "In which year was the historic Mulki Rules agitation started in Hyderabad State?", options: ["1948", "1952", "1969", "1972"], correct: 2 },
    { text: "Who among the following authored the famous book 'The End of an Era' relating to Hyderabad's history?", options: ["K.M. Munshi", "Swami Ramananda Tirtha", "Burgula Ramakrishna Rao", "V.P. Menon"], correct: 1 },
    { text: "The Rythu Bandhu scheme of the Telangana Government provides agricultural investment support at the rate of:", options: ["₹4,000 / acre", "₹5,000 / acre", "₹8,000 / acre", "₹10,000 / acre"], correct: 2 }
  ],
  'ts-group3': [
    { text: "Who was the founder of the Asaf Jahi dynasty in Hyderabad?", options: ["Nizam Ali Khan", "Mir Qamar-ud-din Khan", "Salar Jung I", "Mahbub Ali Khan"], correct: 2 },
    { text: "Which is the highest peak in Telangana?", options: ["Doli Gutta", "Arma Konda", "Mahendragiri", "Deomali"], correct: 1 },
    { text: "What is the primary objective of the 'Dalit Bandhu' scheme?", options: ["Educational scholarships", "Entrepreneurship grants of ₹10 lakh", "Housing allocation", "Free medical care"], correct: 2 }
  ],
  'ts-group4': [
    { text: "What is the official state bird of Telangana?", options: ["Indian Roller (Palapitta)", "Great Indian Bustard", "Peacock", "House Sparrow"], correct: 1 },
    { text: "Translate 'Computer' into Telugu (transliterated):", options: ["Sanganka", "Ganakayantram", "Yantram", "Vidhyut"], correct: 2 },
    { text: "Calculate 15% of 400:", options: ["40", "50", "60", "70"], correct: 3 }
  ],
  'state-police': [
    { text: "What is the rank structure of Indian Police Service starting from the highest?", options: ["DGP > ADGP > IG > DIG", "IG > DGP > DIG > SP", "DIG > IG > SP > DSP", "DGP > IG > ADGP > SP"], correct: 1 },
    { text: "Section 302 of the Indian Penal Code broadly deals with:", options: ["Theft", "Murder", "Fraud", "Cybercrime"], correct: 2 },
    { text: "If a person is walking at 5 km/hr, how long will it take to cover 20 km?", options: ["2 hours", "3 hours", "4 hours", "5 hours"], correct: 3 }
  ],
  'state-education': [
    { text: "According to the RTE Act 2009, education is a fundamental right for children of what age group?", options: ["0-6 years", "6-14 years", "14-18 years", "6-18 years"], correct: 2 },
    { text: "Which of the following is a summative assessment?", options: ["Pop quiz", "End of term examination", "Class participation", "Homework"], correct: 2 },
    { text: "Who said 'Education is the manifestation of the perfection already in man'?", options: ["Mahatma Gandhi", "Rabindranath Tagore", "Swami Vivekananda", "A.P.J. Abdul Kalam"], correct: 3 }
  ],
  'state-healthcare': [
    { text: "Which vitamin is synthesized by the human body in the presence of sunlight?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], correct: 4 },
    { text: "What is the normal resting heart rate for an adult?", options: ["40-50 bpm", "60-100 bpm", "110-130 bpm", "130-150 bpm"], correct: 2 },
    { text: "What does CPR stand for?", options: ["Cardiopulmonary Resuscitation", "Cardiac Pulse Rate", "Central Pulmonary Restoration", "Cardiopulmonary Record"], correct: 1 }
  ],
  'state-engineering': [
    { text: "In a cantilever beam subjected to a point load at the free end, the maximum bending moment occurs at:", options: ["The free end", "The fixed end", "The mid-point", "Quarter span"], correct: 2 },
    { text: "Ohm's law states that:", options: ["V = I/R", "I = V*R", "V = I*R", "R = V*I"], correct: 3 },
    { text: "Which logic gate outputs 1 only when all inputs are 1?", options: ["OR", "XOR", "AND", "NAND"], correct: 3 }
  ],
  'state-civil-india': [
    { text: "Who was the first Chief Election Commissioner of India?", options: ["T.N. Seshan", "Sukumar Sen", "Kalyan Sundaram", "S.P. Sen Verma"], correct: 2 },
    { text: "Which Article of the Indian Constitution directs the State to organize village panchayats?", options: ["Article 32", "Article 40", "Article 44", "Article 51"], correct: 2 },
    { text: "The concept of 'Mixed Economy' implies:", options: ["Agriculture and Industry coexist", "Private and Public sectors coexist", "Rural and Urban sectors coexist", "Domestic and Foreign investments coexist"], correct: 2 }
  ],
  'state-teacher-india': [
    { text: "Who developed the theory of Multiple Intelligences?", options: ["Jean Piaget", "Lev Vygotsky", "Howard Gardner", "B.F. Skinner"], correct: 3 },
    { text: "Dyslexia is associated primarily with difficulties in:", options: ["Speaking", "Reading", "Writing", "Hearing"], correct: 2 },
    { text: "What is the main objective of continuous and comprehensive evaluation (CCE)?", options: ["To test memory", "To evaluate cognitive and non-cognitive aspects", "To rank students", "To assign grades"], correct: 2 }
  ],
  'state-judicial-india': [
    { text: "Which writ is issued by a higher court when a lower court has considered a case going beyond its jurisdiction?", options: ["Habeas Corpus", "Mandamus", "Prohibition", "Quo Warranto"], correct: 3 },
    { text: "Under the Indian Contract Act, an agreement enforceable by law is a:", options: ["Promise", "Contract", "Obligation", "Proposal"], correct: 2 },
    { text: "What is the term for a Latin phrase meaning 'let the buyer beware'?", options: ["Res judicata", "Caveat emptor", "Amicus curiae", "De facto"], correct: 2 }
  ],
  'all': [
    { text: "Find the odd one out:", options: ["Apple", "Orange", "Tomato", "Potato"], correct: 4 },
    { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correct: 2 },
    { text: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 4 }
  ],
  'central': [
    { text: "Who is the ex-officio chairman of the NITI Aayog?", options: ["President", "Vice-President", "Prime Minister", "Finance Minister"], correct: 3 },
    { text: "Where is the headquarters of the World Bank?", options: ["New York", "Geneva", "Washington D.C.", "Paris"], correct: 3 },
    { text: "What is the primary greenhouse gas emitted through human activities?", options: ["Methane", "Carbon Dioxide", "Nitrous Oxide", "Ozone"], correct: 2 }
  ],
  'banking': [
    { text: "What does 'CRR' stand for in banking?", options: ["Cash Return Ratio", "Cash Reserve Ratio", "Credit Risk Rate", "Central Repo Rate"], correct: 2 },
    { text: "Which organization regulates the mutual fund industry in India?", options: ["RBI", "SEBI", "IRDAI", "PFRDA"], correct: 2 },
    { text: "A check that is torn into two or more pieces is called:", options: ["Stale check", "Mutilated check", "Post-dated check", "Crossed check"], correct: 2 }
  ],
  'railway': [
    { text: "Which is the longest railway platform in India?", options: ["Kharagpur", "Gorakhpur", "Hubballi", "Howrah"], correct: 3 },
    { text: "When was the first passenger train run in India?", options: ["1853", "1857", "1869", "1901"], correct: 1 },
    { text: "Which zone is the largest in Indian Railways?", options: ["Central Railway", "Northern Railway", "Western Railway", "Southern Railway"], correct: 2 }
  ],
  'defence': [
    { text: "What is the motto of the Indian Army?", options: ["Service Before Self", "Touch the Sky with Glory", "Valour and Faith", "Sham No Varunah"], correct: 1 },
    { text: "Which is the highest peacetime gallantry award in India?", options: ["Param Vir Chakra", "Maha Vir Chakra", "Ashoka Chakra", "Kirti Chakra"], correct: 3 },
    { text: "What is the name of India's indigenous light combat aircraft?", options: ["Sukhoi", "Rafale", "Tejas", "Mirage"], correct: 3 }
  ],
  'state': [
    { text: "Which state has the longest coastline in India?", options: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"], correct: 3 },
    { text: "Who appoints the Chief Minister of a state?", options: ["President", "Prime Minister", "Governor", "Chief Justice of High Court"], correct: 3 },
    { text: "The Panchayati Raj system was first adopted by which state?", options: ["Rajasthan", "Andhra Pradesh", "Bihar", "Kerala"], correct: 1 }
  ],
  'state-india': [
    { text: "Which article of the Constitution deals with the special status of Jammu and Kashmir (which was revoked)?", options: ["Article 352", "Article 356", "Article 360", "Article 370"], correct: 4 },
    { text: "What is the maximum strength of the Lok Sabha?", options: ["543", "545", "550", "552"], correct: 4 },
    { text: "Where is the famous Sun Temple located?", options: ["Khajuraho", "Konark", "Madurai", "Thanjavur"], correct: 2 }
  ]
};

async function overrideAllWithRealistic() {
    try {
        await initDB();
        console.log("Replacing all placeholder tests with realistic mock questions...");

        for (const [jobId, questionsData] of Object.entries(ALL_REALISTIC_TESTS)) {
            // Find existing test
            const [tests] = await pool.query("SELECT id FROM mock_tests WHERE job_id = ?", [jobId]);
            
            let testId;
            if (tests.length > 0) {
                testId = tests[0].id;
                await pool.query("DELETE FROM questions WHERE test_id = ?", [testId]);
            } else {
                const title = `Mock Exam for ${jobId.replace(/-/g, ' ').toUpperCase()}`;
                const [result] = await pool.query(
                    "INSERT INTO mock_tests (job_id, title, duration_minutes) VALUES (?, ?, ?)",
                    [jobId, title, 30]
                );
                testId = result.insertId;
            }

            for (const q of questionsData) {
                await pool.query(
                    "INSERT INTO questions (test_id, question_text, option1, option2, option3, option4, correct_option) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    [testId, q.text, q.options[0], q.options[1], q.options[2], q.options[3], q.correct]
                );
            }
        }
        
        // Also look for any remaining jobs not specifically mapped in ALL_REALISTIC_TESTS (just in case)
        const fs = require('fs');
        const dataContent = fs.readFileSync('./data.js', 'utf8');
        const idRegex = /id:\s*['"]([^'"]+)['"]/g;
        let match;
        const allIds = [];
        while ((match = idRegex.exec(dataContent)) !== null) {
            allIds.push(match[1]);
        }
        const missedKeys = allIds.filter(id => !ALL_REALISTIC_TESTS[id]);
        if(missedKeys.length > 0) console.log("Warning: missed specific tests for", missedKeys);

        console.log("✅ Successfully swapped out all questions for comprehensive 28x job-specific questions!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Seeding Error:", error);
        process.exit(1);
    }
}

overrideAllWithRealistic();

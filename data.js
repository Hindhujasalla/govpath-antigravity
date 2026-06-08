const JOBS_DATA = [
  {
    id: "upsc-cse",
    previousPapers: "https://upsc.gov.in/examinations/previous-question-papers",
    name: "UPSC Civil Services (IAS/IPS/IFS)",
    shortName: "UPSC CSE",
    category: "central",
    icon: "🏛️",
    badge: "Most Prestigious",
    badgeColor: "#f59e0b",
    difficulty: "High",
    overview:
      "The Union Public Service Commission Civil Services Examination (UPSC CSE) is India's most prestigious competitive exam. It recruits officers for the Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), and 24 other services.",
    conductedBy: "Union Public Service Commission (UPSC)",
    officialSite: "https://upsc.gov.in",
    eligibility: {
      age: "21–32 years (Gen), relaxations for SC/ST/OBC/PwD",
      education: "Any Graduate from a recognised university",
      nationality: "Indian Citizen",
      attempts: "6 attempts (Gen), 9 (OBC), Unlimited (SC/ST up to age limit)",
    },
    vacancies: {
      total: "~1100 annually",
      posts: ["IAS", "IPS", "IFS", "IRS", "IRAS", "IRTS", "IIS", "IAAS & more"]
    },
    salary: {
      payScale: "₹56,100 – ₹2,50,000 (Level 10–18)",
      inHand: "₹80,000 – ₹2,50,000 per month",
      perks: "Government accommodation, transport, medical facilities, pension",
    },
    examPattern: [
      { stage: "Prelims", mode: "Offline (OMR)", subjects: "GS Paper-I (200 marks) + CSAT Paper-II (200 marks)", duration: "2 hrs each", note: "CSAT is qualifying (33%)" },
      { stage: "Mains", mode: "Descriptive", subjects: "9 Papers (Essay, GS I-IV, 2 Optional, 2 Indian Languages)", duration: "3 hrs each", note: "Essay + GS IV optional count" },
      { stage: "Interview", mode: "Personality Test", subjects: "Board Interview", duration: "30–45 mins", note: "275 marks" },
    ],
    syllabus: {
      "General Studies I": ["Indian History & Culture", "World History", "Indian Society & Diversity", "Geography (World & India)", "Social Issues"],
      "General Studies II (Polity)": ["Indian Constitution & Governance", "Government Policies & Schemes", "International Relations", "Social Sector Issues"],
      "General Studies III (Economy)": ["Indian Economy & Development", "Agriculture", "Science & Technology", "Disaster Management", "Environment"],
      "General Studies IV (Ethics)": ["Ethics & Human Interface", "Integrity, Aptitude", "Case Studies", "Public Administration"],
      "CSAT": ["Reading Comprehension", "Logical Reasoning", "Analytical Ability", "Basic Numeracy", "Data Interpretation"],
      "Essay": ["Essay writing on social, political, economic topics"],
    },
    importantDates: {
      "Notification": "February",
      "Prelims": "May–June",
      "Mains": "September",
      "Interview": "January–March (next year)",
    },
    tips: [
      "Read NCERT books (Class 6–12) as your foundation",
      "Follow The Hindu / Indian Express daily for current affairs",
      "Make concise notes from standard books like Laxmikant (Polity), Spectrum (History)",
      "Attempt previous year papers and mock tests regularly",
      "Dedicate 12–15 months minimum preparation time",
      "For Mains, practise answer writing daily — structure matters",
      "Focus on optional subject selection carefully — pick one you love",
    ],
    booksRecommended: [
      "Indian Polity by M. Laxmikanth (7th Edition)",
      "A Brief History of Modern India by Spectrum",
      "Indian Economy by Nitin Singhania",
      "Environment by Shankar IAS Academy",
      "Certificate Physical and Human Geography by G.C. Leong"
    ],
    applicationSteps: [
      "Visit the official UPSC website at upsc.gov.in and click on 'Apply Online'.",
      "Complete the One Time Registration (OTR) if you are a new user. Keep your basic details ready.",
      "Login using your OTR ID/Email and password to access the active examination dashboard.",
      "Click on 'Click Here for Part I' for the Civil Services Preliminary Examination and fill in your details.",
      "Proceed to Part II: Pay the application fee of ₹100 online (exempt for SC/ST/Female/PwBD).",
      "Upload scanned passport-size photograph, signature, and a valid Photo ID card as per specified dimensions.",
      "Select your preferred examination centre and submit the final application. Take a printout for your records."
    ]
  },
  {
    id: "ssc-cgl",
    previousPapers: "https://www.careerpower.in/ssc-cgl-previous-year-question-paper.html",
    name: "SSC Combined Graduate Level",
    shortName: "SSC CGL",
    category: "central",
    icon: "📋",
    badge: "Most Applied",
    badgeColor: "#3b82f6",
    difficulty: "Medium",
    overview:
      "SSC CGL is conducted by the Staff Selection Commission for recruiting Group B and C officers in various central government ministries, departments, and organisations. It's one of the most popular exams among graduates.",
    conductedBy: "Staff Selection Commission (SSC)",
    officialSite: "https://ssc.gov.in",
    eligibility: {
      age: "18–32 years (varies by post)",
      education: "Bachelor's Degree in any discipline",
      nationality: "Indian Citizen",
      attempts: "No attempt limit (as long as age is eligible)",
    },
    vacancies: {
      total: "~10,000–20,000 annually",
      posts: ["Income Tax Inspector", "Excise Inspector", "Assistant Audit Officer", "CBI Sub-Inspector", "Accountant", "Auditor", "Tax Assistant"],
    },
    salary: {
      payScale: "₹25,500 – ₹92,300 (Level 4–8)",
      inHand: "₹35,000 – ₹80,000 per month (varies by post & city)",
      perks: "HRA, DA, Transport Allowance, Medical, Pension",
    },
    examPattern: [
      { stage: "Tier I", mode: "CBT (Online)", subjects: "General Intelligence, GK, Quantitative Aptitude, English (100 Qs, 200 marks)", duration: "60 mins", note: "Negative marking: -0.5" },
      { stage: "Tier II", mode: "CBT (Online)", subjects: "Paper-I: Maths+Reasoning+English+GK (390 marks); Paper-II: Statistics (for JSO)", duration: "2.5 hrs", note: "Negative: -1 for Paper-I" },
      { stage: "Document Verification", mode: "Offline", subjects: "Certificate verification", duration: "-", note: "Final stage" },
    ],
    syllabus: {
      "General Intelligence & Reasoning": ["Analogies", "Classification", "Coding-Decoding", "Matrix", "Logical Venn Diagram", "Number Series", "Seating Arrangement"],
      "General Awareness": ["History", "Geography", "Polity", "Economy", "Current Affairs", "Science & Technology", "Sports"],
      "Quantitative Aptitude": ["Number System", "Percentage", "Ratio & Proportion", "Average", "Profit & Loss", "Time & Work", "Algebra", "Geometry", "Trigonometry", "Statistics"],
      "English Language": ["Reading Comprehension", "Cloze Test", "Spotting Errors", "Idioms & Phrases", "Synonyms/Antonyms", "Para Jumbles"],
    },
    importantDates: { "Notification": "December–January", "Tier I": "March–April", "Tier II": "June–September" },
    tips: [
      "Quantitative Aptitude: practise daily shortcut tricks",
      "For English: read The Hindu editorial every day",
      "GK: use Lucent's GK and monthly current affairs magazines",
      "Attempt 50+ mock tests before Tier I",
      "Time management (60 mins) is key — don't get stuck on one question",
      "Accuracy over speed — negative marking at -0.5",
    ],
    booksRecommended: [
      "Objective General English by S.P. Bakshi",
      "Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal",
      "SSC General Awareness Chapter-wise by Kiran Prakashan",
      "A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal"
    ],
    applicationSteps: [
      "Visit the official SSC portal at ssc.gov.in.",
      "Click on 'Login or Register' and complete your One-Time Registration (OTR) to generate your registration number.",
      "Log in with your credentials and navigate to the 'Latest Notifications' tab.",
      "Find the Combined Graduate Level (CGL) Examination and click 'Apply'.",
      "Fill out the detailed application form, verifying your pre-filled OTR data.",
      "Upload a recent scanned colour passport-size photograph and signature.",
      "Pay the application fee of ₹100 online (Women/SC/ST/PwD/ESM are exempted).",
      "Double-check all details and click 'Submit'. Print the final application form."
    ]
  },
  {
    id: "ssc-chsl",
    previousPapers: "https://www.oswaal360.com/pages/previous-year-papers-ssc-chsl",
    name: "SSC Combined Higher Secondary Level",
    shortName: "SSC CHSL",
    category: "central",
    icon: "📑",
    badge: "12th Pass",
    badgeColor: "#10b981",
    difficulty: "Easy-Medium",
    overview:
      "SSC CHSL recruits Lower Division Clerks, Postal Assistants, Data Entry Operators, and Court Clerks in central government departments. Open to 12th pass candidates — great for freshers!",
    conductedBy: "Staff Selection Commission (SSC)",
    officialSite: "https://ssc.nic.in",
    eligibility: {
      age: "18–27 years",
      education: "12th Pass (Higher Secondary) from any recognised board",
      nationality: "Indian Citizen",
      attempts: "No limit (within age eligibility)",
    },
    vacancies: {
      total: "~4,000–5,000 annually",
      posts: ["Lower Division Clerk (LDC)", "Junior Secretariat Assistant (JSA)", "Postal Assistant", "Sorting Assistant", "Data Entry Operator (DEO)"],
    },
    salary: {
      payScale: "₹19,900 – ₹63,200 (Level 2–4)",
      inHand: "₹22,000 – ₹35,000 per month",
      perks: "HRA, DA, Medical, GPF, Pension",
    },
    examPattern: [
      { stage: "Tier I", mode: "CBT (Online)", subjects: "GK, Reasoning, Maths, English (100 Qs, 200 marks)", duration: "60 mins", note: "Negative marking: -0.5" },
      { stage: "Tier II", mode: "Descriptive (Pen & Paper)", subjects: "Essay + Letter Writing (100 marks)", duration: "60 mins", note: "Min. qualifying: 33%" },
      { stage: "Tier III", mode: "Skill Test / Typing Test", subjects: "DEO: Data entry speed | LDC: Typing test (English/Hindi)", duration: "15 mins", note: "Qualifying only" },
    ],
    syllabus: {
      "General Intelligence": ["Analogies", "Spatial Orientation", "Problem Solving", "Visual Memory", "Relationship Concepts", "Coding-Decoding"],
      "General Awareness": ["Current Events", "India & Neighbours", "Sports", "History", "Culture", "Geography", "Economic Scene", "Science"],
      "Quantitative Aptitude": ["Number Systems", "Computation of Whole Numbers", "Fundamental Arithmetic", "Time & Distance", "Interest", "Profit & Loss", "Bar Graphs", "Pie Charts"],
      "English Language": ["Spot the Error", "Fill in the Blanks", "Synonyms/Antonyms", "Idioms & Phrases", "One Word Substitution", "Sentence Improvement"],
    },
    importantDates: { "Notification": "January–February", "Tier I": "April–May", "Tier II": "August–September" },
    tips: [
      "Perfect for 12th pass candidates — don't wait for a degree",
      "Focus on speed with accuracy for Tier I",
      "For Tier II, practise formal letter writing and essay structure",
      "Use KD Campus, Neetu Singh's English book for preparation",
      "Typing speed: aim for 35+ WPM (English) or 30 WPM (Hindi)",
    ],
    booksRecommended: [
      "Lucent's General Knowledge",
      "Fast Track Objective Arithmetic by Rajesh Verma",
      "English for General Competitions by Neetu Singh",
      "SSC CHSL Tier-I Previous Year Papers by Kiran Prakashan"
    ],
    applicationSteps: [
      "Visit the new Staff Selection Commission website at ssc.gov.in.",
      "Complete your One-Time Registration (OTR) if you haven't already. Note your registration number and password.",
      "Log in and go to 'Latest Notifications' to find the CHSL Examination section.",
      "Click 'Apply' and ensure your 12th standard educational details are entered accurately.",
      "Select your preferred exam centres and typing test medium (English/Hindi).",
      "Upload your scanned photograph and signature in the required format.",
      "Pay the ₹100 application fee through BHIM UPI, Net Banking, or Visa/Mastercard (Exempt for Women/SC/ST/PwD).",
      "Review the preview carefully before final submission and save the PDF confirmation."
    ]
  },
  {
    id: "sbi-po",
    previousPapers: "https://www.careerpower.in/sbi-po-previous-year-question-paper.html",
    name: "SBI Probationary Officer",
    shortName: "SBI PO",
    category: "banking",
    icon: "🏦",
    badge: "Top Banking",
    badgeColor: "#6366f1",
    difficulty: "High",
    overview:
      "SBI PO is one of the most sought-after banking exams in India, recruiting Probationary Officers at State Bank of India. POs are groomed into future branch managers and senior officials.",
    conductedBy: "State Bank of India (SBI)",
    officialSite: "https://sbi.co.in/careers",
    eligibility: {
      age: "21–30 years",
      education: "Graduation in any discipline from a recognised university",
      nationality: "Indian Citizen",
      attempts: "4 attempts (Gen), 7 (OBC), Unlimited (SC/ST)",
    },
    vacancies: {
      total: "~2,000 annually",
      posts: ["Probationary Officer (PO) → Scale I Officer → AGM → DGM → GM → CGM → Deputy MD → MD & Chairman"],
    },
    salary: {
      payScale: "₹41,960 – ₹63,840 per month (during probation)",
      inHand: "₹52,000 – ₹60,000 per month",
      perks: "House rent allowance, DA, CCA, medical, loan facilities, LFC",
    },
    examPattern: [
      { stage: "Prelims", mode: "CBT (Online)", subjects: "English (30), Quantitative Aptitude (35), Reasoning (35) — 100 Qs, 100 marks", duration: "20 mins each section", note: "Sectional timing applies" },
      { stage: "Mains", mode: "CBT (Online)", subjects: "Reasoning+Computer (45 Qs, 60 marks), Data Analysis (35 Qs, 60 marks), GK+Economy (40 Qs, 40 marks), English (35 Qs, 40 marks)", duration: "3 hrs", note: "Descriptive: letter + essay (50 marks, 30 mins)" },
      { stage: "Group Exercise + Interview", mode: "Offline", subjects: "Group discussion + personal interview", duration: "Variable", note: "30 marks" },
    ],
    syllabus: {
      "Quantitative Aptitude": ["Data Interpretation", "Quadratic Equations", "Number Series", "Simplification", "Percentage", "Profit & Loss", "Time & Work", "Mensuration"],
      "Reasoning Ability": ["Puzzles & Seating Arrangement", "Blood Relations", "Direction Sense", "Coding-Decoding", "Input-Output", "Syllogism", "Inequalities"],
      "English Language": ["Reading Comprehension", "Cloze Test", "Error Correction", "Para Jumbles", "Match the Column", "Fill in the Blanks"],
      "Banking Awareness": ["Banking Terminology", "RBI & Monetary Policy", "Financial Awareness", "Current Banking Affairs", "Government Schemes"],
      "Computer": ["Computer Fundamentals", "MS Office", "Internet", "Networking", "Database Basics"],
    },
    importantDates: { "Notification": "April", "Prelims": "June", "Mains": "September", "Interview": "December" },
    tips: [
      "Focus on Data Interpretation (DI) — it's high weightage in Mains",
      "Read Financial Express / Economic Times for banking awareness",
      "Practise puzzles and seating arrangements daily",
      "Mains descriptive: practise formal letter and essay writing",
      "GK: focus on RBI policies, budget, economic surveys",
      "Sectional timing in Prelims — don't spend too long in one section",
    ],
    booksRecommended: [
      "Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal",
      "A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal",
      "Objective General English by S.P. Bakshi",
      "Banking Awareness by Arihant Experts"
    ]
  },
  {
    id: "ibps-po",
    previousPapers: "https://www.careerpower.in/ibps-po-previous-year-question-paper.html",
    name: "IBPS Probationary Officer",
    shortName: "IBPS PO",
    category: "banking",
    icon: "🏧",
    badge: "Multiple Banks",
    badgeColor: "#8b5cf6",
    difficulty: "High",
    overview:
      "IBPS PO recruits Probationary Officers in 11 public sector banks including Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank, and others. A single exam gives access to multiple banks.",
    conductedBy: "Institute of Banking Personnel Selection (IBPS)",
    officialSite: "https://ibps.in",
    eligibility: {
      age: "20–30 years",
      education: "Graduation in any discipline",
      nationality: "Indian Citizen",
      attempts: "No defined limit (within age bracket)",
    },
    vacancies: {
      total: "~3,500 – 5,000 annually",
      posts: ["PO in PNB, BOB, Canara Bank, Union Bank, Indian Bank, Central Bank, Bank of India, UCO Bank, Bank of Maharashtra, Punjab & Sind Bank, Indian Overseas Bank"],
    },
    salary: {
      payScale: "₹36,000 – ₹63,840 (Bipartite Wage Settlement)",
      inHand: "₹45,000 – ₹55,000 per month",
      perks: "DA, HRA, CCA, medical, pension scheme (NPS), staff loan",
    },
    examPattern: [
      { stage: "Prelims", mode: "CBT", subjects: "English (30), Reasoning (35), Quant (35) — 100 marks", duration: "60 mins", note: "Negative marking: -0.25" },
      { stage: "Mains", mode: "CBT + Descriptive", subjects: "Reasoning+Computer (45), Quant (35), GK (40), English (35) + Letter & Essay", duration: "3 hrs + 30 mins", note: "Descriptive: 25 marks" },
      { stage: "Interview", mode: "Offline Panel Interview", subjects: "Personal interview", duration: "20–30 mins", note: "100 marks, min 40% to qualify" },
    ],
    syllabus: {
      "Quantitative Aptitude": ["Data Interpretation", "Number Series", "Simplification", "Quadratic Equations", "Time Speed Distance", "Pipes & Cisterns", "Probability"],
      "Reasoning Ability": ["Puzzles", "Seating Arrangement", "Blood Relation", "Inequality", "Syllogism", "Machine Input-Output", "Direction Sense"],
      "English": ["Reading Comprehension", "Vocabulary", "Grammar", "Error Detection", "Sentence Correction"],
      "General/Economy/Banking Awareness": ["Current Affairs", "Indian Economy", "Banking & Financial Terms", "Government Schemes", "Capital Markets"],
    },
    importantDates: { "Notification": "July–August", "Prelims": "October", "Mains": "November", "Interview": "February–March" },
    tips: [
      "Similar pattern to SBI PO — cross-preparation works",
      "Maximise practice with Adda247, Oliveboard mock tests",
      "Banking awareness: read monthly banking digest",
      "For interview: prepare your graduation background + why banking",
      "Mains Descriptive: practise letter formats (formal/informal)",
    ],
    booksRecommended: [
      "Comprehensive Guide to IBPS Bank PO/MT Prelim + Main Exams by Disha Experts",
      "Data Interpretation & Data Sufficiency by Ananta Ashisha",
      "Word Power Made Easy by Norman Lewis"
    ],
    applicationSteps: [
      "Visit the official IBPS website at ibps.in.",
      "Click on the 'CRP PO/MT' notification link on the homepage.",
      "Select 'Click here for New Registration' and enter your basic details to get a Registration Number and Password.",
      "Upload your scanned photograph, signature, left thumb impression, and a hand-written declaration.",
      "Fill in your personal, educational, and experience details carefully.",
      "Choose your preferred examination centres for Prelims and Mains.",
      "Give your preference order for the participating banks (e.g., PNB, Canara, BoB).",
      "Pay the application fee of ₹850 (₹175 for SC/ST/PwBD) and submit the form."
    ]
  },
  {
    id: "rrb-ntpc",
    previousPapers: "https://www.adda247.com/jobs/rrb-ntpc-previous-year-question-paper/",
    name: "RRB Non-Technical Popular Categories",
    shortName: "RRB NTPC",
    category: "railway",
    icon: "🚂",
    badge: "Railway Jobs",
    badgeColor: "#ef4444",
    difficulty: "Medium",
    overview:
      "RRB NTPC is conducted by Railway Recruitment Boards to recruit candidates for various non-technical posts in Indian Railways — one of the largest recruitments in India.",
    conductedBy: "Railway Recruitment Boards (RRBs)",
    officialSite: "https://www.rrbcdg.gov.in",
    eligibility: {
      age: "18–33 years (varies by post)",
      education: "12th Pass OR Graduate (depending on post level)",
      nationality: "Indian Citizen",
      attempts: "No limit (within age eligibility)",
    },
    vacancies: {
      total: "~35,000 annually",
      posts: ["Junior Clerk cum Typist", "Station Master", "Goods Guard", "Senior Commercial cum Ticket Clerk", "Junior Account Assistant", "Senior Time Keeper", "Traffic Assistant", "Commercial Apprentice"],
    },
    salary: {
      payScale: "₹19,900 – ₹35,400 (7th Pay Commission, Level 2–6)",
      inHand: "₹25,000 – ₹45,000 per month",
      perks: "Free rail pass, housing, medical, uniform allowance",
    },
    examPattern: [
      { stage: "CBT 1 (Prelims)", mode: "CBT (Online)", subjects: "Maths (30), General Intelligence (30), General Awareness (40) — 100 Qs", duration: "90 mins", note: "Negative: -1/3" },
      { stage: "CBT 2 (Mains)", mode: "CBT (Online)", subjects: "Maths (35), General Intelligence (35), General Awareness (50), General Science (30) — 120 Qs", duration: "90 mins", note: "Negative: -1/3" },
      { stage: "CBAT / Typing Test / Document Verification", mode: "Skill-based", subjects: "Depends on post", duration: "Variable", note: "Qualifying" },
    ],
    syllabus: {
      "Mathematics": ["Number System", "Decimals", "Fractions", "LCM & HCF", "Ratio & Proportion", "Percentage", "Mensuration", "Time & Work", "Algebra", "Statistics"],
      "General Intelligence & Reasoning": ["Analogies", "Completion of Number Series", "Codes & Relationships", "Syllogism", "Venn Diagrams", "Data Interpretation"],
      "General Awareness": ["Current Affairs", "Games & Sports", "Art & Culture of India", "Indian Literature", "Indian Monuments", "General Science", "History", "Geography"],
      "General Science": ["Physics", "Chemistry", "Life Sciences (10th Standard level)"],
    },
    importantDates: { "Notification": "January–March", "CBT 1": "March–June", "CBT 2": "September–November", "Document Verification": "Next year" },
    tips: [
      "CBT 1 is just a screening — focus on accuracy",
      "General Science (10th level): NCERT books are enough",
      "Railway GK: know Indian Railways history, zones, speed records",
      "Practise arithmetic with shortcuts — saves crucial time",
    ],
    booksRecommended: [
      "Railway NTPC Guide by Arihant Experts",
      "Lucent's General Science",
      "Quicker Maths by M. Tyra",
      "RRB NTPC Solved Papers by Kiran Prakashan"
    ],
    applicationSteps: [
      "Visit the official website of your regional Railway Recruitment Board (e.g., rrbcdg.gov.in).",
      "Click on the 'Apply Online' link for the CEN NTPC notification.",
      "Select your desired RRB Region carefully (you can apply to only one RRB).",
      "Complete the basic registration to get your Registration ID and Password.",
      "Log in and fill out Part I of the application (Educational Details, Community, etc.).",
      "Set your post preferences in order of priority (e.g., Station Master > Goods Guard).",
      "Pay the examination fee of ₹500 (₹250 for reserved categories, partially refundable after CBT-1).",
      "Upload your scanned colour photograph and signature.",
      "Submit the application and save the confirmation page."
    ]
  },
  {
    id: "rrb-group-d",
    previousPapers: "https://www.careerpower.in/rrb-group-d-previous-year-papers.html",
    name: "RRB Group D",
    shortName: "RRB Group D",
    category: "railway",
    icon: "🛤️",
    badge: "10th Pass",
    badgeColor: "#f97316",
    difficulty: "Easy",
    overview:
      "RRB Group D is one of the largest recruitment drives for 10th pass / ITI holders. It recruits Track Maintainers, Helpers, Pointsmen and others in Indian Railways' Level 1 posts.",
    conductedBy: "Railway Recruitment Boards (RRBs)",
    officialSite: "https://www.rrbcdg.gov.in",
    eligibility: {
      age: "18–33 years",
      education: "10th Pass + ITI (National Trade Certificate) OR 10th + 2-year ITI from NCVT/SCVT",
      nationality: "Indian Citizen",
      attempts: "No limit",
    },
    vacancies: {
      total: "~1,00,000+ (varies by recruitment cycle)",
      posts: ["Track Maintainer Grade IV", "Helper/Assistant in Electrical", "Helper/Assistant in Mechanical", "Pointsman", "Porter", "Hospital Attendant"],
    },
    salary: {
      payScale: "₹18,000 per month (Level 1, 7th CPC)",
      inHand: "₹22,000 – ₹26,000 per month",
      perks: "Free train pass, railway quarters, medical, PF, pension",
    },
    examPattern: [
      { stage: "CBT (Computer Based Test)", mode: "Online", subjects: "Maths (25), General Intelligence (30), General Science (25), General Awareness (20) — 100 Qs", duration: "90 mins", note: "Negative: -1/3 per wrong answer" },
      { stage: "Physical Efficiency Test (PET)", mode: "Physical", subjects: "Male: Run 1000m in 4:15; Female: Run 1000m in 5:40; Carrying weights", duration: "Variable", note: "Qualifying only" },
      { stage: "Document Verification", mode: "Offline", subjects: "Certificate & document check", duration: "1 day", note: "Final stage" },
    ],
    syllabus: {
      "Mathematics": ["Number System", "BODMAS", "Decimals", "Fractions", "LCM, HCF", "Ratio & Time", "Percentage", "Profit & Loss", "Algebra", "Geometry"],
      "General Intelligence & Reasoning": ["Analogies", "Alphabetical & Number Series", "Coding & Decoding", "Mathematical Operations", "Venn Diagrams", "Missing Numbers"],
      "General Science": ["Physics (Light, Sound, Motion)", "Chemistry (Atoms, Metals, Acids)", "Biology (Cells, Nutrition, Diseases)", "10th standard level"],
      "General Awareness": ["Current Affairs", "Science & Technology", "Indian Culture", "Sports", "Indian Geography", "Economic Policy"],
    },
    importantDates: { "Notification": "March–April", "CBT": "August–October", "PET": "November–January", "DV": "February–March" },
    tips: [
      "10th-level content is all that's needed — don't over-prepare",
      "General Science: thoroughly revise NCERT class 9–10",
      "Physical fitness: start training 2–3 months before PET",
      "100 questions in 90 minutes — roughly 54 seconds per question",
      "Negative marking: skip if unsure, don't guess randomly",
    ],
    booksRecommended: [
      "RRB Group D Guide by Arihant",
      "Lucent's General Science",
      "Fast Track Objective Arithmetic by Rajesh Verma"
    ],
    applicationSteps: [
      "Visit the official website of your regional Railway Recruitment Board (RRB).",
      "Search for the RRC CEN (Level 1) notification and click on 'Apply Online'.",
      "Register yourself by providing your name, date of birth, mobile number, and email ID.",
      "Log in using your Registration No. and password to complete Part I of the application.",
      "Select your preferred RRB Zone carefully. Note: You cannot change this later.",
      "Pay the application fee of ₹500 (₹250 for reserved categories/ex-servicemen) via online payment.",
      "Upload your scanned recent passport-size photograph and signature as per specifications.",
      "Review your details in the application preview and submit the final form."
    ]
  },
  {
    id: "nda",
    previousPapers: "https://upsc.gov.in/examinations/previous-question-papers/archives?field_exam_name_value=National%20Defence%20Academy",
    name: "National Defence Academy",
    shortName: "NDA",
    category: "defence",
    icon: "⚔️",
    badge: "Armed Forces",
    badgeColor: "#14b8a6",
    difficulty: "High",
    overview:
      "NDA exam is conducted by UPSC twice a year to select candidates for the Indian Army, Navy, and Air Force. It's one of the premier defence training institutions in the world.",
    conductedBy: "Union Public Service Commission (UPSC)",
    officialSite: "https://upsconline.nic.in/",
    eligibility: {
      age: "16.5–19.5 years",
      education: "12th Pass (PCM for Navy/Air Force, any stream for Army)",
      nationality: "Indian Citizen / Nepalese / Bhutanese",
      attempts: "No defined limit (age bracket limits it to 2–3 attempts)",
    },
    vacancies: {
      total: "~400 per exam (2 exams/year = ~800 annually)",
      posts: ["Indian Army – NDA", "Indian Navy – Naval Academy", "Indian Air Force – NDA"],
    },
    salary: {
      payScale: "During training: ₹56,100/month (stipend). After commissioning: ₹56,100 – ₹2,50,000",
      inHand: "₹80,000+ after commissioning as Lieutenant",
      perks: "Free accommodation, clothing, ration, medical, CTC package with allowances",
    },
    examPattern: [
      { stage: "Written Exam", mode: "Offline (OMR)", subjects: "Mathematics (300 marks) + GAT/General Ability Test (600 marks)", duration: "2.5 hrs each", note: "Negative: -0.83 for Maths, -1.33 for GAT" },
      { stage: "SSB Interview", mode: "Physical + Psychological", subjects: "5-day selection process — screening, psychology, GTO, interview", duration: "5 days", note: "900 marks" },
      { stage: "Medical Examination", mode: "Physical & Medical", subjects: "Vision, fitness, medical standards", duration: "1 day", note: "Qualifying" },
    ],
    syllabus: {
      "Mathematics": ["Algebra", "Matrices & Determinants", "Trigonometry", "Analytical Geometry (2D & 3D)", "Differential Calculus", "Integral Calculus", "Vector Algebra", "Statistics & Probability"],
      "English (GAT)": ["Grammar & Usage", "Vocabulary", "Comprehension", "Cohesion"],
      "General Knowledge (GAT)": ["Physics", "Chemistry", "General Science", "History", "Freedom Movement", "Geography", "Current Events"],
    },
    importantDates: { "Notification": "January (NDA I), June (NDA II)", "Written Exam": "April (NDA I), September (NDA II)", "SSB Interview": "After written results" },
    tips: [
      "Start preparing in Class 11–12 alongside boards",
      "Mathematics is 300 marks — give it maximum time",
      "For SSB: work on communication, leadership, and confidence",
      "Physical fitness: daily running, push-ups, pull-ups essential",
      "Study NCERT Physics, Chemistry, Biology (Class 11–12) for GAT",
      "Vision requirements are strict — check eligibility early",
    ],
    booksRecommended: [
      "Mathematics for NDA/NA by R.S. Aggarwal",
      "Pathfinder for NDA & NA Entrance Examination by Arihant Experts",
      "Wren & Martin High School English Grammar and Composition"
    ],
    applicationSteps: [
      "Visit the UPSC official website at upsc.gov.in.",
      "Complete the One-Time Registration (OTR) profile if not already registered.",
      "Click on 'Apply Online' for the National Defence Academy and Naval Academy Examination.",
      "Fill Part I of the application: Basic details, preference of the wings (Army, Navy, Air Force, Naval Academy).",
      "Proceed to Part II: Pay the application fee of ₹100 (SC/ST/Sons of JCOs/NCOs/ORs are exempted).",
      "Upload scanned copies of your photograph, signature, and a valid photo ID.",
      "Select your preferred examination centre.",
      "Agree to the declaration and submit the form. Keep a printed copy for reference."
    ]
  },
  {
    id: "cds",
    previousPapers: "https://upsc.gov.in/examinations/previous-question-papers?field_exam_name_value=Combined+Defence+Services",
    name: "Combined Defence Services",
    shortName: "CDS",
    category: "defence",
    icon: "🎖️",
    badge: "Officer Entry",
    badgeColor: "#0ea5e9",
    difficulty: "High",
    overview:
      "CDS exam is conducted by UPSC twice a year for graduates who wish to join the Indian Army, Navy, and Air Force as commissioned officers. CDS is for graduates, unlike NDA which is for 12th pass.",
    conductedBy: "Union Public Service Commission (UPSC)",
    officialSite: "https://upsc.gov.in",
    eligibility: {
      age: "19–25 years (IMA/AFA), 19–22 years (INA)",
      education: "Graduate (Engineering for AFA/INA, any grad for IMA OTA)",
      nationality: "Indian Citizen",
      attempts: "Age-dependent",
    },
    vacancies: {
      total: "~450 per exam (2 exams/year)",
      posts: ["Indian Military Academy (IMA)", "Indian Naval Academy (INA)", "Air Force Academy (AFA)", "Officers' Training Academy (OTA) – Short Service Commission"],
    },
    salary: {
      payScale: "₹56,100 – ₹2,50,000 (Lieutenant to General)",
      inHand: "₹80,000+ as Lieutenant",
      perks: "Free accommodation, ration, medical, LTC, canteen, club memberships",
    },
    examPattern: [
      { stage: "Written Exam (IMA/INA/AFA)", mode: "Offline", subjects: "English (100 marks) + GK (100 marks) + Maths (100 marks)", duration: "2 hrs each", note: "Negative: -0.33" },
      { stage: "Written Exam (OTA)", mode: "Offline", subjects: "English (100 marks) + GK (100 marks)", duration: "2 hrs each", note: "No Maths for OTA" },
      { stage: "SSB Interview", mode: "Physical + Psychological", subjects: "5-day selection process", duration: "5 days", note: "300 marks" },
    ],
    syllabus: {
      "English": ["Spotting Errors", "Sentence Arrangement", "Synonyms & Antonyms", "Fill in the Blanks", "Comprehension"],
      "General Knowledge": ["Indian History", "Geography", "Polity", "Economy", "Science", "Current Affairs", "Defence News"],
      "Mathematics": ["Number System", "Algebra", "Trigonometry", "Geometry", "Statistics", "Mensuration"],
    },
    importantDates: { "Notification": "November (CDS I), May (CDS II)", "Exam": "February (CDS I), September (CDS II)", "SSB": "After written results" },
    tips: [
      "Build a strong English foundation — grammar + comprehension",
      "Keep up with current defence affairs and international news",
      "Mathematics is only for IMA/INA/AFA — not required for OTA",
      "SSB preparation: work on WAT, TAT, group tasks, personal interview",
      "Physical fitness: mandatory for medical and SSB",
    ],
    booksRecommended: [
      "Pathfinder CDS Examination by Arihant",
      "10 Practice Sets CDS by Arihant",
      "General Knowledge Manual by Pearson",
      "Quantitative Aptitude by R.S. Aggarwal"
    ],
    applicationSteps: [
      "Visit the UPSC official website at upsc.gov.in.",
      "Log in using your One-Time Registration (OTR) credentials.",
      "Under 'Active Examinations', click on the link for Combined Defence Services Examination (CDSE).",
      "Complete Part I: Fill in personal data and select your preferred academies (IMA, INA, AFA, OTA).",
      "Complete Part II: Pay the application fee of ₹200 (Female/SC/ST candidates are exempted).",
      "Upload your scanned photograph, signature, and a valid government-issued photo ID.",
      "Choose your exam centre and agree to the final declaration to submit.",
      "Download the PDF of the submitted application for future use."
    ]
  },
  {
    id: "drdo-ceptam",
    previousPapers: "https://www.careerpower.in/drdo-ceptam-previous-year-question-papers.html",
    name: "DRDO CEPTAM (Technician & Assistant)",
    shortName: "DRDO CEPTAM",
    category: "central",
    icon: "🔬",
    badge: "Defence R&D",
    badgeColor: "#a855f7",
    difficulty: "Medium",
    overview:
      "DRDO CEPTAM recruits Technicians (Tier I) and Senior Technical Assistants (Tier II) across various science and engineering disciplines for India's premiere defence research organisation.",
    conductedBy: "Defence Research & Development Organisation (DRDO)",
    officialSite: "https://drdo.gov.in",
    eligibility: {
      age: "18–28 years",
      education: "Diploma (Technician) / BSc / B.Tech (Tier II)",
      nationality: "Indian Citizen",
      attempts: "No defined limit",
    },
    vacancies: {
      total: "~1,000 – 5,000 per recruitment cycle",
      posts: ["Technician A", "Senior Technical Assistant B", "Admin & Allied Cadre"],
    },
    salary: {
      payScale: "₹21,700 – ₹35,400 (Level 3–6)",
      inHand: "₹28,000 – ₹45,000 per month",
      perks: "DRDO quarter/HRA, medical, canteen, excellent research environment",
    },
    examPattern: [
      { stage: "Tier I (Screening)", mode: "CBT", subjects: "General Intelligence & Reasoning Ability + Quantitative Ability & Numerical Aptitude + General Awareness — 150 Qs", duration: "2 hrs", note: "Negative: -0.5" },
      { stage: "Tier II (Trade Test)", mode: "CBT", subjects: "Trade/Discipline-specific questions + General English", duration: "90 mins", note: "Based on diploma/graduation subject" },
      { stage: "Document Verification", mode: "Offline", subjects: "Certificate verification", duration: "1 day", note: "Final stage" },
    ],
    syllabus: {
      "General Intelligence": ["Series", "Analogies", "Coding-Decoding", "Puzzle", "Blood Relation", "Directions"],
      "Quantitative Aptitude": ["Arithmetic", "Algebra", "Geometry", "Trigonometry", "Data Interpretation"],
      "General Awareness": ["Science & Technology", "Current Affairs", "DRDO Labs & Projects", "National Defence"],
      "Trade-Specific": ["Electronics", "Mechanical", "Computer Science", "Chemical", "Physics", "as per discipline"],
    },
    importantDates: { "Notification": "Irregular (check official site)", "Tier I": "1–3 months after notification", "Tier II": "2–3 months after Tier I" },
    tips: [
      "Tier II is discipline-specific — revise your diploma/degree syllabus thoroughly",
      "General awareness: focus on DRDO projects like Agni, Prithvi, Tejas",
      "Tier I is common for all — prepare Reasoning and Aptitude well",
      "DRDO has labs across India — check preferred locations before applying",
    ],
    booksRecommended: [
      "DRDO CEPTAM Tier I Guide by Arihant",
      "Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal",
      "A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal"
    ],
    applicationSteps: [
      "Visit the official DRDO website (drdo.gov.in) and navigate to the CEPTAM Recruitment board section.",
      "Click on the relevant advertisement link for Technician (Tier I) or STA-B (Tier II).",
      "Register online to receive your User ID and Password.",
      "Login and fill the detailed application form, ensuring you select the correct discipline/trade.",
      "Upload your scanned photograph (recently taken), signature, and required educational certificates.",
      "Pay the non-refundable application fee of ₹100 (Women/SC/ST/PwBD/ESM candidates are exempted).",
      "Choose your preferred examination city from the given list.",
      "Submit the application and download the auto-generated PDF receipt."
    ]
  },
  {
    id: "ts-group1",
    previousPapers: "http://tsstudycircle.co.in/Groups_TSPSC.html",
    name: "TSPSC Group 1 Services",
    shortName: "TS Group 1",
    category: "state",
    icon: "🌟",
    badge: "Most Prestigious TS",
    badgeColor: "#f59e0b",
    difficulty: "High",
    overview:
      "TSPSC Group 1 is Telangana's most prestigious state civil services exam conducted by the Telangana State Public Service Commission (TSPSC). It recruits officers for top Group A posts like Deputy Collector, DSP, Commercial Tax Officer, District Registrar and more — similar to UPSC but at the state level.",
    conductedBy: "Telangana State Public Service Commission (TSPSC)",
    officialSite: "https://websitenew.tgpsc.gov.in/",
    eligibility: {
      age: "18–44 years (Gen), relaxations for SC/ST/BC/EWS/PwD",
      education: "Any Degree (Bachelor's) from a recognised university",
      nationality: "Indian Citizen (Telangana state domicile preferred)",
      attempts: "As per age eligibility",
    },
    vacancies: {
      total: "~500–900 per recruitment cycle",
      posts: ["Deputy Collector", "Deputy Superintendent of Police (DSP)", "Commercial Tax Officer", "District Registrar", "Municipal Commissioner Grade II", "Mandal Parishad Development Officer (MPDO)", "District Employment Officer", "Assistant Audit Officer"],
    },
    salary: {
      payScale: "₹54,140 – ₹1,39,680 (Grade Pay + DA, as per TS PRC)",
      inHand: "₹65,000 – ₹1,20,000 per month (varies by post)",
      perks: "Government accommodation, vehicle, staff, medical, pension, DA",
    },
    examPattern: [
      { stage: "Prelims (Screening Test)", mode: "CBT (Online)", subjects: "General Studies & Mental Ability — 150 Qs, 150 marks", duration: "2.5 hrs", note: "Qualifying; marks NOT counted for final merit" },
      { stage: "Mains (Written Exam)", mode: "Descriptive (Offline)", subjects: "Paper I: General Essay (150 marks); Paper II: History, Culture & Society of Telangana (150 marks); Paper III: Economy & Development (150 marks); Paper IV: Indian Constitution & Polity (150 marks); Paper V: Data Interpretation & Problem Solving (150 marks); Paper VI: Science & Technology (150 marks)", duration: "3 hrs each paper", note: "Total 900 marks; conducted over 3–4 days" },
      { stage: "Interview", mode: "Personality Test", subjects: "Board interview assessing personality, leadership, awareness", duration: "20–30 mins", note: "75 marks" },
    ],
    syllabus: {
      "General Studies (Prelims)": ["Current Affairs (National & Telangana)", "Indian History", "Telangana History & Culture", "Indian Geography", "Telangana Geography", "Indian Polity", "Indian Economy", "Science & Technology", "Mental Ability & Reasoning"],
      "Paper I – General Essay": ["Essay on Social Issues", "Essay on Economic Issues", "Essay on Science & Technology", "Essay on Telangana Special Topics"],
      "Paper II – Telangana History, Society & Culture": ["Telangana Statehood Movement", "Nizam Rule & Hyderabad State", "Telangana Culture, Art & Literature", "Tribal Communities of Telangana", "Social Reform Movements", "Important Personalities of Telangana"],
      "Paper III – Economy & Development": ["Indian Economy Overview", "Telangana Economy & Key Sectors", "Agriculture in Telangana (Rythu Bandhu, Kalyanalakshmi)", "Infrastructure Development", "Government Flagship Schemes (Mission Bhagiratha, KCR Kit)", "Budget & Financial Planning"],
      "Paper IV – Indian Constitution & Polity": ["Preamble & Fundamental Rights", "Directive Principles", "Parliamentary System", "State Government & Legislature", "73rd & 74th Amendments (Panchayati Raj)", "Judiciary", "Constitutional Amendments"],
      "Paper V – Data Interpretation & Problem Solving": ["Data Interpretation (Tables, Charts, Graphs)", "Quantitative Aptitude", "Logical Reasoning", "Decision Making"],
      "Paper VI – Science & Technology": ["Physics & Chemistry Basics", "Biology & Environment", "IT & Computer Science", "Space Technology (ISRO)", "Biotechnology", "Emerging Technologies (AI, Blockchain)"],
    },
    importantDates: {
      "Notification": "Irregular (check TSPSC site)",
      "Prelims": "2–3 months after notification",
      "Mains": "3–6 months after Prelims",
      "Interview": "2–3 months after Mains results",
    },
    tips: [
      "Read Telangana history thoroughly — formation of state, statehood movement, Nizam era",
      "Follow Namaste Telangana / Eenadu daily for Telangana-specific current affairs",
      "Telangana government schemes are very important: Mission Bhagiratha, KCR Kit, T-Hub, etc.",
      "Use NCERT books for Indian Polity, Geography, and Economy as base",
      "Practise essay writing: structure your essays with intro, body, and conclusion",
      "Data Interpretation: practise tables, pie charts, bar graphs religiously",
      "For Interview: be thorough about your home district administration and Telangana development",
      "Group 1 requires 10–14 months of dedicated preparation",
    ],
    booksRecommended: [
      "Telangana History and Culture by Telugu Akademi",
      "Telangana Movement and State Formation by V. Prakash",
      "Indian Polity by M. Laxmikanth",
      "Telangana Economy by Telugu Akademi",
      "General Essay for TSPSC Group-I by V.K. Rao"
    ],
    applicationSteps: [
      "Visit the Telangana State Public Service Commission official website at tspsc.gov.in.",
      "Complete the One-Time Registration (OTR) profile using your Aadhaar card and educational details.",
      "Click on 'Apply Online' under the latest Group 1 Services notification.",
      "Verify your OTR details populated in the application form.",
      "Upload your scanned recent passport-size photograph, signature, and relevant local status/caste certificates if applicable.",
      "Pay the application processing fee and examination fee via the online payment gateway.",
      "Select your preferred examination centre within Telangana.",
      "Submit the application and download the generated PDF containing the application number."
    ]
  },
  {
    id: "ts-group2",
    previousPapers: "http://tsstudycircle.co.in/Groups_TSPSC.html",
    name: "TSPSC Group 2 Services",
    shortName: "TS Group 2",
    category: "state",
    icon: "📘",
    badge: "Group A & B Posts",
    badgeColor: "#3b82f6",
    difficulty: "Medium-High",
    overview:
      "TSPSC Group 2 recruits candidates for various Group B executive posts like Junior Accounts Officer, Assistant Section Officer, Prohibition & Excise Sub-Inspector, and more. It is a non-interview based exam — selection is purely based on written test marks.",
    conductedBy: "Telangana State Public Service Commission (TSPSC)",
    officialSite: "https://websitenew.tgpsc.gov.in/",
    eligibility: {
      age: "18–44 years (Gen), relaxations for reserved categories",
      education: "Degree (Bachelor's) from a recognised university",
      nationality: "Indian Citizen (Telangana state domicile)",
      attempts: "Within age eligibility (no defined attempt limit)",
    },
    vacancies: {
      total: "~700–1,400 per recruitment cycle",
      posts: ["Junior Accounts Officer (JAO)", "Assistant Section Officer (ASO)", "Prohibition & Excise Sub-Inspector", "Assistant Labour Officer", "Supervisor (Women & Child Welfare)", "Mandal Revenue Inspector (MRI)", "Assistant Registrar Co-operative Societies"],
    },
    salary: {
      payScale: "₹35,120 – ₹87,130 (as per TS PRC 2022)",
      inHand: "₹42,000 – ₹70,000 per month",
      perks: "DA, HRA, Medical, GPF, Pension",
    },
    examPattern: [
      { stage: "Paper I – General Studies & Mental Ability", mode: "CBT (Online)", subjects: "History, Geography, Polity, Economy, Science, Current Affairs, Mental Ability — 150 Qs, 150 marks", duration: "2.5 hrs", note: "Negative marking: -1/3" },
      { stage: "Paper II – Telangana History, Society & Culture", mode: "CBT (Online)", subjects: "Telangana Movement, Culture, Tribes, Society, Key Personalities — 150 Qs, 150 marks", duration: "2.5 hrs", note: "Negative marking: -1/3" },
    ],
    syllabus: {
      "Paper I Part A – General Studies": ["Current Affairs", "Indian History", "Indian Geography", "Indian Polity", "Economic & Social Development", "Science & Technology", "Environmental Issues"],
      "Paper I Part B – Mental Ability": ["Reasoning", "Data Interpretation", "Analytical Ability", "Problem Solving", "Basic Numeracy"],
      "Paper II – Telangana Movement & Society": ["Telangana Statehood Struggle", "Nizam Period", "Hyderabad Liberation", "Important Personalities (KCR, Chakali Ailamma, etc.)", "Tribal & Backward Communities in Telangana", "Telangana Art & Literature", "Key Government Schemes of Telangana"],
    },
    importantDates: {
      "Notification": "Periodically (check TSPSC official site)",
      "Exam": "2–3 months after notification",
      "Result": "1–2 months after exam",
      "Certificate Verification": "After result",
    },
    tips: [
      "No interview — your written score is everything; aim for maximum accuracy",
      "Paper II (Telangana History) is very scoring — focus heavily on it",
      "Know all major Telangana government schemes launched after 2014",
      "Practise MCQs on Telangana culture, festivals, rivers, and geography",
      "Use Telangana SCERT books (Class 6–10) for state-specific content",
      "Negative marking exists — attempt only what you know",
    ],
    booksRecommended: [
      "Telangana Movement by V. Prakash",
      "Telangana History by Telugu Akademi",
      "Indian Polity by M. Laxmikanth",
      "Telangana Economy (Latest Edition) by Telugu Akademi"
    ],
    applicationSteps: [
      "Visit the TSPSC official website at tspsc.gov.in.",
      "Ensure your One-Time Registration (OTR) is updated with your latest degree details.",
      "Find the Group 2 Services notification and click on the 'Apply Online' link.",
      "Login using your TSPSC ID and date of birth.",
      "Check the pre-filled data, enter your post preferences, and choose an exam centre.",
      "Upload required documents, including photo, signature, and any claimed reservation certificates (EWS/BC/SC/ST).",
      "Pay the application online processing and examination fee.",
      "Submit the application carefully as edit windows are rarely provided, and save the PDF."
    ]
  },
  {
    id: "ts-group3",
    previousPapers: "http://tsstudycircle.co.in/Groups_TSPSC.html",
    name: "TSPSC Group 3 Services",
    shortName: "TS Group 3",
    category: "state",
    icon: "📗",
    badge: "Junior Assistant",
    badgeColor: "#10b981",
    difficulty: "Medium",
    overview:
      "TSPSC Group 3 recruits candidates for junior-level executive posts like Junior Assistant, Junior Steno, Typist, and other clerical posts in various Telangana state departments. Suitable for those who have completed graduation and want to start their government career.",
    conductedBy: "Telangana State Public Service Commission (TSPSC)",
    officialSite: "https://websitenew.tgpsc.gov.in/",
    eligibility: {
      age: "18–44 years (Gen), relaxations for SC/ST/BC/PwD",
      education: "Degree from a recognised university (some posts require specific streams)",
      nationality: "Indian Citizen (Telangana state domicile)",
      attempts: "Within age eligibility",
    },
    vacancies: {
      total: "~1,000–3,000 per recruitment cycle",
      posts: ["Junior Assistant (JA)", "Junior Steno", "Typist", "Junior Accounts Assistant", "Village Revenue Officer (VRO)", "Revenue Divisional Officer subordinate posts"],
    },
    salary: {
      payScale: "₹21,230 – ₹63,010 (as per TS PRC)",
      inHand: "₹26,000 – ₹40,000 per month",
      perks: "DA, HRA, Medical, GPF, Pension",
    },
    examPattern: [
      { stage: "Written Exam – Paper I", mode: "CBT (Online)", subjects: "General Studies & Mental Ability — 150 Qs, 150 marks", duration: "2.5 hrs", note: "Negative: -1/3" },
      { stage: "Written Exam – Paper II", mode: "CBT (Online)", subjects: "Telangana History, Culture, Society — 150 Qs, 150 marks", duration: "2.5 hrs", note: "Negative: -1/3" },
      { stage: "Skill Test (for Steno/Typist posts)", mode: "Typing/Steno Test", subjects: "Typing speed test in English or Telugu", duration: "15–30 mins", note: "Qualifying" },
    ],
    syllabus: {
      "General Studies": ["Current Affairs (National & State)", "Indian History", "Indian Geography", "Indian Polity", "Telangana Geography", "Basic Science", "Economic Development"],
      "Mental Ability": ["Analogies", "Number Series", "Coding-Decoding", "Data Interpretation", "Logical Reasoning", "Quantitative Aptitude"],
      "Telangana History & Culture": ["Telangana Statehood Movement", "Culture & Traditions", "Important Rivers & Projects (Kaleshwaram, Srisailam)", "Telangana Government Schemes", "Notable Personalities"],
    },
    importantDates: {
      "Notification": "Periodically (check TSPSC official site)",
      "Exam": "2–3 months after notification",
      "Skill Test": "For Steno/Typist posts",
      "Certificate Verification": "After results",
    },
    tips: [
      "Good starting point for fresh graduates — competition is less intense than Group 1 & 2",
      "Telangana-specific GK is key — focus on state rivers, dams, reservoirs",
      "For Typist posts: practise Telugu/English typing — aim for 40+ WPM",
      "Revise current affairs monthly for the past 6 months before exam",
      "Use mock tests available on Sakshi Education, Eenadu Pratibha for TS exams",
    ],
    booksRecommended: [
      "Telangana History & Culture by Telugu Akademi",
      "Lucent's General Knowledge",
      "Arithmetic & Reasoning by R.S. Aggarwal",
      "Current Affairs Digest for Telangana Exams"
    ],
    applicationSteps: [
      "OTR (One Time Registration): Visit the TGPSC website and register via the 'One Time Registration' link. If already registered, skip to step 2.",
      "Login: Log in with your TSPSC ID and date of birth.",
      "Find Notification: Select the 'Online Application' link corresponding to the Group 3 Services Notification.",
      "Fill Application: Fill in required academic and personal details, ensuring accuracy.",
      "Upload Documents: Upload scanned copies of your photo and signature.",
      "Pay Fee: Pay the examination fee ( ) and application processing fee ( - note: fees may vary in new notifications) via online modes like Net Banking, Credit Card, or Debit Card.",
      "Submit & Print: Review the application and click 'Final Submit,' then print the application for your records."
    ]
  },
  {
    id: "ts-group4",
    previousPapers: "http://tsstudycircle.co.in/Groups_TSPSC.html",
    name: "TSPSC Group 4 Services",
    shortName: "TS Group 4",
    category: "state",
    icon: "📕",
    badge: "Intermediate Level",
    badgeColor: "#ef4444",
    difficulty: "Easy-Medium",
    overview:
      "TSPSC Group 4 is open to Intermediate (12th pass) candidates. It recruits for lower-level posts like Junior Assistant (clerical), Village Revenue Assistants, and similar subordinate posts in various departments of the Telangana government. Ideal entry-level government job for 12th pass candidates.",
    conductedBy: "Telangana State Public Service Commission (TSPSC)",
    officialSite: "https://websitenew.tgpsc.gov.in/",
    eligibility: {
      age: "18–44 years (Gen), relaxations for reserved categories",
      education: "Intermediate (12th Pass) from a recognised board — TS State Board / CBSE / ICSE",
      nationality: "Indian Citizen (Telangana state domicile)",
      attempts: "Within age eligibility",
    },
    vacancies: {
      total: "~2,000–5,000 per recruitment cycle",
      posts: ["Junior Assistant (Clerical)", "Village Revenue Assistant (VRA)", "Revenue Sub-Inspector Support Staff", "Data Entry Operator (DEO)", "Field Assistant"],
    },
    salary: {
      payScale: "₹17,490 – ₹47,010 (as per TS PRC)",
      inHand: "₹22,000 – ₹32,000 per month",
      perks: "DA, HRA, Medical, GPF, Pension",
    },
    examPattern: [
      { stage: "Written Exam", mode: "CBT (Online)", subjects: "General Studies & Mental Ability (75 Qs, 75 marks) + Telangana Movement, Culture & Society (75 Qs, 75 marks) — Total 150 Qs, 150 marks", duration: "2.5 hrs", note: "Negative marking: -1/3 per wrong answer" },
      { stage: "Certificate Verification", mode: "Offline", subjects: "Original documents check (Caste, Residence, Marks memos)", duration: "1 day", note: "Mandatory for selection" },
    ],
    syllabus: {
      "General Studies (10th + Intermediate level)": ["Indian History", "Indian Geography", "Indian Polity", "General Science (Physics, Chemistry, Biology)", "Current Affairs", "Telangana Geography", "Basic Mathematics"],
      "Mental Ability": ["Number Series", "Analogies", "Logical Reasoning", "Data Interpretation", "Coding-Decoding", "Simple Arithmetic"],
      "Telangana Movement & Culture": ["Telangana Statehood Struggle", "Nizam Rule", "Telangana Culture, Festivals, Cuisine", "Important Rivers & Projects in Telangana", "Post-Statehood Government Schemes", "Important Personalities of Telangana"],
    },
    importantDates: {
      "Notification": "Periodically (check TSPSC official site)",
      "Exam": "2–3 months after notification",
      "Certificate Verification": "After result announcement",
    },
    tips: [
      "Great entry-level option for 12th pass students — don't wait for a degree",
      "Telangana Movement section: study from Telangana SCERT textbooks & YouTube lectures",
      "10th-level General Science and Maths are sufficient — don't over-study",
      "Negative marking: skip questions when completely unsure",
      "Stay updated on Telangana government schemes: Mission Kakatiya, Aasara Pensions, KCR Kit",
      "Appear and gain experience — if selected, it becomes a stepping stone to Group 3/2/1",
    ],
    booksRecommended: [
      "General Studies for TSPSC by Telugu Akademi",
      "Telangana Movement and Culture for Group IV by V. Prakash",
      "Arithmetic & Reasoning by R.S. Aggarwal",
      "State Syllabus (SCERT) Books Class 6 to 10"
    ],
    applicationSteps: [
      "OTR Registration: Visit the TGPSC website and complete the One Time Registration (OTR) to obtain a TSPSC ID, if you haven't already.",
      "Log In: Go to the official website and log in using your TSPSC ID and Date of Birth.",
      "Find Notification: Click on the direct apply link for the Group 4 notification.",
      "Fill Application: Fill in all required fields accurately, including educational qualifications, post preferences, and personal details.",
      "Upload Documents: Upload scanned copies of your photograph and signature.",
      "Pay Fee: Pay the required fee: Rs. 200 (application) + Rs. 80 (examination). Note: Exam fees may be exempted for unemployed candidates.",
      "Submit & Print: Review all entered details carefully before final submission, then download/print the application for future reference."
    ]
  },
  {
    id: "state-police",
    previousPapers: "https://testbook.com/telangana-police-constable/previous-year-papers",
    name: "State Police Services",
    shortName: "State Police",
    category: "state",
    icon: "👮",
    badge: "Uniformed Services",
    badgeColor: "#3b82f6",
    difficulty: "Medium",
    overview: "State Police Recruitment Boards conduct exams for crucial law enforcement roles such as Sub-Inspector (SI), Police Constable, Head Constable, and Fireman. These roles are vital for maintaining state security and public order.",
    conductedBy: "Respective State Police Recruitment Boards (e.g., TSLPRB, UPPRPB, TNUSRB)",
    officialSite: "https://www.tslprb.in/",
    eligibility: {
      age: "18–28 years (varies by state and rank)",
      education: "12th Pass for Constable; Graduation for Sub-Inspector",
      nationality: "Indian Citizen (State domicile often preferred)",
      attempts: "Until age limit is reached",
    },
    vacancies: {
      total: "5,000–20,000+ per state depending on the cycle",
      posts: ["Sub-Inspector (SI)", "Police Constable", "Armed Reserve Constable", "Jail Warder", "Fireman"],
    },
    salary: {
      payScale: "State PRCs apply",
      inHand: "₹25,000 – ₹55,000 per month (depending on rank and state)",
      perks: "Risk allowance, quarters, medical facilities, uniform allowance",
    },
    examPattern: [
      { stage: "Preliminary Exam", mode: "OMR / CBT", subjects: "General Studies & Reasoning", duration: "2–3 hrs", note: "Qualifying based on state" },
      { stage: "Physical Efficiency Test (PET / PMT)", mode: "Physical", subjects: "Running (e.g., 1600m), Long Jump, High Jump, Height/Chest Measurements", duration: "1 day", note: "Strictly Qualifying; marks may be added in some states" },
      { stage: "Mains / Final Exam", mode: "OMR / CBT", subjects: "General Studies, Arithmetic, Reasoning, Language (English/Local)", duration: "3 hrs", note: "Core merit deciding stage" },
    ],
    syllabus: {
      "General Studies": ["Indian History", "Geography", "Polity", "Economy", "State Specific History & Culture", "Current Affairs"],
      "Reasoning & Mental Ability": ["Analogies", "Coding-Decoding", "Number Series", "Spatial Visualization", "Statement-Conclusion"],
      "Arithmetic": ["Percentages", "Averages", "Time & Work", "Time & Distance", "Simple/Compound Interest", "Mensuration"],
    },
    importantDates: {
      "Notification": "Announced irregularly by state boards",
      "PET/PMT": "Conducted before or after Prelims depending on state code",
    },
    tips: [
      "Physical fitness is equally as important as written preparation.",
      "Start long-distance running practice (e.g., 1600m/800m) months before the PET.",
      "Ensure you meet the strict height and chest/vision requirements before applying.",
      "State-specific General Knowledge holds high weightage."
    ],
    booksRecommended: [
      "Lucent’s General Knowledge",
      "Quantitative Aptitude by R.S. Aggarwal",
      "State Specific GK Books (Telugu Akademi, Arihant, etc.)"
    ],
    applicationSteps: [
      "Check the official State Police Recruitment Board website (e.g., TSLPRB, UPPRPB).",
      "Read the detailed notification for Physical Measurement (PMT) requirements.",
      "Register online using mobile number and Aadhaar.",
      "Fill the application form and select your preferred zones/districts.",
      "Upload a recent photograph and signature.",
      "Pay the examination fee online.",
      "Download the application acknowledgment and prepare for the initial stage (Prelims or PET/PMT depending on the state)."
    ]
  },
  {
    id: "state-education",
    previousPapers: "https://www.adda247.com/teaching-jobs-exam/ts-tet-previous-year-question-papers/",
    name: "State Education & Teacher Recruitment",
    shortName: "Teachers (TET/DSC)",
    category: "state",
    icon: "👩‍🏫",
    badge: "Education Dept",
    badgeColor: "#8b5cf6",
    difficulty: "Medium",
    overview: "State Education Departments recruit teachers for Primary, Secondary, and Higher Secondary schools as well as lecturers for state colleges. This is done through Teacher Eligibility Tests (TET) followed by state-specific recruitment exams (like DSC/TRT).",
    conductedBy: "State School Education Departments / State PSCs",
    officialSite: "https://tgdsc.aptonline.in/tgdsc/",
    schoolEduSite: "https://schooledu.telangana.gov.in/SCHOOLEDUCATION/",
    tetExamSite: "https://tgtet.aptonline.in/tgtet/",
    eligibility: {
      age: "18–44 years (relaxations apply)",
      education: "D.Ed / B.Ed / M.Ed with relevant degree; Must pass State TET / CTET",
      nationality: "Indian Citizen (Local district quotas apply)",
      attempts: "No limit until age expiry",
    },
    vacancies: {
      total: "10,000–50,000+ per state cycle",
      posts: ["Secondary Grade Teacher (SGT)", "School Assistant (SA)", "Post Graduate Teacher (PGT)", "College Lecturer", "Education Officer"],
    },
    salary: {
      payScale: "State PRCs apply",
      inHand: "₹30,000 – ₹70,000+ per month",
      perks: "Job security, favorable working hours, prolonged vacations (summer/winter).",
    },
    examPattern: [
      { stage: "Teacher Eligibility Test (TET)", mode: "OMR / CBT", subjects: "Child Development & Pedagogy, Language I, Language II, Mathematics/Science/Social", duration: "2.5 hrs", note: "Mandatory qualification test (valid for lifetime)" },
      { stage: "Teacher Recruitment Test (TRT/DSC)", mode: "CBT", subjects: "Subject Knowledge, General Knowledge, Perspectives in Education", duration: "2.5–3 hrs", note: "Final Selection Merit List" },
    ],
    syllabus: {
      "Child Development & Pedagogy": ["Understanding Learning", "Pedagogical Concerns", "Inclusive Education"],
      "Subject Content (School Level)": ["Based on State Board Syllabi (Class 1 to 10/12) for the specific subject applied (Maths, Science, Social, English)"],
      "Perspectives in Education": ["History of Education in India", "Teacher Empowerment", "Educational Acts & Policies (RTE, NEP)"],
    },
    importantDates: {
      "TET Exam": "Usually conducted once a year by states",
      "DSC/TRT Notification": "Irregular, bulk hiring when announced",
    },
    tips: [
      "Base your subject preparation completely on State Board / SCERT textbooks from Class 3 to Class 10/12.",
      "Child Development & Pedagogy is the key differentiator in TET.",
      "Previous year TET/CTET question papers are highly repetitive and useful."
    ],
    booksRecommended: [
      "State SCERT Textbooks (most critical)",
      "Child Development & Pedagogy by Disha Experts",
      "General Knowledge/Current Affairs yearbooks"
    ],
    applicationSteps: [
      "Ensure you possess the required D.Ed or B.Ed qualification.",
      "Apply for and clear the State TET (Teacher Eligibility Test) or CTET.",
      "Wait for the State DSC (District Selection Committee) or TRT notification.",
      "Apply online, uploading TET scores and academic certificates.",
      "Pay the application processing fee.",
      "Take the TRT exam; selection is based purely on the written exam merit (and TET weightage in some states)."
    ]
  },
  {
    id: "state-healthcare",
    previousPapers: "https://www.adda247.com/exams/telangana/telangana-mpha-previous-year-papers/",
    name: "State Healthcare & Medical Services",
    shortName: "Medical Dept",
    category: "state",
    icon: "⚕️",
    badge: "Health Dept",
    badgeColor: "#10b981",
    difficulty: "Medium-High",
    overview: "State Medical Recruitment Boards (or PSCs) hire registered professionals for government hospitals, PHCs, and state medical colleges. Roles include Civil Assistant Surgeons (Doctors), Staff Nurses, Pharmacists, and Lab Technicians.",
    conductedBy: "State Medical & Health Recruitment Boards (MHSRB) / PSCs",
    officialSite: "https://mhsrb.telangana.gov.in/Home",
    eligibility: {
      age: "18–44 years (Standard state upper limit)",
      education: "MBBS / BDS / B.Sc Nursing / GNM / D.Pharm / B.Pharm / DMLT (Must be registered with respective State Councils)",
      nationality: "Indian Citizen",
      attempts: "Age limit constraint",
    },
    vacancies: {
      total: "Varies; bulk hiring of 1,000–5,000+ nurses/pharmacists frequently",
      posts: ["Civil Assistant Surgeon (CAS)", "Staff Nurse", "Pharmacist", "Lab Technician", "Health Inspector"],
    },
    salary: {
      payScale: "State PRCs Apply",
      inHand: "₹35,000 (Nurse) – ₹90,000+ (CAS) per month",
      perks: "Non-Practicing Allowance (for doctors), job security, government health schemes",
    },
    examPattern: [
      { stage: "Written Exam", mode: "OMR / CBT", subjects: "Core Medical/Nursing/Pharmacy Subject Knowledge + Basic General Studies", duration: "2 hrs", note: "Selection is heavily weighted on this score" },
      { stage: "Experience Weightage", mode: "Evaluation", subjects: "Weightage given for prior service in State Contract/Outsourcing/Covid duties", duration: "N/A", note: "Can range from 10-20 marks directly added to tally" },
    ],
    syllabus: {
      "Core Subject": ["Syllabus corresponding to the qualifying degree (e.g., INC syllabus for Nursing, PCI syllabus for Pharmacy, NMC for MBBS)"],
      "General Knowledge (Optional per state)": ["Basic State GK", "Current Affairs", "Healthcare Policies of the State"],
    },
    importantDates: {
      "Notification": "Frequent throughout the year based on departmental needs",
    },
    tips: [
      "Ensure your registration with the State Medical/Nursing/Pharmacy council is active and up to date before applying.",
      "Written exams focus heavily on core academic syllabus rather than general aptitude.",
      "Contractual experience in state government hospitals often carries immense weightage points."
    ],
    booksRecommended: [
      "Target High (for Staff Nurses)",
      "Standard academic textbooks for MBBS/Pharma",
      "Previous year MHSRB/PSC question banks"
    ],
    applicationSteps: [
      "Verify that your registration with the State Medical/Nursing/Pharmacy Council is valid.",
      "Visit the state's Medical Health Services Recruitment Board website.",
      "Apply online referencing your council registration number.",
      "Upload experience certificates if claiming weightage marks (e.g., Covid duty certificates).",
      "Pay the online application fee.",
      "Appear for the CBT written examination."
    ]
  },
  {
    id: "state-engineering",
    previousPapers: "https://websitenew.tgpsc.gov.in/oldquestionp.jsp",
    name: "State Engineering Services (AE/AEE/JE)",
    shortName: "AE / JE",
    category: "state",
    icon: "🏗️",
    badge: "Engineering Groups",
    badgeColor: "#f97316",
    difficulty: "High",
    overview: "State Public Service Commissions conduct exams to recruit Assistant Engineers (AE), Assistant Executive Engineers (AEE), and Junior Engineers (JE) for core departments like Public Works (R&B), Irrigation, Water Supply, and Rural Development.",
    conductedBy: "State Public Service Commissions (e.g., TSPSC, UPPSC)",
    officialSite: "https://websitenew.tgpsc.gov.in/",
    eligibility: {
      age: "18–44 years",
      education: "B.E / B.Tech (Civil, Mech, Electrical) for AE/AEE; Diploma for JE",
      nationality: "Indian Citizen (Local state zones apply)",
      attempts: "Age limit constraint",
    },
    vacancies: {
      total: "500–3,000+ per notification",
      posts: ["Assistant Executive Engineer (AEE)", "Assistant Engineer (AE)", "Junior Engineer (JE)", "Town Planning Officer"],
    },
    salary: {
      payScale: "Group B Scale for AE/AEE",
      inHand: "₹50,000 – ₹85,000+ per month",
      perks: "Government vehicle (for site visits), DA, HRA, state pension.",
    },
    examPattern: [
      { stage: "Paper I", mode: "CBT / OMR", subjects: "General Studies & General Abilities", duration: "2.5 hrs", note: "150 Marks (General state syllabus)" },
      { stage: "Paper II", mode: "CBT / OMR", subjects: "Core Engineering Subject (Civil/Mech/Elec) at Degree/Diploma Level", duration: "2.5 hrs", note: "150 Marks (Core scoring paper)" },
    ],
    syllabus: {
      "General Studies": ["State History & Culture", "Indian Polity & Economy", "Geography", "Current Affairs", "Basic English & Reasoning"],
      "Civil Engineering (Example)": ["Solid Mechanics", "Fluid Mechanics", "Surveying", "Building Materials", "Structural Analysis", "Geotechnical Engg", "Environmental Engg"],
      "Electrical Engineering (Example)": ["Circuit Theory", "Electrical Machines", "Power Systems", "Control Systems", "Power Electronics"],
    },
    importantDates: {
      "Notification": "Announced based on departmental vacancies by PSCs",
      "Exam": "Typically 3-4 months after notification",
    },
    tips: [
      "Paper II (Core subject) usually decides the final selection; do not ignore the massive syllabus.",
      "Prepare simultaneously for SSC JE and State AE/JE, as the technical syllabus is almost identical.",
      "State GK (Paper I) is crucial because technical students often score similarly in Paper II."
    ],
    booksRecommended: [
      "Objective Civil/Electrical/Mechanical Engineering by R.S. Khurmi",
      "Made Easy Handbooks for quick revision",
      "Previous Year Question Papers of State PSCs"
    ],
    applicationSteps: [
      "Navigate to your State Public Service Commission website.",
      "Ensure you have a One-Time Registration (OTR) profile with your Engineering/Diploma qualifications updated.",
      "Find the active notification for AE/AEE/JE recruitment.",
      "Apply online and choose your specific engineering stream (Civil, Mechanical, Electrical).",
      "Upload required caste/local status certificates.",
      "Pay the application and examination fee.",
      "Download the PDF application receipt and start preparing for the two-paper written test."
    ]
  },
  {
    id: "state-civil-india",
    previousPapers: "https://upsc.gov.in/examinations/previous-question-papers",
    name: "State Civil Services (General)",
    shortName: "State PSC (India)",
    category: "state-india",
    icon: "🏛️",
    badge: "Admin Services",
    badgeColor: "#4f46e5",
    difficulty: "High",
    overview: "State Civil Services exams are conducted by respective State Public Service Commissions (e.g., UPPSC, MPSC, KPSC, BPSC, WBPSC) to recruit officers for high-ranking administrative positions in the state government.",
    conductedBy: "Respective State Public Service Commissions",
    officialSite: "Search in the official state-wise Public Civil Service portal",
    eligibility: {
      age: "21–35 years (varies by state)",
      education: "Bachelor's Degree in any discipline",
      nationality: "Indian Citizen",
      attempts: "Varies by State (usually no limit until age)",
    },
    vacancies: {
      total: "Varies (100–1000+ per state)",
      posts: ["Deputy Collector", "Dy. Superintendent of Police (DSP)", "Block Development Officer (BDO)", "Commercial Tax Officer", "Assistant Registrar"],
    },
    salary: {
      payScale: "State Grade A / Group 1 Scale",
      inHand: "₹56,100 – ₹1,50,000+ per month",
      perks: "Official vehicle, government accommodation, domestic help allowance, high social status.",
    },
    examPattern: [
      { stage: "Preliminary Exam", mode: "Objective (Offline)", subjects: "General Studies, Aptitude (CSAT)", duration: "2 hrs each", note: "Qualifying in nature" },
      { stage: "Main Exam", mode: "Descriptive (Written)", subjects: "General Studies I-IV, English/Regional Language, Optional Subjects", duration: "3 hrs per paper", note: "Merit count" },
      { stage: "Interview", mode: "Personality Test", subjects: "General Awareness, Communication, Ethical Values", duration: "30-45 mins", note: "Final selection weightage" },
    ],
    syllabus: {
      "General Studies": ["Indian History", "Geography", "Polity & Governance", "Economy", "Environment", "Science & Tech"],
      "State Specific Knowledge": ["History, Culture, Geography, and current affairs of the specific state"],
      "Ethics & Aptitude": ["Logical Reasoning", "Problem Solving", "Integrity", "Decision Making"],
    },
    importantDates: {
      "Notification": "Annual or biennial depending on the state",
      "Exam Cycle": "Varies by PSC schedule",
    },
    tips: [
      "Master the geography, history, and economy of your target state.",
      "Read local state newspapers daily for regional current affairs.",
      "Practice descriptive answer writing for the Mains stage.",
      "Stay updated with state-specific government schemes."
    ],
    booksRecommended: [
      "Laxmikanth for Indian Polity",
      "Spectrum for Modern History",
      "State-specific SCERT Books (Class 6-12)",
      "Standard State GK Books (Arihant, McGraw Hill)"
    ],
    applicationSteps: [
      "Visit the official website of your target State Public Service Commission.",
      "Complete the One-Time Registration (OTR) with personal and educational details.",
      "Check the 'Active Notifications' section for State Civil Services recruitment.",
      "Fill the online application form and upload scanned photo, signature, and community certificates.",
      "Pay the application fee as per your category.",
      "Download the hall ticket approximately 10-15 days before the exam."
    ]
  },
  {
    id: "state-teacher-india",
    previousPapers: "https://www.adda247.com/teaching-jobs-exam/previous-year-paper-for-all-teaching-exam/",
    name: "State Teacher Recruitment (TET/DSC)",
    shortName: "Teachers (India)",
    category: "state-india",
    icon: "👨‍🏫",
    badge: "Education Services",
    badgeColor: "#8b5cf6",
    difficulty: "Medium",
    overview: "State-wide recruitment for primary and secondary government school teachers. Candidates must qualify for the State Teacher Eligibility Test (TET) and subsequently clear the District Selection Committee (DSC) or Teacher Recruitment Test (TRT).",
    conductedBy: "State School Education Departments",
    officialSite: "https://www.education.gov.in",
    eligibility: {
      age: "18–44 years (Varies by State)",
      education: "Graduation + B.Ed / D.Ed (Must pass TET/CTET)",
      nationality: "Indian Citizen",
      attempts: "No limit until age limit",
    },
    vacancies: {
      total: "Large bulk hirings (10,000+ frequently)",
      posts: ["Secondary Grade Teacher (SGT)", "School Assistant", "Junior Lecturer", "PGT/TGT"],
    },
    salary: {
      payScale: "State PRC Scales",
      inHand: "₹30,000 – ₹70,000 per month",
      perks: "Job security, summer vacations, limited working hours, family health benefits.",
    },
    examPattern: [
      { stage: "Teacher Eligibility Test (TET)", mode: "Objective", subjects: "Pedagogy, Languages, Subject Knowledge", duration: "2.5 hrs", note: "Lifetime validity once qualified" },
      { stage: "Recruitment Test (DSC/TRT)", mode: "Objective (CBT/OMR)", subjects: "Perspectives in Education, Subject Knowledge, General Awareness", duration: "3 hrs", note: "Final Merit List" },
    ],
    syllabus: {
      "Pedagogy & Psychology": ["Child Development", "Learning Theories", "Pedagogical Concerns"],
      "Subject Content": ["Syllabus based on state school curriculum for relevant subjects (Maths, Science, Social)"],
      "Education Policy": ["RTE Act 2009", "NEP 2020", "National Curriculum Framework (NCF)"],
    },
    importantDates: {
      "Notification": "Announced by the state educational boards periodically",
    },
    tips: [
      "Study State SCERT textbooks thoroughly as they are the source of most questions.",
      "Focus heavily on Child Development and Pedagogy (CDP).",
      "Check previous years' cutoff scores for your district and category.",
      "Keep your TET qualifying certificate ready and verify its validity."
    ],
    booksRecommended: [
      "State SCERT Textbooks (Class 1-10)",
      "Child Development & Pedagogy by Pearson/Disha",
      "Subject specific guidebooks by local authors"
    ],
    applicationSteps: [
      "Ensure you meet the academic qualifications (D.Ed/B.Ed and TET pass).",
      "Monitor the state education department portal for 'Mega DSC' or 'TRT' notifications.",
      "Register online using your TET hall ticket number for authentication.",
      "Choose the schools or districts you wish to apply for based on local status.",
      "Submit the application and attend the written examination.",
      "Participate in the certificate verification process if shortlisted."
    ]
  },
  {
    id: "state-judicial-india",
    previousPapers: "https://www.drishtijudiciary.com/downloads/previous-year-papers?page=1",
    name: "State Judicial Services Exam",
    shortName: "Civil Judge",
    category: "state-india",
    icon: "⚖️",
    badge: "Judiciary",
    badgeColor: "#dc2626",
    difficulty: "High",
    overview: "State Judicial Services Exams are conducted to recruit Civil Judges (Junior Division) and Judicial Magistrates. These officers form the bedrock of the district judiciary across India.",
    conductedBy: "High Courts of respective states or State PSCs",
    officialSite: "https://doj.gov.in/",
    eligibility: {
      age: "21–35 years",
      education: "LL.B (Bachelor of Laws) from a recognised university",
      nationality: "Indian Citizen",
      attempts: "Maximum 3–6 attempts depending on the state",
    },
    vacancies: {
      total: "50–200 per cycle",
      posts: ["Civil Judge (Junior Division)", "Judicial Magistrate First Class"],
    },
    salary: {
      payScale: "National Judicial Pay Commission Scales",
      inHand: "₹77,840 – ₹1,36,520+ per month",
      perks: "Quarters, staff, medical facilities, pension, high legal authority.",
    },
    examPattern: [
      { stage: "Preliminary Exam", mode: "Objective", subjects: "Law, General Awareness, Proficiency in Language", duration: "2 hrs", note: "Qualifying" },
      { stage: "Main Exam", mode: "Descriptive", subjects: "Civil Law, Criminal Law, Local State Laws, Language translation", duration: "3 hrs per paper", note: "Core selection stage" },
      { stage: "Viva-Voce / Interview", mode: "Personal Interview", subjects: "Law Knowledge, Character, Decorum", duration: "20-30 mins", note: "Final assessment" },
    ],
    syllabus: {
      "Civil Law": ["Contract Act", "CPC", "Evidence Act", "TP Act", "Specific Relief Act"],
      "Criminal Law": ["IPC", "CrPC", "Evidence Act"],
      "Local Laws": ["Rent Control Acts, Land Laws, and Revenue Laws of the specific state"],
    },
    importantDates: {
      "Notification": "Varies by state High Court vacancy status",
    },
    tips: [
      "Keep up-to-date with landmark judgments of the Supreme Court and relevant High Courts.",
      "Master the local state laws as they are often the deciding factor in Mains.",
      "Practice legal translation between English and the state's local language.",
      "Attend mock trials or intern with experienced advocates to understand court procedure."
    ],
    booksRecommended: [
      "Mulla on CPC",
      "Ratanlal & Dhirajlal on IPC/CrPC",
      "Bare Acts (most essential)",
      "Universal Guide to Judicial Service Examination"
    ],
    applicationSteps: [
      "Check the recruitment section of the state High Court's website (e.g., Allahabad HC, Delhi HC).",
      "Fill out the application form with LL.B registration details.",
      "Upload certificates of practice (if applicable/required by state).",
      "Submit the application fee and take the preliminary exam.",
      "Successful candidates move to Mains and then Interview."
    ]
  }
];

const CATEGORIES = [
  { id: "all", label: "All Jobs", icon: "🔍" },
  { id: "central", label: "Central Govt", icon: "🏛️" },
  { id: "banking", label: "Banking", icon: "🏦" },
  { id: "railway", label: "Railway", icon: "🚂" },
  { id: "defence", label: "Defence", icon: "⚔️" },
  { id: "state", label: "Telangana Govt", icon: "🇮🇳" },
  { id: "state-india", label: "State Govt (India)", icon: "🗺️" }
];

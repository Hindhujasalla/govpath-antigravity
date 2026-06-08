const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'govtapp',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function initDB() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Connected to MySQL Database.');

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                google_id VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255),
                name VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `;
        await connection.query(createTableQuery);

        // Create mock_tests table
        const createTestsTable = `
            CREATE TABLE IF NOT EXISTS mock_tests (
                id INT AUTO_INCREMENT PRIMARY KEY,
                job_id VARCHAR(50) NOT NULL,
                title VARCHAR(255) NOT NULL,
                duration_minutes INT DEFAULT 30,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await connection.query(createTestsTable);

        // Create questions table
        const createQuestionsTable = `
            CREATE TABLE IF NOT EXISTS questions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                test_id INT NOT NULL,
                question_text TEXT NOT NULL,
                option1 VARCHAR(255) NOT NULL,
                option2 VARCHAR(255) NOT NULL,
                option3 VARCHAR(255) NOT NULL,
                option4 VARCHAR(255) NOT NULL,
                correct_option TINYINT NOT NULL,
                FOREIGN KEY (test_id) REFERENCES mock_tests(id) ON DELETE CASCADE
            );
        `;
        await connection.query(createQuestionsTable);

        // Create test_attempts table
        const createAttemptsTable = `
            CREATE TABLE IF NOT EXISTS test_attempts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                test_id INT NOT NULL,
                score INT NOT NULL,
                answers JSON,
                completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (test_id) REFERENCES mock_tests(id) ON DELETE CASCADE
            );
        `;
        await connection.query(createAttemptsTable);

        console.log('✅ Mock Test tables verified.');
        connection.release();
    } catch (error) {
        console.error('❌ Database Initialization Error:', error);
    }
}

module.exports = { pool, initDB };

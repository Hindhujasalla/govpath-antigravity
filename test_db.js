const { pool } = require('./db');

async function testQuery() {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE google_id = ?', ['test_user_001']);
        console.log('Query Result:', JSON.stringify(rows, null, 2));
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

testQuery();

const { pool, initDB } = require('./db');

async function updateTimer() {
    try {
        await initDB();
        await pool.query('UPDATE mock_tests SET duration_minutes = 10');
        console.log("Successfully updated all mock tests to 10 minutes duration.");
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
updateTimer();

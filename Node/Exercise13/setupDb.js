const db = require('./db');

async function setupDb() {
    try {
        await db.none(`
      CREATE TABLE IF NOT EXISTS planets (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      )
    `);

        await db.none('INSERT INTO planets (name) VALUES ($1), ($2)', ['Earth', 'Mars']);

        console.log('Database setup completed.');
    } catch (error) {
        console.error('Error setting up the database:', error);
    }
}

module.exports = setupDb;

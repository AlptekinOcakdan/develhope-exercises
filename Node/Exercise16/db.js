const pgp = require('pg-promise')();
const connectionString = 'postgres://postgres:postgres@localhost:5432/your-database';
const db = pgp(connectionString);

module.exports = db;

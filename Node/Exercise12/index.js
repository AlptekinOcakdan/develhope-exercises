const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const asyncErrors = require('express-async-errors');
const planetRouter = require('./router');

dotenv.config();

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use('/', planetRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

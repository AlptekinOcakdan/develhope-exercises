const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const asyncErrors = require('express-async-errors');

dotenv.config();

const app = express();

app.use(express.json());

app.use(morgan('dev'));

let planets = [
    {
        id: 1,
        name: 'Earth',
    },
    {
        id: 2,
        name: 'Mars',
    },
];


app.get('/planets', (req, res) => {
    res.json(planets);
});

app.post('/planets', (req, res) => {
    const newPlanet = req.body;
    planets.push(newPlanet);
    res.status(201).json(newPlanet);
});

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

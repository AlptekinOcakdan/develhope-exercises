const express = require('express');
const Joi = require('joi');

const router = express.Router();

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

const planetSchema = Joi.object({
    id: Joi.number().integer().min(1).required(),
    name: Joi.string().min(3).required(),
});

function validatePlanet(req, res, next) {
    const { error } = planetSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}

router.get('/api/planets', (req, res) => {
    res.json(planets);
});

router.get('/api/planets/:id', (req, res) => {
    const planetId = parseInt(req.params.id);
    const planet = planets.find((p) => p.id === planetId);
    if (!planet) {
        return res.status(404).json({ message: 'Planet not found' });
    }
    res.json(planet);
});

router.post('/api/planets', validatePlanet, (req, res) => {
    const newPlanet = req.body;
    planets.push(newPlanet);
    res.status(201).json({ message: 'Planet created successfully' });
});

router.put('/api/planets/:id', validatePlanet, (req, res) => {
    const planetId = parseInt(req.params.id);
    const updatedPlanet = req.body;
    const index = planets.findIndex((p) => p.id === planetId);
    if (index === -1) {
        return res.status(404).json({ message: 'Planet not found' });
    }
    planets[index] = updatedPlanet;
    res.status(200).json({ message: 'Planet updated successfully' });
});

router.delete('/api/planets/:id', (req, res) => {
    const planetId = parseInt(req.params.id);
    const index = planets.findIndex((p) => p.id === planetId);
    if (index === -1) {
        return res.status(404).json({ message: 'Planet not found' });
    }
    planets.splice(index, 1);
    res.status(200).json({ message: 'Planet deleted successfully' });
});

module.exports = router;

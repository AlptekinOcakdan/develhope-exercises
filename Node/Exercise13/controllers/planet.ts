const db = require('../db');

async function getAll(req, res) {
    try {
        const planets = await db.any('SELECT * FROM planets');
        res.json(planets);
    } catch (error) {
        console.error('Error getting planets:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getOneById(req, res) {
    const planetId = parseInt(req.params.id);

    try {
        const planet = await db.one('SELECT * FROM planets WHERE id=$1', planetId);
        res.json(planet);
    } catch (error) {
        console.error('Error getting planet by ID:', error);
        res.status(404).json({ message: 'Planet not found' });
    }
}

async function create(req, res) {
    const planetName = req.body.name;

    try {
        await db.none('INSERT INTO planets (name) VALUES ($1)', planetName);
        res.status(201).json({ message: 'Planet created successfully' });
    } catch (error) {
        console.error('Error creating planet:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function updateById(req, res) {
    const planetId = parseInt(req.params.id);
    const planetName = req.body.name;

    try {
        await db.none('UPDATE planets SET name=$1 WHERE id=$2', [planetName, planetId]);
        res.status(200).json({ message: 'Planet updated successfully' });
    } catch (error) {
        console.error('Error updating planet by ID:', error);
        res.status(404).json({ message: 'Planet not found' });
    }
}

async function deleteById(req, res) {
    const planetId = parseInt(req.params.id);

    try {
        await db.none('DELETE FROM planets WHERE id=$1', planetId);
        res.status(200).json({ message: 'Planet deleted successfully' });
    } catch (error) {
        console.error('Error deleting planet by ID:', error);
        res.status(404).json({ message: 'Planet not found' });
    }
}

module.exports = { getAll, getOneById, create, updateById, deleteById };

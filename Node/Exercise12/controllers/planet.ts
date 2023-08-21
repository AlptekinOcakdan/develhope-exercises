import { Request, Response } from 'express';

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

export const getAll = (req: Request, res: Response) => {
    res.json(planets);
};

export const getOneById = (req: Request, res: Response) => {
    const planetId = parseInt(req.params.id);
    const planet = planets.find((p) => p.id === planetId);
    if (!planet) {
        return res.status(404).json({ message: 'Planet not found' });
    }
    res.json(planet);
};

export const create = (req: Request, res: Response) => {
    const newPlanet = { id: Date.now(), ...req.body };
    planets.push(newPlanet);
    res.status(201).json({ message: 'Planet created successfully' });
};

export const updateById = (req: Request, res: Response) => {
    const planetId = parseInt(req.params.id);
    const updatedPlanetData = req.body;
    const index = planets.findIndex((p) => p.id === planetId);
    if (index === -1) {
        return res.status(404).json({ message: 'Planet not found' });
    }
    planets[index] = { ...planets[index], ...updatedPlanetData };
    res.status(200).json({ message: 'Planet updated successfully' });
};

export const deleteById = (req: Request, res: Response) => {
    const planetId = parseInt(req.params.id);
    const index = planets.findIndex((p) => p.id === planetId);
    if (index === -1) {
        return res.status(404).json({ message: 'Planet not found' });
    }
    planets = planets.filter((p) => p.id !== planetId);
    res.status(200).json({ message: 'Planet deleted successfully' });
};

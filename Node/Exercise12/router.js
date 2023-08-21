import express from 'express';
import * as planetsController from './controllers/planet';

const router = express.Router();

// GET all planets
router.get('/api/planets', planetsController.getAll);

// GET a planet by ID
router.get('/api/planets/:id', planetsController.getOneById);

// POST a new planet
router.post('/api/planets', planetsController.create);

// PUT (update) a planet by ID
router.put('/api/planets/:id', planetsController.updateById);

// DELETE a planet by ID
router.delete('/api/planets/:id', planetsController.deleteById);

export default router;

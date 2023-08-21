const express = require('express');
const upload = require('./fileUpload');
const planetsController = require('./controllers/planet');
const { passport, generateToken } = require('./auth');
const db = require('./db');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/api/planets', passport.authenticate('jwt', { session: false }), planetsController.getAll);
router.get('/api/planets/:id', passport.authenticate('jwt', { session: false }), planetsController.getOneById);
router.post('/api/planets', passport.authenticate('jwt', { session: false }), planetsController.create);
router.put('/api/planets/:id', passport.authenticate('jwt', { session: false }), planetsController.updateById);
router.delete('/api/planets/:id', passport.authenticate('jwt', { session: false }), planetsController.deleteById);

router.post('/api/planets/:id/image', passport.authenticate('jwt', { session: false }), upload.single('image'), planetsController.uploadImage);

module.exports = router;

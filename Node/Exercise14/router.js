const express = require('express');
const upload = require('./fileUpload');
const planetsController = require('./controllers/planet');

const router = express.Router();

router.get('/api/planets', planetsController.getAll);

router.get('/api/planets/:id', planetsController.getOneById);

router.post('/api/planets', planetsController.create);

router.put('/api/planets/:id', planetsController.updateById);

router.delete('/api/planets/:id', planetsController.deleteById);

router.post('/api/planets/:id/image', upload.single('image'), planetsController.uploadImage);

module.exports = router;

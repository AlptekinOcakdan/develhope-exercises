const express = require('express');
const upload = require('./fileUpload');
const planetsController = require('./controllers/planet');
const { passport, generateToken } = require('./auth');

const router = express.Router();
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await db.oneOrNone('SELECT * FROM users WHERE username=$1', username);

        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newUser = await db.one('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);

        const token = generateToken(newUser);

        res.json({ token, user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const authenticatedUser = await authenticateUser(username, password);

        if (!authenticatedUser) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const token = generateToken(authenticatedUser);

        res.json({ token, user: authenticatedUser });
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/api/planets', passport.authenticate('jwt', { session: false }), planetsController.getAll);
router.get('/api/planets/:id', passport.authenticate('jwt', { session: false }), planetsController.getOneById);
router.post('/api/planets', passport.authenticate('jwt', { session: false }), planetsController.create);
router.put('/api/planets/:id', passport.authenticate('jwt', { session: false }), planetsController.updateById);
router.delete('/api/planets/:id', passport.authenticate('jwt', { session: false }), planetsController.deleteById);

router.post('/api/planets/:id/image', passport.authenticate('jwt', { session: false }), upload.single('image'), planetsController.uploadImage);

module.exports = router;

const db = require("./db");
const bcrypt = require("bcrypt");
const {generateToken, passport} = require("./auth");
const express = require("express");

const router = express.Router();
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await db.oneOrNone('SELECT * FROM users WHERE username=$1', username);

        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await db.one('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, hashedPassword]);

        res.json({ message: 'Signup successful. Now you can log in.' });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await db.oneOrNone('SELECT * FROM users WHERE username=$1', username);

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const token = generateToken(user);

        res.json({ token, id: user.id, username: user.username });
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/logout', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        // Update the user's token to null, effectively logging them out
        await db.none('UPDATE users SET token=NULL WHERE id=$1', req.user.id);

        // Respond with a success message
        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
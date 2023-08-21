const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const secretKey = process.env.SECRET;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey,
};

passport.use(
    new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
        try {
            const user = await db.oneOrNone('SELECT * FROM users WHERE id=$1', jwtPayload.id);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }
    })
);

function generateToken(user) {
    const payload = {
        id: user.id,
    };
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

const authorize = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Populate req.user with the authenticated user's information
        req.user = user;
        next();
    })(req, res, next);
};


module.exports = {
    passport,
    generateToken,
    authorize,
};

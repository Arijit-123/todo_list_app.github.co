const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).send(err);
        User.createUser(username, email, hash, (error, result) => {
            if (error) return res.status(400).send(error);
            res.status(201).send('User created!');
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findUserByEmail(email, (error, users) => {
        if (error || users.length === 0) return res.status(404).send('User not found');
        const user = users[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (!isMatch) return res.status(400).send('Invalid password');
            const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.json({ token });
        });
    });
};

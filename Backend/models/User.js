const connection = require('../config');

class User {
    static createUser(username, email, passwordHash, callback) {
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        connection.query(query, [username, email, passwordHash], callback);
    }

    static findUserByEmail(email, callback) {
        const query = 'SELECT * FROM users WHERE email = ?';
        connection.query(query, [email], callback);
    }
}

module.exports = User;

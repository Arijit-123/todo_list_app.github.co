const mongoose = require('mongoose');
const mysql = require('mysql2');

// MongoDB Configuration
mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// MySQL Configuration
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'users_db',
});

mysqlConnection.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected!');
});

// Export both connections for use in other parts of the app
module.exports = {
    mongooseConnection: mongoose.connection,
    mysqlConnection,
};

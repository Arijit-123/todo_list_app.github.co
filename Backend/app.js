const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON bodies

// Route handlers
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: String,
    title: String,
    description: String,
    status: { type: String, default: 'pending' },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

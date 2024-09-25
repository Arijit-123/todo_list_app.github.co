const Task = require('../models/Task');

exports.createTask = (req, res) => {
    const newTask = new Task(req.body);
    newTask.save((err, task) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(task);
    });
};

exports.getTasks = (req, res) => {
    Task.find({ userId: req.user.id }, (err, tasks) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(tasks);
    });
};

exports.updateTask = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, task) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(task);
    });
};

exports.deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send('Task deleted');
    });
};

import React, { useState, useEffect } from 'react';
import { getTasks, createTask } from '../utils/api';
import TaskList from '../components/Tasklist';

const TaskDashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            const taskData = await getTasks();
            setTasks(taskData);
        };
        fetchTasks();
    }, []);

    const handleAddTask = async () => {
        if (newTask) {
            const task = await createTask({ title: newTask });
            setTasks([...tasks, task]);
            setNewTask('');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Your Tasks</h1>
            <input
                type="text"
                placeholder="Add new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="border p-2 mr-2"
            />
            <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Task
            </button>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default TaskDashboard;

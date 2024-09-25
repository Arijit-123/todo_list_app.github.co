import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <ul className="list-disc ml-5 mt-4">
            {tasks.map((task) => (
                <li key={task._id} className="mb-2">
                    {task.title}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;

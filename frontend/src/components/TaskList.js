import React from 'react';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <select
                        value={task.status}
                        onChange={(e) => onUpdate(task._id, { status: e.target.value })}
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                    <button onClick={() => onDelete(task._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;

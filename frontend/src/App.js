import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('/api/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const res = await axios.post('/api/tasks', task);
    setTasks([...tasks, res.data]);
  };

  const updateTask = async (id, updates) => {
    const res = await axios.put(`/api/tasks/${id}`, updates);
    setTasks(tasks.map(task => (task._id === id ? res.data : task)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;

import { useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import { v4 as uuidv4 } from 'uuid';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      taskBody: 'Feed dogs',
    },
    {
      id: uuidv4(),
      taskBody: 'Go for a walk',
    },
    {
      id: uuidv4(),
      taskBody: 'Clean car',
    },
  ]);

  const Tasks = tasks.map((task) => {
    return <Task key={task.id} id={task.id} text={task.taskBody}/>;
  });
  return (
    <>
      <AddTaskForm />
      {Tasks}
    </>
  );
}

export default App;

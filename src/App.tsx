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
  const [currentTask, setCurrentTask] = useState('');

  const tasksList = tasks.map((task) => {
    return <Task key={task.id} id={task.id} text={task.taskBody} />;
  });

  const handleCurrentTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const addTask = () => {
    if (currentTask !== '') {
      const tasksCopy = [...tasks];
      tasksCopy.push({
        id: uuidv4(),
        taskBody: currentTask,
      });
      setTasks(tasksCopy);
      setCurrentTask('');
    }
  };

  return (
    <>
      <AddTaskForm
        value={currentTask}
        handleChange={handleCurrentTask}
        handleClick={addTask}
      />
      {tasksList}
    </>
  );
}

export default App;

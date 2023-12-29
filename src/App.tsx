import { useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import { v4 as uuidv4 } from 'uuid';
import Task from './components/Task';

interface TaskType {
  id: string;
  taskBody: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
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

  const removeTask = (taskID: string) => {
    const index = tasks.findIndex((task) => task.id === taskID);
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };

  const tasksList = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        text={task.taskBody}
        handleRemoveClick={() => removeTask(task.id)}
      />
    );
  });

  return (
    <div className='app'>
      <AddTaskForm
        value={currentTask}
        handleChange={handleCurrentTask}
        handleAddClick={addTask}
      />
      {tasks ? tasksList : null}
    </div>
  );
}

export default App;

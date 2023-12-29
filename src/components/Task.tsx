import React from 'react';

interface TaskProps {
  id: string;
  text: string;
}

const Task: React.FC<TaskProps> = ({ id, text }) => {
  return <div>{text}</div>;
};

export default Task;

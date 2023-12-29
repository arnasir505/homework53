import React from 'react';

interface TaskProps {
  text: string;
  handleRemoveClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Task: React.FC<TaskProps> = ({ text, handleRemoveClick }) => {
  return (
    <div className='task'>
      {text}
      <button type='button' className='removeBtn' onClick={handleRemoveClick}>
        <img src='src\assets\trash3.svg' alt='ic-trash' />
      </button>
    </div>
  );
};

export default Task;

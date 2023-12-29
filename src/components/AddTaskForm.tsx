interface FormProps {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const AddTaskForm: React.FC<FormProps> = ({ value, handleChange, handleClick }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type='text' value={value} onChange={e => handleChange(e)}/>
      <button type='submit' onClick={handleClick}>Add</button>
    </form>
  );
};

export default AddTaskForm;

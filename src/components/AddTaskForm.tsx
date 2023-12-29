interface FormProps {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleAddClick: React.MouseEventHandler<HTMLButtonElement>;
}

const AddTaskForm: React.FC<FormProps> = ({
  value,
  handleChange,
  handleAddClick,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='form'>
      <input
        type='text'
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder='Add new task'
      />
      <button type='submit' onClick={handleAddClick}>
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;

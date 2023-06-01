import "./Todo.css"

const Todo = ({ title, onTodoDelete }) => {
  const deleteTodo = (id) => {
    console.log('deleteTodo()', title)
  }
  return (
    <div className="todo">
      <p>{title}</p>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
};

export default Todo;

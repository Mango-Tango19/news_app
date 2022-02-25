import { useState } from "react";
import { todoItem } from "../../model";
import "./singleItem.css";

type Props = {
  todo: todoItem;
  todos: todoItem[];
  setTodos: React.Dispatch<React.SetStateAction<todoItem[]>>;
};

const SingleItem = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEdit = (id: number) => {
    //setEdit(todos.filter((todo) => todo.id === id))
  };

  const handleIsDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleIsDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className='todos__single'>
      {todo.isDone ? (
        <s className='todos__single-text'> {todo.todo}</s>
      ) : (
        <span className='todos__single-text'> {todo.todo}</span>
      )}
      <div className='todos__single-icons'>
        <i
          className='fa-solid fa-trash-can'
          onClick={() => handleIsDelete(todo.id)}
        ></i>
        <i
          className='fa-solid fa-circle-check'
          onClick={() => handleIsDone(todo.id)}
        ></i>
        <i className='fa-solid fa-pen' onClick={() => handleEdit(todo.id)}></i>
      </div>
    </form>
  );
};

export default SingleItem;

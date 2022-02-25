import { useEffect, useRef, useState } from "react";
import { todoItem } from "../../model";
import "./singleItem.css";

type Props = {
  todo: todoItem;
  todos: todoItem[];
  setTodos: React.Dispatch<React.SetStateAction<todoItem[]>>;
};

const SingleItem = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  // const handleEdit = (id: number) => {
  //   setEdit(true)
  // };

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

  const handleEditInput = (val: string) => {
    setEditTodo(val);
  };

  const handleEditItem = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className='todos__single'
      onSubmit={(e) => handleEditItem(e, todo.id)}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => handleEditInput(e.target.value)}
          className='todos__single--text form-control'
          ref={editInputRef}
        />
      ) : todo.isDone ? (
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
        <i
          className='fa-solid fa-pen'
          onClick={() => {
            if (!todo.isDone && !edit) {
              setEdit(!edit);
            }
          }}
        ></i>
      </div>
    </form>
  );
};

export default SingleItem;

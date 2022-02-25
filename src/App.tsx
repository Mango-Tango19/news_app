import React, { useState } from "react";
import "./App.css";

import InputField from "./components/inputfield/inputfield";
import { todoItem } from "./model";
import TodoList from "./components/todoList/todoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todoItem[]>([]);
  const [emptyInput, setEmptyInput] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    setEmptyInput(false);
    e.preventDefault();
    if (!todo) {
      setEmptyInput(true);
      return;
    }
    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  };

  const errorInputElement = (
    <div className='alert alert-primary mt-4' role='alert'>
      Please, type smth
    </div>
  );

  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col col-lg-2'>Tasks</div>
        <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        {emptyInput ? errorInputElement : null}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;

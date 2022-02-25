import React, { useState } from "react";
import "./App.css";

import InputField from "./components/inputfield/inputfield";
import { todoItem } from "./model";
import TodoList from "./components/todoList/todoList";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<todoItem[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos([...todos, {id: Date.now(), todo, isDone: false}])
    setTodo('')
  }




  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col col-lg-2'>Tasks</div>
        <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
};

export default App;

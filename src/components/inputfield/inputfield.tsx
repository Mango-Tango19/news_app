import React, { useRef } from "react";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent)=> void,
}

const InputField : React.FC <Props> = ({ todo, setTodo, handleSubmit }) => {

    const inputEl = useRef<HTMLInputElement>(null)
    
  return (
    <form onSubmit={ (e) => {handleSubmit(e)
    inputEl.current?.blur()  }}>
      <div className='mb-3'>
        <input className='form-control' value={todo} onChange={(e) => setTodo(e.target.value)} ref={inputEl} placeholder="type smth"/>
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default InputField;

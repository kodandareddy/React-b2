import "./index.css";

import {useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import Todos from "./components/Todos";
const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('mytodos')) || []);
  const [data,setData]=useState(true)
  const handleDelete=(id)=>{
    setTodos([...todos].filter((todo)=>todo.id !=id)) 
  }

  useEffect(()=>{
    localStorage.setItem('mytodos',JSON.stringify(todos))
    return () => {
      localStorage.clear();
    }
    
  },[todos])

const handleClick=()=>{
  setData(!data)
}
  return (
    <>
    <button onClick={handleClick}>Click</button>
      <h1>Todo App </h1>
      <Input setTodos={setTodos} todos={todos} />
{    data&&   <Todos todos={todos}  handleDelete={handleDelete}/>
}    </>
  );
};

export default App;

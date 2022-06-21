import "./index.css";

import {useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import Todos from "./components/Todos";
const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('mytodos')) || []);
  console.log(JSON.parse(localStorage.getItem('mytodos')),"---" )
  const handleDelete=(id)=>{
    setTodos([...todos].filter((todo)=>todo.id !=id)) 
  }

  useEffect(()=>{
    localStorage.setItem('mytodos',JSON.stringify(todos))
    return () => {
      localStorage.clear();
    }
  },[todos])


  return (
    <>
      <h1>Todo App </h1>
      <Input setTodos={setTodos} todos={todos} />
      <Todos todos={todos}  handleDelete={handleDelete}/>
    </>
  );
};

export default App;

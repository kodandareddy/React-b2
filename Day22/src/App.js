import "./index.css";

import { useReducer, useState } from "react";

import { TodoContext } from "./context/todocontext";
import todoReducer from './context/reducer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "./components/Input";
import Todos from "./components/Todos";
const App = () => {
   const[todos,dispatch]=useReducer(todoReducer,[])
  return (
        <TodoContext.Provider value={{todos,dispatch}}>
          <h1>Todo App </h1>
          <Input/>
          <Todos/>
        </TodoContext.Provider>
    );
};

export default App;

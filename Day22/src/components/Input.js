import React from "react";
import { useContext } from "react";
import { useState } from "react";
import {InputGroup,Button,Input} from 'reactstrap'
import { TodoContext } from "../context/todocontext";
import { v4 } from "uuid";

const InputData = () => {
    const [userDate,setUserData]=useState('')
    const {dispatch}=useContext(TodoContext)


    const handleSubmit=()=>{
        if(!userDate){
           alert('Please enter some Data')
           return
        }
       let payload={
            userDate,
            id:v4(),
       }

        dispatch({
            payload,
            type:'ADD_TODO'

        })
        setUserData('')
    }
  return (
    <div>
     
      <InputGroup>
        <Input  value={userDate} onChange={(e)=>setUserData(e.target.value)}/>
        <Button onClick={handleSubmit}>Add</Button>
      </InputGroup>
      
    </div>
  );
};

export default InputData;

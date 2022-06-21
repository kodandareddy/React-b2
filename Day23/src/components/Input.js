import React from "react";
import { useContext } from "react";
import { useState } from "react";
import {InputGroup,Button,Input} from 'reactstrap'
import { v4 } from "uuid";

const InputData = ({setTodos,todos}) => {
    const [userDate,setUserData]=useState('')
    


    const handleSubmit=()=>{
        if(!userDate){
           alert('Please enter some Data')
           return
        }
       let payload={
            userDate,
            id:v4(),
       }
       setTodos([...todos,payload])
       
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

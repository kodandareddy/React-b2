import React, { useState } from "react";

import {
  Container,
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";

//redux
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../action/todo";

const TodoForm = () => {
  const [title, setTitle] = useState("");
   const dispatch=useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo");
    }

    const todo = {
      title,
      id: v4(),
    };
    dispatch(addTodo(todo)) 

    setTitle("");
  };

  return (
    <Form >
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="primary" onClick={handleSubmit} >
              ADD
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};


export default TodoForm;

import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

//redux
import { connect, useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../action/todo";

const Todo = () => {

const todos=useSelector(state=>state.todos)

  const dispatch=useDispatch()
  return (
    <ListGroup className="mt-5 mb-2">
      {todos?.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          <span className="float-right">
            <FaCheckDouble  onClick={()=>dispatch(removeTodo(todo.id)) 
            }/>
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

// https://codesandbox.io/s/todo-redux-53j0w?from-embed
export default Todo;

// https://labs.tadigital.com/index.php/2020/04/20/getting-started-with-redux/
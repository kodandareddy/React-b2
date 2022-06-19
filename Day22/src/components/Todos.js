import React from "react";
import { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { TodoContext } from "../context/todocontext";

const Todos = () => {
  const { todos ,dispatch} = useContext(TodoContext);
 console.log(todos)
  return (
    <div>
      <ListGroup>
        {todos.map((todo,index) => {
          return (
            <div key={todo.id}>
              <ListGroupItem >{index+1} .{todo.userDate}</ListGroupItem>
              <button onClick={()=>dispatch({id:todo.id,type:"Del_TODO"})}>Delete</button>
            </div>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Todos;

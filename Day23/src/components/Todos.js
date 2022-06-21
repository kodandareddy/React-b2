import React from "react";
import { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Todos = ({todos,handleDelete}) => {
  console.log(handleDelete,"++++")
  return (
    <div>
      <ListGroup>
        {todos.map((todo,index) => {
          return (
            <div key={todo.id}>
              <ListGroupItem >{index+1} .{todo.userDate}</ListGroupItem>
              <button onClick={()=>handleDelete(todo.id)}>Delete</button>
            </div>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Todos;

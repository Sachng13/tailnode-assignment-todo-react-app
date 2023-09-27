import TodoItem from "./TodoItem";
import React from "react";
function Todos(props) {


  // todos container............
  return (

    <div className="todos-container">
      {props.todos.map((item) => {
        return <TodoItem item={item}
          key={item.id}
          deleteTaskhandler={props.deleteTaskhandler}
          handlingToggleTask={props.handlingToggleTask}
        //   handleEditTask={props.handleEditTask}
        />
      })}


    </div>

  );
}

export default Todos;
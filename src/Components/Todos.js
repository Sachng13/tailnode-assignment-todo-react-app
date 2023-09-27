import TodoItem from "./TodoItem";
import React from "react";
function Todos(props) {


  // todos container............
  return (

    <div className="todos-container">
       <h2>Active Todos</h2>
      {props.todos.filter((item)=>!item.completed).map((item) => {
        return <TodoItem item={item}
          key={item.id}
          deleteTaskhandler={props.deleteTaskhandler}
          handlingToggleTask={props.handlingToggleTask}
        //   handleEditTask={props.handleEditTask}
        />
      })}
      <h2>Completed Todos</h2>
      {props.todos.filter((item)=>item.completed).map((item) => {
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
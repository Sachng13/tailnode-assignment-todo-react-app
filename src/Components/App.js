
import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Load todos from Local Storage on initial render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos to Local Storage whenever todos state changes
  useEffect(() => {
    if (todos.length > 0){
      localStorage.setItem('todos', JSON.stringify(todos));
    }}, [todos]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newTodo.trim() !== '') {
      const updatedTodos = [{ id: Date.now(), title: newTodo, completed: false },...todos];
      setTodos(updatedTodos);
      setNewTodo('');
    }
  };

  const deleteTaskhandler = (e) =>{
   const AfterDeletionTodos = todos.filter((item)=>{
      return item.id != e.target.id;
    }); 
    setTodos(AfterDeletionTodos);
    localStorage.setItem('todos', JSON.stringify(AfterDeletionTodos));
  }
  const handlingToggleTask = (e) =>{
    const toggledTodos = todos.map((todo)=>{
      if (todo.id == e.target.id){
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    })
    setTodos(toggledTodos)
    localStorage.setItem('todos', JSON.stringify(toggledTodos));
  }

  return (
    <div className="container">
    {/* <ToastContainer /> */}
    <div className="heading"><h1>Todo List App</h1></div>
    <AddTodo setNewTodo={setNewTodo}
             newTodo = {newTodo}
             handleKeyPress={handleKeyPress}
    ></AddTodo>
    <Todos todos={todos}
      // editTaskId={editTaskId}
      deleteTaskhandler={deleteTaskhandler}
      handlingToggleTask={handlingToggleTask}
      // handleEditTask={handleEditTask}
    ></Todos>
  </div>
  );
}


export default App;

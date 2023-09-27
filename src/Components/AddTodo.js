import React from 'react'

function AddTodo(props) {
    function handleInputchange(e) {
        props.setNewTodo(e.target.value);
    }

    return (
        <div className="Add-todo-form">
            <input type="text" className="Add-todo-input-box"
                value={props.newTodo} onChange={handleInputchange} placeholder="Write todo and press Enter to add" onKeyDown={props.handleKeyPress}></input>
        </div>

    );
}

export default AddTodo

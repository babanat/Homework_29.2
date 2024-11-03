import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store';
import '../todoList/TodoList.css';

function TodoList() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim().length > 0) {
            dispatch(addTodo(task));
            setTask('');
        }
    };

    return (
        <div className="todo-container">
            <h2 className="title">Todo List</h2>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="input"
                    placeholder="Enter a task..."
                />
                <button type="submit" className="add-button">Add Task</button>
            </form>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.text}
                    </li>
                ))}
            </ul>
            <footer className="footer">
                <p>Total: {todos.length}</p>
            </footer>
        </div>
    );
}

export default TodoList;

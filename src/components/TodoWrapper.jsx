import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

export default function ToDoWrapper() {
    const [todos, setTodos] = useState([]);

    function addToDo(todo) {
        setTodos([...todos, {
            id: uuidv4(), task: todo,
            completed: false, isEditing: false
        }]);
    };

    function toggleComplete(id) {
        setTodos(todos.map(todo => todo.id === id ?
            { ...todo, completed: !todo.completed } : todo
        ))
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function editTodo(id) {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, isEditing: !todo.isEditing }
                : todo
        ));
    }

    function editTask(task, id) {
        setTodos(todos.map(todo =>
            todo.id === id ?
                { ...todo, task, isEditing: !todo.isEditing }
                : todo))
    }

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addToDo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm
                        key={todo.id}
                        editTodo={editTask}
                        task={todo}
                    />
                ) : (
                    <Todo
                        key={index}
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            ))}
        </div>
    );
}

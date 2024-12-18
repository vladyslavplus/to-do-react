import React, { useState } from "react";
import styles from "./TodoForm.module.css";

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (value.trim() === '') {
            return; 
        }

        addTodo(value)
        setValue('')
    }

    return (
        <form className={styles.TodoForm} onSubmit={handleSubmit}>
            <input
                type="text"
                className={styles["todo-input"]}
                value={value}
                placeholder="What is the task today?"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className={styles["todo-btn"]}>
                Add Task
            </button>
            
        </form>
    );
}

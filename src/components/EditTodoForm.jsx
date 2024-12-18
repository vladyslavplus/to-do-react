import React, { useState } from "react";
import styles from "./TodoForm.module.css";

export default function EditTodoForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task)

    function handleSubmit(e) {
        e.preventDefault()

        if (value.trim() === '') {
            return; 
        }

        editTodo(value, task.id)
        setValue('')
    }

    return (
        <form className={styles.TodoForm} onSubmit={handleSubmit}>
            <input
                type="text"
                className={styles["todo-input"]}
                value={value}
                placeholder="Update Task"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className={styles["todo-btn"]}>
                Edit Task
            </button>
            
        </form>
    );
}

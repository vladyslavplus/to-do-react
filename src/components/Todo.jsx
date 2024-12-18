import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Todo.module.css";

export default function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
    return (
        <div className={styles.Todo}>
            <p
                onClick={() => toggleComplete(task.id)}
                className={task.completed ? styles.completed : ""}
            >
                {task.task}
            </p>
            <div className={styles.TodoIcons}>
                <FontAwesomeIcon icon={faPenToSquare}
                    onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash}
                    onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
}

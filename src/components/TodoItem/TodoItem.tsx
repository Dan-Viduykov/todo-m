import { FC } from "react";
import TodoStore, { ITodo } from "@/store/todoStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
    className?: string;
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ className, todo: todoItem }) => {
    const { id, title, description, completed } = todoItem;

    const checkboxHandler = () => {
        TodoStore.completeTodo(id)
    }
    const handleDelete = () => {
        TodoStore.removeTodo(id)
    }

    return (
        <div className={`${styles.todo}`}>
            <input
                checked={completed}
                onChange={checkboxHandler}
                className={styles.checkboxInput}
                type={'checkbox'}
                id={id}
            />
            <label className={styles.checkboxLabel} htmlFor={id} />
            <h3
                className={`
                    ${styles.title}
                    ${completed ? styles.title_done : null}
                `}
            >
                {title}
            </h3>
            <button className={styles.buttonDel} onClick={handleDelete}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className={styles.subInfo}>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default TodoItem
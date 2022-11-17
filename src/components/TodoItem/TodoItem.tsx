import { FC } from "react";
import { ITodo } from "@/components/TodoList/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
    className?: string;
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ className, todo }) => {
    const { id, title, description, done } = todo;

    const checkboxHandler = () => {
    }

    return (
        <div className={`${styles.todo}`}>
            <input
                checked={done}
                onChange={checkboxHandler}
                className={styles.checkboxInput}
                type={'checkbox'}
                id={id}
            />
            <label className={styles.checkboxLabel} htmlFor={id} />
            <h3
                className={`
                    ${styles.title}
                    ${done ? styles.title_done : null}
                `}
            >
                {title}
            </h3>
            <button className={styles.buttonDel}><FontAwesomeIcon icon={faXmark} /></button>
            <div className={styles.subInfo}>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default TodoItem
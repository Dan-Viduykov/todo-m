import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./TodoItem.module.scss";
import todo ,{ ITodo } from "@/store/todo";
import { observer } from "mobx-react";

interface TodoItemProps {
    className?: string;
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = observer(({ className, todo: todoItem }) => {
    const { id, title, description, completed } = todoItem;

    const checkboxHandler = () => {
        todo.completeTodo(id)
    }
    const handleDelete = () => {
        todo.removeTodo(id)
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
})

export default TodoItem
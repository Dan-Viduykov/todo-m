import { FC } from "react";
import styles from "./TodoList.module.scss";

interface TodoListProps {
    className?: string;
}

const TodoList: FC<TodoListProps> = ({ className }) => {
    return (
        <ul className={`${styles.list} ${className}`}>
            <li className={styles.item}>drink coffe1</li>
            <li className={styles.item}>drink coffe2</li>
            <li className={styles.item}>drink coffe3</li>
        </ul>
    )
}

export default TodoList
import { FC } from "react";
import styles from "./AddTodoButton.module.scss";

interface AddTodoButtonProps {
    className?: string;
}

const AddTodoButton: FC<AddTodoButtonProps> = ({ className }) => {
    return (
        <button className={`${styles.button} ${className}`}>
            +
        </button>
    )
}

export default AddTodoButton
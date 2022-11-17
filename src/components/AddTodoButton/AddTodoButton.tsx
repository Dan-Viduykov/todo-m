import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddTodoButton.module.scss";

interface AddTodoButtonProps {
    className?: string;
}

const AddTodoButton: FC<AddTodoButtonProps> = ({ className }) => {
    return (
        <button className={`${styles.button} ${className}`}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}

export default AddTodoButton
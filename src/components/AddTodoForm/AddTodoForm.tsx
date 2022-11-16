import { FC } from "react";
import styles from "./AddTodoForm.module.scss";

interface AddTodoFormProps {
    className?: string;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ className }) => {
    return (
        <form className={`${styles.form} ${className}`}>
            AddTodoForm
        </form>
    )
}

export default AddTodoForm
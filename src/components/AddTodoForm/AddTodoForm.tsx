import { FC, FormEvent } from "react";
import styles from "./AddTodoForm.module.scss";

interface AddTodoFormProps {
    className?: string;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ className }) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Создание новой задачи</h2>
            <label className={styles.label}>
                <span className={styles.text}>Заголовок задачи:</span> 
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Title"    
                />
            </label>
            <label className={styles.label}>
                <span className={styles.text}>Описание задачи:</span> 
                <textarea
                    className={`${styles.input} ${styles.textarea}`} 
                    placeholder="description your task"
                />
            </label>
            <button type="submit" className={styles.button}>Add</button>
        </form>
    )
}

export default AddTodoForm
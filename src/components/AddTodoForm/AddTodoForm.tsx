import { ChangeEvent, FC, FormEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import styles from "./AddTodoForm.module.scss";
import todoStore from "@/store/todoStore";
import { createTodo } from "@/utils/createTodo";
import modalStore from "@/store/modalStore";

interface AddTodoFormProps {
    className?: string;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ className }) => {
    const [ valueTitle, setValueTitle ] = useState('');
    const [ valueDescription, setValueDescription ] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        todoStore.addTodo(createTodo(valueTitle, valueDescription))
        modalStore.changeState()
    }

    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setValueTitle(event.target.value)
    }

    const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValueDescription(event.target.value)
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
                    value={valueTitle}
                    onChange={handleChangeTitle}  
                />
            </label>
            <label className={styles.label}>
                <span className={styles.text}>Описание задачи:</span> 
                <textarea
                    className={`${styles.input} ${styles.textarea}`} 
                    placeholder="description your task"
                    onChange={handleChangeDescription}
                />
            </label>
            <button type="submit" className={styles.button}>Add</button>
        </form>
    )
}

export default observer(AddTodoForm)
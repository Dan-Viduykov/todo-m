import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import modalStore from "@/store/modalStore";
import userStore, { IUser } from "@/store/userStore";
import todoStore from "@/store/todoStore";

import Filter from "@/components/Filter";
import TodoList from "@/components/TodoList";
import AddTodoButton from "@/components/AddTodoButton";
import Modal from "@/components/Modal";
import AddTodoForm from "@/components/AddTodoForm";
import ExitButton from "@/components/ExitButton";

import styles from "./Home.module.scss";

const Home: FC = () => {

    useEffect(() => {
        const user: IUser = JSON.parse(localStorage.getItem('user') || '{}')

        if (user) {
            userStore.setUser(user);
            todoStore.todos = user.todos;
        }
    }, [])

    return (
        <div className={styles.wrap}>
            <ExitButton />
            <div className={styles.head}>
                <h1 className={styles.title}>Todo list</h1>
                <Filter className={styles.filter} />
            </div>
            <TodoList className={styles.todoList} />
            <AddTodoButton className={styles.buttonAddTodo} />
            <Modal active={modalStore.active}>
                <AddTodoForm />
            </Modal>
        </div>
    )
}

export default observer(Home)
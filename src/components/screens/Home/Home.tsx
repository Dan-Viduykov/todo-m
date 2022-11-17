import { FC } from "react";

import Filter from "@/components/Filter";
import TodoList from "@/components/TodoList";
import AddTodoButton from "@/components/AddTodoButton";
import Modal from "@/components/Modal";

import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.head}>
                <h1 className={styles.title}>Todo list</h1>
                <Filter className={styles.filter} />
            </div>
            <TodoList className={styles.todoList} />
            <AddTodoButton className={styles.buttonAddTodo} />
            <Modal>Hello</Modal>
        </div>
    )
}

export default Home
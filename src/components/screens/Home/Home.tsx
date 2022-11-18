import { FC } from "react";
import { observer } from "mobx-react-lite";

import Filter from "@/components/Filter";
import TodoList from "@/components/TodoList";
import AddTodoButton from "@/components/AddTodoButton";
import Modal from "@/components/Modal";
import AddTodoForm from "@/components/AddTodoForm";

import styles from "./Home.module.scss";
import modalStore from "@/store/modalStore";

const Home: FC = () => {
    return (
        <div className={styles.wrap}>
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
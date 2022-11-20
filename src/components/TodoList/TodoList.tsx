import { FC, useEffect } from "react";
import { observer } from "mobx-react";
import TodoStore from "@/store/todoStore";
import filterStore from "@/store/filterStore";
import TodoItem from "@/components/TodoItem";
import TodoListEmpty from "@/components/TodoListEmpty";
import styles from "./TodoList.module.scss";

interface TodoListProps {
    className?: string;
}

const TodoList: FC<TodoListProps> = ({ className }) => {
    useEffect(() => {
        TodoStore.fetchTodos(filterStore.filterType);
    }, [filterStore.filterType])

    const elements = TodoStore.todos.map(todo => (
        <li className={styles.item} key={todo.id}> 
            <TodoItem className={styles.todoContent} todo={todo}/>    
        </li>
    ))

    if (TodoStore.isLoading) return <>Loading ...</>

    return (
        <ul className={`${styles.list} ${className}`}>
            {elements.length ? elements : <TodoListEmpty />}
        </ul>
    )
}

export default observer(TodoList)
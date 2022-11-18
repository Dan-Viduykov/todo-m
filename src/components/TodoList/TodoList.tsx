import { FC } from "react";
import { observer } from "mobx-react";
import todo from "@/store/todo";
import TodoItem from "@/components/TodoItem";
import styles from "./TodoList.module.scss";

interface TodoListProps {
    className?: string;
}

const TodoList: FC<TodoListProps> = observer(({ className }) => {
    const elements = todo.todos.map(todo => {
        return (
            <li className={styles.item} key={todo.id}> 
                <TodoItem className={styles.todoContent} todo={todo}/>    
            </li>
        )
    })

    return (
        <ul className={`${styles.list} ${className}`}>
            {elements}
        </ul>
    )
})

export default TodoList
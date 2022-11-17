import { FC } from "react";
import TodoItem from "@/components/TodoItem";
import styles from "./TodoList.module.scss";

interface TodoListProps {
    className?: string;
}

export interface ITodo {
    id: string;
    title: string;
    description: string;
    done: boolean;
}

const todos: ITodo[] = [
    {
        id: 'dc',
        title: 'drinc coffe',
        description: 'wake up, get up, and brew a cup of coffee',
        done: false
    },
    {
        id: 'dc2',
        title: 'drinc coffe 2',
        description: 'wake up, get up, and brew a cup of coffee',
        done: false
    },
    {
        id: 'dc3',
        title: 'drinc coffe 3',
        description: 'wake up, get up, and brew a cup of coffee',
        done: true
    }
]

const TodoList: FC<TodoListProps> = ({ className }) => {
    const elements = todos.map(todo => {
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
}

export default TodoList
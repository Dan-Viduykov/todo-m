import { makeAutoObservable } from 'mobx'

export interface ITodo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createAt: Date;
}

const uniqid = require('uniqid');

class Todo {

    todos: ITodo[] = [
        { id: '1', title: 'drinc coffe', description: 'wake up, get up, and brew a cup of coffee', completed: false, createAt: new Date() },
        { id: '2', title: 'drinc coffe 2', description: 'wake up, get up, and brew a cup of coffee', completed: false, createAt: new Date() },
        { id: '3', title: 'drinc coffe 3', description: 'wake up, get up, and brew a cup of coffee', completed: true, createAt: new Date() }
    ]
    
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(newTodo: ITodo): void {
        this.todos.push(newTodo);
    }
    removeTodo(id: string): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
    completeTodo(id: string): void {
        this.todos = this.todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} : todo
        });
    }
}

export default new Todo()
import { action, makeAutoObservable, observable } from 'mobx'
import { TFilters } from './filterStore';

export interface ITodo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createAt: string;
}

class TodoStore {
    @observable isLoading = false;
    @observable todos: ITodo[] = [];
    
    constructor() { 
        makeAutoObservable(this)
    };

    @action async addTodo(newTodo: ITodo) {
        await fetch('http://localhost:4000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newTodo)
        });
        await this.fetchTodos()
    }

    @action async removeTodo(id: string) {
        await fetch(`http://localhost:4000/todos/${id}`, {
            method: 'DELETE'
        });
        await this.fetchTodos()
    }

    @action async completeTodo(id: string) {
        const todoIdx = this.todos.findIndex(todo => todo.id === id);
        const targetTodo = this.todos[todoIdx];
        const completeTodo = {...targetTodo, completed: !targetTodo.completed};

        await fetch(`http://localhost:4000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(completeTodo)

        });
        await this.fetchTodos()
    }

    @action async fetchTodos(filterType: TFilters = 'all') {
        this.isLoading = true;
        
        let query = '';

        if (filterType === 'done') {
            query += 'completed=true'
        } else if (filterType === 'undone') {
            query += 'completed=false'
        }

        await fetch(`http://localhost:4000/todos?${query}`)
            .then(response => response.json())
            .then(action((data => {
                this.todos = data
                this.isLoading = false
            })))
    }
}

export default new TodoStore()
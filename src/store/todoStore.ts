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
    }

    @action async removeTodo(id: string) {
    }

    @action async completeTodo(id: string) {
    }

    @action async fetchTodos(filterType: TFilters = 'all') {
    }
}

export default new TodoStore()
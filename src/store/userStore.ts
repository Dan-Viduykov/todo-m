import { action, makeAutoObservable, observable } from "mobx"
import { ITodo } from "./todoStore";

export interface IUser {
    email: string;
    id: string;
    login: string;
    todos: ITodo[];
}

class UserStore {
    @observable user: IUser | null = null;
    
    constructor() {
        makeAutoObservable(this)
    }

    @action setUser(user: IUser) {
        this.user = {...user}
    }
    
    get userTodos(): ITodo[] {
        return this.user ? this.user.todos : [];
    }
}

export default new UserStore()
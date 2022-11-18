import { ITodo } from '@/store/todoStore';

export const createTodo = (title: string, description: string): ITodo => {
    const uniqid = require('uniqid')

    return {
        id: uniqid(),
        title: title,
        description: description,
        completed: false,
        createAt: `${new Date().getTime()}`
    }
}
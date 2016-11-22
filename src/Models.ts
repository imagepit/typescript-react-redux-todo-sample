export interface GlobalState {
    filter: string
    todos: Todo[]
}

export class Todo {
    id: number = Date.now()
    constructor(public text: string, public completed: boolean = false) {
    }
}

export interface MyAction {
    type: string
    todo: Todo
}
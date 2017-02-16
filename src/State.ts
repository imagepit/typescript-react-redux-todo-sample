export interface GlobalState {
    todos: Todo[]
}

export class Todo {
    id: number = Date.now()
    constructor(
      public text: string, // TODOテキスト
      public completed: boolean = false // TODO完了フラグ
    ){
    }
}
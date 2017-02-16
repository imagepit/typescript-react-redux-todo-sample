import {ActionTypes} from "./ActionTypes"
import {GlobalState, Todo} from "./State"

const initialState:GlobalState = {todos:[]}

export function todo(state: GlobalState = initialState, action: any): GlobalState {
    switch (action.type) {
        // TODO追加時
        case ActionTypes.ADD_TODO:
            var todo = new Todo(action.todo.text,false)
            state.todos.push(todo) // TODOアイテム追加
            // stateをObject.assignでコピーして返却
            return Object.assign({}, state, {
                todos: state.todos
            })
        // TODOクリック時
        case ActionTypes.TOGGLE_TODO:
            var todo: Todo = action.todo
            todo.completed = !todo.completed // 完了フラグを反転
            // stateをObject.assignでコピーして返却
            return Object.assign({}, state, {
                todos: state.todos
            })
        default:
            return state
    }
}
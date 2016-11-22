import {ActionTypes} from "./ActionTypes";
import {GlobalState, MyAction, Todo} from "./Models";

const initialState:GlobalState = {filter: "", todos:[]};

export function todo(state: GlobalState = initialState, action: MyAction): GlobalState {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            var todo = new Todo(action.todo.text,false);
            state.todos.push(todo)
            return Object.assign({}, state, {
                filter: state.filter,
                todos: state.todos
            });
        case ActionTypes.TOGGLE_TODO:
            var todo = action.todo
            todo.completed = !todo.completed
            return Object.assign({}, state, {
                filter: state.filter,
                todos: state.todos
            });
        default:
            return state
    }
}
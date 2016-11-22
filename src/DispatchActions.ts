import {ActionTypes} from "./ActionTypes";
import {Todo,MyAction} from "./Models"

export class DispatchActions {
    private dispatch: (action: MyAction) => any;
    constructor(dispatch: (action: MyAction) => any){
        this.dispatch = dispatch
    }

    public add(todo: Todo) {
        console.log("DispatchActions.add:" + todo.text)
        this.dispatch({ type: ActionTypes.ADD_TODO, todo: todo})
    }

    public toggle(todo: Todo) {
        console.log("DispatchActions.toggle")
        this.dispatch({ type: ActionTypes.TOGGLE_TODO, todo: todo})
    }
}
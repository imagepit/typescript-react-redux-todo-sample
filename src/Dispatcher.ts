import {ActionTypes} from "./ActionTypes";
import {Todo} from "./State"

export class DispatchActions {
    private dispatch: (action: any) => any;
    constructor(dispatch: (action: any) => any){
        this.dispatch = dispatch
    }
    // TODO追加時
    public add(todo: Todo) {
        console.log("DispatchActions.add:" + todo.text)
        this.dispatch({ type: ActionTypes.ADD_TODO, todo: todo})
    }
    // TODOアイテムクリック時
    public toggle(todo: Todo) {
        console.log("DispatchActions.toggle")
        this.dispatch({ type: ActionTypes.TOGGLE_TODO, todo: todo})
    }
}
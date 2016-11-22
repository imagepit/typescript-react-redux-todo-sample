import * as React from "react"
import {GlobalState, MyAction, Todo} from "./Models"
import {DispatchActions} from "./DispatchActions"

//---------------------------
// TODO 1アイテム
//---------------------------
interface TodoComponentProps extends React.Props<{}> {
    todo: Todo
    actions: DispatchActions
}

class TodoComponent extends React.Component<TodoComponentProps, {}> {
    handleClick() {
        this.props.actions.toggle(this.props.todo)
    }
    render() {
        var todo = this.props.todo
        return (
            <li 
                onClick={this.handleClick.bind(this)}
                style={ {
                    textDecoration: this.props.todo.completed ? 'line-through' : 'none'
                } }
            >
                {todo.text}
            </li>
        );
    }
}

//---------------------------
// TODOリスト
//---------------------------
interface TodoListComponentProps extends React.Props<{}> {
    state: GlobalState
    actions: DispatchActions
}

class TodoListComponent extends React.Component<TodoListComponentProps, {}> {
    render() {
        var todos = this.props.state.todos.map(x => <TodoComponent key={x.id} todo={x} actions={this.props.actions}/>);
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

//---------------------------
// TODOの入力フォーム
//---------------------------
interface TodoFormComponentProps extends React.Props<{}> {
    actions: DispatchActions
}

class TodoFormComponent extends React.Component<TodoFormComponentProps, {}> {
    private handleSubmit(e: React.SyntheticEvent) {
        console.log("TodoFormComponent.handleSubmit")
        e.preventDefault()
        var text = this.refs['text'] as HTMLInputElement
        var todo = new Todo(text.value,false)
        this.props.actions.add(todo)
        text.value = ''
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' ref='text' />
                <input type='submit' value='追加' />
            </form>
        );
    }
}

//---------------------------
// TODOアプリ全体
//---------------------------
interface TodoAppProps extends React.Props<{}> {
    state: GlobalState
    actions: DispatchActions
}

export class TodoApp extends React.Component<TodoAppProps, {}> {
    render() {
        console.log(this.props.state)
        return (
            <div>
                <TodoFormComponent actions={this.props.actions}/>
                <hr />
                <TodoListComponent state={this.props.state} actions={this.props.actions}/>
            </div>
        );
    }
}
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Components from './Components'
import store from "./Store"
import {DispatchActions} from "./DispatchActions"
import {Provider, connect} from "react-redux"
import {Dispatch} from "redux"

const TodoAppComponent = connect(
    (store: any) => {return {state: store.todo}},
    (dispatch: Dispatch<any>) => {return {actions: new DispatchActions(dispatch)}}
)(Components.TodoApp)

ReactDOM.render(
    <Provider store={store}>
        <TodoAppComponent />
    </Provider>,
    document.getElementById('app')
)
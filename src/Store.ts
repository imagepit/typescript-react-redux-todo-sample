import {todo} from './Reducer'
import { createStore, combineReducers } from 'redux'

// storeにreducerを追加
export default createStore(
    combineReducers({
        todo
    })
)
import {todo} from './Reducer'
import { createStore, combineReducers } from 'redux'

// storeにreducerを追加
export default createStore(
    // イベントを処理させるreducerを紐付けておくことで、良い感じにstateを変更してくれる
    combineReducers({
        todo
    })
);
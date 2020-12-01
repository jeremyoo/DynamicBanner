import { combineReducers } from 'redux';
import input from "./input"
import palette from './palette';

const rootReducer = combineReducers({
    input,
    palette,
})

export default rootReducer;
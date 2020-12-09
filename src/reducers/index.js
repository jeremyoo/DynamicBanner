import { combineReducers } from 'redux';
import inputReducer from './inputReducer'
import paletteReducer from './paletteReducer'

const rootReducer = combineReducers({
    inputReducer,
    paletteReducer,
})

export default rootReducer;
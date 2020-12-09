import { handleActions } from 'redux-actions';
import { CHANGE_INPUT, INITIALIZE_TEXT } from '../actions/inputActions'

/* initial state */
const initialState = {
    text: "text here :)",
    fontStyle: "normal",
    fontSize: 20,
    canvasWidth: "300",
    canvasHeight: "200",
};

/* reducer */
const inputReducer = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value,
        }),
        [INITIALIZE_TEXT]: (state) => ({
            ...state,
            text: '',
        }),
    },
    initialState,
);


export default inputReducer;
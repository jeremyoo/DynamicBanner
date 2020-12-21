import { handleActions } from 'redux-actions';
import { CHANGE_INPUT, INITIALIZE_TEXT } from '../actions/inputActions'

/* initial state */
const initialState = {
    text: "hello :)",
    fontStyle: "normal",
    fontSize: 36,
    canvasWidth: "600",
    canvasHeight: "350",
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
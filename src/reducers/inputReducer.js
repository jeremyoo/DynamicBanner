import { handleActions } from 'redux-actions';
import { CHANGE_INPUT, INITIALIZE_TEXT, RESET_INPUT} from '../actions/inputActions'

/* initial state */
const initialState = {
    text: "hello :)",
    fontStyle: "normal",
    fontSize: 36,
    canvasWidth: "600",
    canvasHeight: "360",
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
        [RESET_INPUT]: (state) => ({
            ...state,
            text: "hello :)",
            fontStyle: "normal",
            fontSize: 36,
            canvasWidth: "600",
            canvasHeight: "360",
        })
    },
    initialState,
);


export default inputReducer;
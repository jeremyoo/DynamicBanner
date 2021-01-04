import { handleActions } from 'redux-actions';
import { CHANGE_COLOR, CHANGE_TYPE, RESET_COLOR } from '../actions/paletteActions'
import produce from 'immer';

/* initialstate */
const initialState = {
    background: {
        hex: "#14cc8f",
    },
    text: {
        hex: "#303C55",
    },
    select: "",
}


/* reducer */
const paletteReducer = handleActions(
    {
        [CHANGE_COLOR]: (state, { payload: { type, hexColor } }) => 
            produce(state, draft => {
            draft[type]["hex"] = hexColor;
        }),
        [CHANGE_TYPE]: (state, {payload: { value } }) => ({
            ...state,
            select: value,
        }),
        [RESET_COLOR]: (state) => ({
            ...state,
            background: {
                hex: "#14cc8f",
            },
            text: {
                hex: "#303C55",
            },
            select: "",
        })
    },
    initialState,
);


export default paletteReducer;
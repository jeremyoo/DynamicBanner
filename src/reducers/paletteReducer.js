import { handleActions } from 'redux-actions';
import { CHANGE_COLOR, CHANGE_TYPE } from '../actions/paletteActions'
import produce from 'immer';

/* initialstate */
const initialState = {
    canvas: {
        hex: "#1273de",
        rgb: {
            r: 18,
            g: 115,
            b: 222,
        },
    },
    text: {
        hex: "#fad0c3",
        rgb: {
            r: 250,
            g: 208,
            b: 195,
        },
    },
    select: "canvas",
}


/* reducer */
const paletteReducer = handleActions(
    {
        [CHANGE_COLOR]: (state, { payload: { type, hexColor, rgbColor } }) => 
            produce(state, draft => {
            draft[type]["hex"] = hexColor;
            draft[type]["rgb"] = rgbColor;
        }),
        [CHANGE_TYPE]: (state, {payload: { value } }) => ({
            ...state,
            select: value,
        })
    },
    initialState,
);


export default paletteReducer;
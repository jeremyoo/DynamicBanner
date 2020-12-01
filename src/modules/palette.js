import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

/* action */
const CHANGE_COLOR = "palette/CHANGE_COLOR";
const CHANGE_TYPE = "palatte/CHANGE_TYPE";


/* action creator */
export const changeColor = createAction(CHANGE_COLOR, ({ type, hexColor, rgbColor }) => ({
    type,
    hexColor,
    rgbColor,
}));
export const changeType = createAction(CHANGE_TYPE, ({ value }) => ({
    value,
}))

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
const palette = handleActions(
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


export default palette;

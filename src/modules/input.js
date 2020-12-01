import {createAction, handleActions} from 'redux-actions';

/* action */
const CHANGE_INPUT = "input/CHANGE_INPUT";

/* action creator */
export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
    key,
    value,
}));

/* initial state */
const initialState = {
    text: "text here :)",
    fontStyle: "normal",
    fontSize: 20,
    canvasWidth: "300",
    canvasHeight: "200",
};

/* reducer */
const input = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value,
        }),
    },
    initialState,
);


export default input;


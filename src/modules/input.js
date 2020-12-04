import {createAction, handleActions} from 'redux-actions';

/* action */
const CHANGE_INPUT = "input/CHANGE_INPUT";
const INITIALIZE_TEXT = "input/INITIALIZE_TEXT";


/* action creator */
export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
    key,
    value,
}));
export const initializeText = createAction(INITIALIZE_TEXT);

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
        [INITIALIZE_TEXT]: (state) => ({
            ...state,
            text: '',
        }),
    },
    initialState,
);


export default input;


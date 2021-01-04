import { createAction } from 'redux-actions';

/* action */
export const CHANGE_INPUT = "input/CHANGE_INPUT";
export const INITIALIZE_TEXT = "input/INITIALIZE_TEXT";
export const RESET_INPUT = "input/RESET_INPUT";

/* action creator */
export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
    key,
    value,
}));
export const initializeText = createAction(INITIALIZE_TEXT);
export const resetInput = createAction(RESET_INPUT);
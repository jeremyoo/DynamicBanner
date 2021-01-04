import { createAction } from 'redux-actions';

/* action */
export const CHANGE_COLOR = "palette/CHANGE_COLOR";
export const CHANGE_TYPE = "palatte/CHANGE_TYPE";
export const RESET_COLOR = "palette/RESET_COLOR";

/* action creator */
export const changeColor = createAction(CHANGE_COLOR, ({ type, hexColor }) => ({
    type,
    hexColor,
}));
export const changeType = createAction(CHANGE_TYPE, ({ value }) => ({
    value,
}))
export const resetColor = createAction(RESET_COLOR)
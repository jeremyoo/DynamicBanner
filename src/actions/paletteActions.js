import { createAction } from 'redux-actions';

/* action */
export const CHANGE_COLOR = "palette/CHANGE_COLOR";
export const CHANGE_TYPE = "palatte/CHANGE_TYPE";

/* action creator */
export const changeColor = createAction(CHANGE_COLOR, ({ type, hexColor }) => ({
    type,
    hexColor,
}));
export const changeType = createAction(CHANGE_TYPE, ({ value }) => ({
    value,
}))

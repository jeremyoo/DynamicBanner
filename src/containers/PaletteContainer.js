import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeColor } from '../actions/paletteActions'
import Palette from '../components/palatte/Palette';

const PaletteContainer = () => {
    const dispatch = useDispatch();
    const { canvasHex, textHex, select } = useSelector(({ paletteReducer }) => ({
        canvasHex: paletteReducer.canvas,
        textHex: paletteReducer.text,
        select: paletteReducer.select,
    }));

    const onChangeField = useCallback(
        (payload) => dispatch(changeColor(payload)),
        [dispatch]
    );  

    return (
        <Palette
            canvasHex={canvasHex}
            textHex={textHex}
            onChangeField={onChangeField}
            select={select}
        />
    )
}

export default PaletteContainer;
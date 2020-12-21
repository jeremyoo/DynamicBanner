import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeColor } from '../actions/paletteActions'
import Palette from '../components/palette';

const PaletteContainer = () => {
    const dispatch = useDispatch();
    const { backgroundHex, textHex, select } = useSelector(({ paletteReducer }) => ({
        backgroundHex: paletteReducer.background,
        textHex: paletteReducer.text,
        select: paletteReducer.select,
    }));

    const onChangeField = useCallback(
        (payload) => dispatch(changeColor(payload)),
        [dispatch]
    );  

    return (
        <>
            <Palette
                backgroundHex={backgroundHex}
                textHex={textHex}
                onChangeField={onChangeField}
                select={select}
            />

        </>
    )
}

export default PaletteContainer;
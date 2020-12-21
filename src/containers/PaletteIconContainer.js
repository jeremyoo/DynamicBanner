import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeColor, changeType } from '../actions/paletteActions'
import PaletteIcon from '../components/paletteIcon';

const PaletteIconContainer = () => {
    const dispatch = useDispatch();
    const { backgroundHex, textHex, select } = useSelector(({ paletteReducer }) => ({
        backgroundHex: paletteReducer.background.hex,
        textHex: paletteReducer.text.hex,
        select: paletteReducer.select,
    }));

    const onChangeField = useCallback(
        (payload) => dispatch(changeColor(payload)),
        [dispatch]
    );
    const onClickType = useCallback(
        (payload) => dispatch(changeType(payload)),
        [dispatch]
    );

    return (
        <>
            <PaletteIcon
                backgroundHex={backgroundHex}
                textHex={textHex}
                onChangeField={onChangeField}
                onClickType={onClickType}
                select={select}
            />

        </>
    )
}

export default PaletteIconContainer;
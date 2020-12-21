import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeType } from '../actions/paletteActions';
import TypeInput from '../components/typeInput';

const TypeInputContainer = () => {
    const dispatch = useDispatch();

    const onClickType = useCallback(
        (payload) => dispatch(changeType(payload)),
        [dispatch]
    );
    
    return (
        <div>
            <TypeInput
                onClickType={onClickType}
            />
        </div>
    )
};

export default TypeInputContainer;
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeInput } from '../actions/inputActions';
import FontInput from '../components/fontInput';

const FontInputContainer = () => {
    const dispatch = useDispatch();

    const onChangeField = useCallback(
        (payload) => dispatch(changeInput(payload)),
        [dispatch]
    );

    return (
        <div>
            <FontInput
                onChangeField={onChangeField}
            />
        </div>
    )
};

export default FontInputContainer;
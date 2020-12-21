import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeInput } from '../actions/inputActions';
import TextInput from '../components/textInput';

const TextInputContainer = ({ inputRef }) => {
    const dispatch = useDispatch();

    const onChangeField = useCallback(
        (payload) => dispatch(changeInput(payload)),
        [dispatch]
    );
    
    return (
        <div>
            <TextInput
                onChangeField={onChangeField}
                inputRef={inputRef}
            />
        </div>
    )
};

export default TextInputContainer;
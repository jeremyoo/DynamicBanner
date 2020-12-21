import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeInput } from '../actions/inputActions';
import SizeInput from '../components/sizeInput';

const SizeInputContainer = () => {
    const dispatch = useDispatch();

    const onChangeField = useCallback(
        (payload) => dispatch(changeInput(payload)),
        [dispatch]
    );
    
    return (
            <SizeInput onChangeField={onChangeField}/>
    )
};

export default SizeInputContainer;
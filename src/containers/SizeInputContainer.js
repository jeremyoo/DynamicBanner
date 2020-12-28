import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '../actions/inputActions';
import SizeInput from '../components/sizeInput';

const SizeInputContainer = () => {
    const dispatch = useDispatch();

    const { width, height } = useSelector(({ inputReducer }) => ({
        width: inputReducer.canvasWidth,
        height:  inputReducer.canvasHeight,
    }));

    const onChangeField = useCallback(
        (payload) => dispatch(changeInput(payload)),
        [dispatch]
    );
    
    return (
            <SizeInput onChangeField={onChangeField} width={width} height={height} />
    )
};

export default SizeInputContainer;
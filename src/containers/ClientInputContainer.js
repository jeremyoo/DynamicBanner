import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeInput } from '../modules/input';
import { changeType } from '../modules/palette';
import ClientInput from '../components/input/ClientInput';

const ClientInputContainer = ({ inputRef }) => {
    const dispatch = useDispatch();

    const onChangeField = useCallback(
        (payload) => dispatch(changeInput(payload)),
        [dispatch]
    );
    const onClickType = useCallback(
        (payload) => dispatch(changeType(payload)),
        [dispatch]
    );
    
    return (
        <div>
            <ClientInput
                onChangeField={onChangeField}
                onClickType={onClickType}
                inputRef={inputRef}
            />
        </div>
    )
};

export default ClientInputContainer;
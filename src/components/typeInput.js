import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div``;

const TypeInput = ({ onClickType }) => {
    const onClick = (e) => {
        onClickType({ value: e.target.name })
    };

    return (
        <StyledBlock>
            <button onClick={onClick} name="background">BACKGROUND</button>
            <button onClick={onClick} name="text">TEXT</button>
        </StyledBlock>
    )
}

export default TypeInput;
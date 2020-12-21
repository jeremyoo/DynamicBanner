import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    height: 60px;
    
    span {
        position: relative;
        display: inline-block;
        border-collapse: collapse;
    }

    input {
        padding: 10px 0;
        width: 380px;
        background: none;
        color: var(--white);
        font-size: var(--ft-xl);       
        &::-webkit-input-placeholder {
            color: var(--steel);
        }
        border-bottom: 2px solid;
        border-bottom-color: var(--steel);
        transition: var(--transition);
        + .underline {
            transition: var(--transition);
        }
    }
    input:focus,
    input:active,
    input:hover {
        border-bottom: 3px solid;
        border-bottom-color: var(--white);
        + .underline {
            padding: 2px 0 2px;
            border-bottom: 3px solid;
            border-bottom-color: var(--dark-teal);
        }
    }
    input:focus,
    input:active {
        &::-webkit-input-placeholder {
            visibility: none;
            opacity: 0;
        }
    }
    input:hover {
        &::-webkit-input-placeholder {
            color: var(--white);
            text-shadow: var(--steel) 1px 1px;
        }
    }
`;

const TextInput = ({ onChangeField, inputRef }) => {
    const onChange = (e) => {
        onChangeField({ key: e.target.name, value: e.target.value });
    };

    return (
        <StyledBlock>
            <span>
                <input
                 style={{textAlign: "center"}}
                 type="text"
                 placeholder="Add text here :)"
                 onChange={onChange}
                 name="text"
                 ref={inputRef}
                 autocomplete="off" 
                />
                <div className="underline" />
            </span>
        </StyledBlock>
    )
}

export default TextInput;
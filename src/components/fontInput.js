import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useOnClickOutside } from '../hooks'
import { fontSize, fontStyle } from '../utils/fontUtils';

const StyledBlock = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    width: 100%;
`;

const Select = styled.div`
    position: relative;
    margin: 10px 10px;
    width: 180px;
`;

const SelectTrigger = styled.div`
    ${({ theme }) => theme.mixins.flexBetween};
    position: relative;
    padding: 12.5px 15px;
    background: var(--white);
    color: var(--steal);
    font-size: var(--ft-sm);
    font-weight: 600;
    text-transform: uppercase;
    width: 100%;
    line-height: 100%;
    cursor: pointer;
    border-radius: 4px;
    transition: var(--transition);
    &:hover {
        cursor: pointer;
        font-size: var(--ft-sm);
        text-shadow: var(--teal) 1px 1px;
        background-color: var(--bright-white);
    }
    ${props => props.open && css`
        cursor: pointer;
        text-shadow: var(--teal) 1px 1px;
        background-color: var(--bright-white);
        border-top: 1px;
        border-radius: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    `}
`;

const Options = styled.div`
    position: absolute;
    display: block;
    height: 155px;
    bottom: 100%;
    left: 0;
    right: 0;
    overflow: auto;
    ::-webkit-scrollbar {
        background: var(--light-steel);
        border-top-right-radius: 4px;
        width: 12px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--lightestest-navy);
        border-radius: 4px;
        border: 1px solid var(--light-navy);
    }
    border-top-left-radius: 4px;
    transition: var(--transition);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 10;
    ${props => props.open && css`
        opacity: 1;
        visibility: visible;
        pointer-events: all;
    `}
`;

const Option = styled.span`
    display: block;
    position: relative;
    padding: 8px 20px;
    background: var(--white);
    color: var(--steal);
    font-size: var(--ft-sm);
    text-transform: uppercase;
    line-height: 100%;
    cursor: pointer;
    transition: var(--transition);
    border-bottom: 1px solid var(--bright-white);
    &:hover {
        cursor: pointer;
        text-shadow: var(--teal) 1px 1px;
        font-weight: 600;
        background-color: var(--bright-white);
    }
`;

const Arrow = styled.div`
    position: relative;
    height: 15px;
    width: 15px;
    &::before,
    &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        width: 0.15rem;
        height: 100%;
        transition: var(--transition);
    }
    &::before {
        left: -5px;
        transform: rotate(45deg);
        background-color: var(--light-navy);
    }
    &::after {
        left: 5px;
        transform: rotate(-45deg);
        background-color: var(--light-navy);
    }
    ${props => props.open && css`
        &::before {
            transform: rotate(-45deg);
        }
        &::after {
            transform: rotate(45deg);
        }
    `}
`;


const FontInput = ({ onChangeField }) => {
    const [openSize, setOpenSize] = useState(false);
    const [openStyle, setOpenStyle] = useState(false);
    const [sizeValue, setSizeValue] = useState("font-size");
    const [styleValue, setStyleValue] = useState("font-style");

    const SizeVisible = () => {
        setOpenSize(!openSize);
    }
    const StyleVisible = () => {
        setOpenStyle(!openStyle);
    }
    const onClickSizeValue = (e) => {
        const type = e.target.dataset.type;
        const value = e.target.dataset.value;
        console.log(e.target.dataset.type, e.target.dataset.value);
        console.log(type, value);
        setSizeValue(value);
        onChangeField({ key: type, value: value });
    }
    const onClickStyleValue = (e) => {
        const type = e.target.dataset.type;
        const value = e.target.dataset.value;
        setStyleValue(value);
        onChangeField({ key: type, value: value });
    }
    const SizeRef = useRef()
    const StyleRef = useRef()
    useOnClickOutside(SizeRef, () => {
        setOpenSize(false);
    });
    useOnClickOutside(StyleRef, () => {
        setOpenStyle(false);
    });

    return (
        <StyledBlock>
            <Select onClick={SizeVisible} ref={SizeRef}>
                <SelectTrigger open={openSize}><span name="fontSize">{sizeValue}</span>
                    <Arrow open={openSize}></Arrow>
                </SelectTrigger>
                <Options open={openSize}>
                    {fontSize.map((size) => <Option data-value={size} data-type="fontSize" onClick={onClickSizeValue}>{size}</Option>)}
                </Options>
            </Select>
            <Select onClick={StyleVisible} ref={StyleRef}>
                <SelectTrigger open={openStyle}><span name="fontStyle">{styleValue}</span>
                    <Arrow open={openStyle}></Arrow>
                </SelectTrigger>
                <Options open={openStyle}>
                    {fontStyle.map((style) => <Option data-value={style} data-type="fontStyle" onClick={onClickStyleValue}>{style}</Option>)}
                </Options>
            </Select>
        </StyledBlock>
    )
}

export default FontInput;
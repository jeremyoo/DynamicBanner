import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    height: 100px;
    margin-top: 20px;
    background: inherit;

    span {
        position: relative;
        display: inline-block;
        margin: 30px 10px 30px;
    }

    input {
        padding: 9px 0 9px 16px;
        width: 180px;
        background: var(--white);
        border-radius: 4px;
        font-size: var(--ft-lg);
        color: var(--light-navy);
        text-shadow: var(--light-steel) 2px 2px;
        font-weight: 600;
        letter-spacing: 4px;
        text-indent: 80px;
        &::-webkit-input-placeholder {
            text-shadow: none;
            letter-spacing: normal;
            color: var(--white);
            text-indent: 5px;
            font-weight: 300;
        }
        + label {
            position: absolute;
            top: 8px;
            left: 0;
            bottom: 8px;
            padding: 5px 15px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            border-radius: 3px;
            transition: var(--transition);
            background: rgba(20, 204, 143, 0);
            &:after {
                position: absolute;
                content: "";
                width: 0;
                height: 0;
                top: 100%;
                left: 50%;
                margin-left: -3px;
                border-left: 3px solid transparent;
                border-right: 3px solid transparent;
                border-top: 3px solid rgba(20, 204, 143, 0);
                transition: var(--transition);
            }
        }
        @media (max-width: 414px) {
            width: 160px;
            text-indent: 70px;
        }
        @media (max-width: 320px) {
            width: 140px;
            text-indent: 60px;
        }
    }
    @media (max-width: 414px) {
        height: 90px;
        margin-top: 15px;
    }
    @media (max-width: 320px) {
        height: 85px;
        margin-top: 10px;
    }
    input:focus,
    input:active,
    input:hover {
        color: var(--navy);
        text-indent: 5px;
        background: var(--bright-white);
        &::-webkit-input-placeholder {
            color: var(--light-steel);
        }
        + label {
            color: var(--bright-white);
            background: var(--dark-teal);
            transform: translateY(-40px);
            &:after {
                border-top: 3px solid rgba(20, 204, 143, 1);
            }
        }
    }
`;

const SizeInput = ({ onChangeField, width, height }) => {
    const [deviceWidth, setDeviceWidth] = useState(width);
    const [valueChange, setValueChange] = useState(false);

    useEffect(() => {
        const currentWidth = window.innerWidth;
        setDeviceWidth(currentWidth);
        if (deviceWidth <= width) {
            onChangeField({ key: "canvasWidth", value: `${deviceWidth}` });
            onChangeField({ key: "canvasHeight", value: `${deviceWidth}`*0.6 });
        };
    }, [width, deviceWidth, onChangeField, ])

    const onChange = (e) => {
        setValueChange(true);
        const value = e.target.value;
        const name = e.target.name;
        value < deviceWidth ?
        onChangeField({ key: name, value: value }) :
        onChangeField({ key: name, value: deviceWidth });
    };

    return (
        <StyledBlock>
            <span>
                <input id="width" type="number" value={valueChange ? width : ""}  max={deviceWidth} placeholder={width} onChange={onChange} name="canvasWidth"/>
                <label htmlFor="width">width</label>
            </span>
            <span>
                <input id="height" type="number" placeholder={height} onChange={onChange} name="canvasHeight"/>
                <label htmlFor="height">height</label>
            </span>
        </StyledBlock>
    )
}

export default SizeInput;
import React, { useState, useRef } from 'react';
import MyColorPalette from './myColorPalette';
import { useOnClickOutside } from '../hooks'
import styled, { css } from 'styled-components';
import { IoImageOutline, IoImageSharp, IoText } from "react-icons/io5";

const PaletteIconBlock = styled.div`
    ${({theme}) => theme.mixins.flexCenter};
    position: relative;
    width: 100%;
`;
const IconBlock = styled.div`
    position: relative;
    margin: 40px 10px 15px;
`;

const buttons = () => {
    return styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50px;
    height: 50px;
    padding: 0;
    border: 7px solid;
    border-radius: 4px;
    background: var(--white);
    transition: var(--transition);
    &:hover {
        cursor: pointer;
        background: var(--bright-white);

    }
    ${props => props.select && css`
        transition: var(--transition);
        color: var(--bright-white);
        background: var(--lightestest-navy);
        transition: var(--transition);
        &:hover {
            cursor: pointer;
            background: var(--lightestest-navy);
        }
    `}
`};
const BackButton = buttons();
const TextButton = buttons();

const palette = () => {
    return styled.div`
    position: absolute;
    display: block;
    padding: 2px;
    border-radius: 2px;
    background: var(--lightestest-navy);
    bottom: 130%;
    right: -76px;
    transition: var(--transition);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        top: 100%;
        left: 50%;
        margin-left: -10px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid var(--lightestest-navy);
    };
    &:hover {
        cursor: pointer;
    }
    ${props => props.open && css`
        opacity: 1;
        visibility: visible;
        pointer-events: all;`}
`};
const SelectedBackIcon = styled(IoImageSharp)`
    pointer-events: none;
`;
const UnselectedBackIcon = styled(IoImageOutline)`
    pointer-events: none;
`;
const SelectedTextIcon =  styled(IoText)`
    pointer-events: none;
    color: var(--white);
`;
const UnelectedTextIcon = styled(IoText)`
    pointer-events: none;
    color: var(--dark-navy);
`; 



const BackPalette = palette();
const TextPalette = palette();

const PaletteIcon = ({ backgroundHex, textHex, onChangeField, onClickType, select }) => {
    const [paletteBg, setPaletteBg] = useState(false);
    const [paletteText, setPaletteText] = useState(false);

    const onClickBack = (e) => {
        onClickType({ value: e.target.name });
        setPaletteText(false);
        setPaletteBg(!paletteBg);
    };
    const onClickText = (e) => {
        onClickType({ value: e.target.name });
        setPaletteBg(false);
        setPaletteText(!paletteText);
    };

    const bgRef = useRef();
    const textRef = useRef();
    useOnClickOutside(bgRef, () => setPaletteBg(false));
    useOnClickOutside(textRef, () => setPaletteText(false));

return (
    <PaletteIconBlock>
        <IconBlock>
            <BackPalette open={paletteBg} ref={bgRef}>
                <MyColorPalette select={select} color={backgroundHex} onChangeField={onChangeField} />
            </BackPalette>
            <BackButton select={select==="background" ? 1 : 0} open={paletteBg} onClick={onClickBack} style={{borderColor:`${backgroundHex}`}} name="background">
                { select === "background" ?
                <SelectedBackIcon size="26" /> : <UnselectedBackIcon size="26" /> 
                }
            </BackButton>
        </IconBlock>
        <IconBlock>
            <TextPalette open={paletteText} ref={textRef}>
                <MyColorPalette select={select} color={textHex} onChangeField={onChangeField} />
            </TextPalette>
            <TextButton select={select==="text" ? 1 : 0} open={paletteText} onClick={onClickText} style={{borderColor:`${textHex}`}} name="text">
                { select === "text" ? 
                <SelectedTextIcon size="24" /> : <UnelectedTextIcon size="24" />
                }
            </TextButton>
        </IconBlock>
    </PaletteIconBlock>
    )
};

export default PaletteIcon;
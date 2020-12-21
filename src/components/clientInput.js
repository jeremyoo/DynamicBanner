import React from 'react';
import styled from 'styled-components';
import { fontSize, fontStyle } from '../lib/text/text.js';

const ClientInputBlock = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    width: 100%;
`;

const ClientInput = ({ onChangeField, onClickType, inputRef, children }) => {
    const onChange = (e) => {
        onChangeField({ key: e.target.name, value: e.target.value });
    };
    const onClick = (e) => {
        onClickType({ value: e.target.name })
    };

    return (
        <>
            <ClientInputBlock>
                <span>
                    <input style={{textAlign: "center"}} type="number" placeholder="300" onChange={onChange} name="canvasWidth" />
                    <input style={{textAlign: "center"}} type="number" placeholder="200" onChange={onChange} name="canvasHeight" />
                </span>
                <div name="canvas">{children[0]}</div>
                <input style={{textAlign: "center"}} type="text" placeholder="Add text here :)" onChange={onChange} name="text" ref={inputRef} />
                <select onChange={onChange} name="fontSize">
                    <option value={20} key={20}>Choose font-size</option>
                    {fontSize.map((size) => <option value={size} key={size} >{size}</option>)}
                </select>
                <select onChange={onChange} name="fontStyle">
                    <option value={"normal"} key={"normal"}>Choose font-style</option>
                    {fontStyle.map((style) => <option value={style} key={style} >{style}</option>)}
                </select>
                <span>
                    <button onClick={onClick} name="canvas">BACK GROUND</button>
                    <button onClick={onClick} name="text">TEXT</button>
                </span>
                <div name="palette">{children[1]}</div>
            </ClientInputBlock>
        </>
    )

};

export default ClientInput;
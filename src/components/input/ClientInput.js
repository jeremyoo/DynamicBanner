import React from 'react';
import styled from 'styled-components';
import { fontSize, fontStyle } from '../../lib/text/text.js';
import Responsive from '../common/Responsive';


const ClientInputBlock = styled(Responsive)`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;

const Spacer = styled.div`
  margin-top: 1rem;
`;

const ClientInput = ({ onChangeField, onClickType, inputRef }) => {
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
                    <input style={{textAlign: "center"}} type="number" placeholder="300" onChange={onChange
                    } name="canvasWidth" />
                    <input style={{textAlign: "center"}} type="number" placeholder="200" onChange={onChange} name="canvasHeight" />
                </span>
                <Spacer />
                <input style={{textAlign: "center"}} type="text" placeholder="Add text here :)" onChange={onChange} name="text" ref={inputRef} />
                <Spacer />
                <select onChange={onChange} name="fontSize">
                    <option value={20} key={20}>Choose font-size</option>
                    {fontSize.map((size) => <option value={size} key={size} >{size}</option>)}
                </select>
                <Spacer />
                <select onChange={onChange} name="fontStyle">
                    <option value={"normal"} key={"normal"}>Choose font-style</option>
                    {fontStyle.map((style) => <option value={style} key={style} >{style}</option>)}
                </select>
                <Spacer />
                <span>
                    <button onClick={onClick} name="canvas">BACK GROUND</button>
                    <button onClick={onClick} name="text">TEXT</button>
                </span>
                <Spacer />
            </ClientInputBlock>
        </>
    )

};

export default ClientInput;
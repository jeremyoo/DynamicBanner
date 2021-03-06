import React from "react";
import styled, { css } from "styled-components";

const DownloadBtnBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: var(--transition);
  ${props => props.textElement[0] === undefined ?
  css`visibility: hidden; opacity: 0; position: fixed; transform: translateY(-20px);` :
  css`visibility: visible; opacity: 1; position: relative; transition: var(--transition);`};

  button {
    position: relative;
    height: 40px;
    padding: 10px 15px;
    background: var(--darkest-bluish);
    color: var(--bright-white);
    font-size: var(--ft-sm);
    font-weight: 600;
    text-transform: uppercase;
    border: 0;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      text-shadow: var(--lightestest-navy) 2px 2px;
      background: var(--bluish);
      transition: var(--transition);
    }
  }
`;

const DownloadButton = ({ textElement, canvasWidth, onClick }) => {
  return (
    <>
      <DownloadBtnBlock textElement={textElement}>
        <button style={{width: parseInt(canvasWidth/2)}} onClick={onClick}>DOWNLOAD BANNER</button>
      </DownloadBtnBlock>
    </>
  );
};

export default DownloadButton;

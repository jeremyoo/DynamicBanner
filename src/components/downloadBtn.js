import React from "react";
import styled, { css } from "styled-components";

const DownloadBtnBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 5px;
  transition: var(--transition);
  @media (max-width: 414px) {
    margin-top: 4px;
  }
  @media (max-width: 320px) {
    margin-top: 3px;
  }
  ${props => props.textElement[0] === undefined ?
  css`visibility: hidden; opacity: 0; position: fixed; transform: translateY(-20px);` :
  css`visibility: visible; opacity: 1; position: relative; transition: var(--transition);`};

  button {
    position: relative;
    height: 40px;
    padding: 10px 15px;
    background: var(--dark-teal);
    color: var(--bright-white);
    font-size: var(--ft-sm);
    font-weight: 600;
    text-transform: uppercase;
    border: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      text-shadow: var(--lightestest-navy) 2px 2px;
      background: var(--teal);
      transition: var(--transition);
    }
  }
`;

const DownloadButton = ({ textElement, canvasWidth, onClick }) => {
  return (
    <>
      <DownloadBtnBlock textElement={textElement}>
        <button style={{width: parseInt(canvasWidth)}} onClick={onClick}>DOWNLOAD THIS BANNER</button>
      </DownloadBtnBlock>
    </>
  );
};

export default DownloadButton;

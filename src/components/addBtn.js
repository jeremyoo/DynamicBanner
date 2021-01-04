import React from "react";
import styled from "styled-components";

const AddBtnBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10px;

  button {
    position: relative;
    width: 120px;
    height: 90px;
    padding: 10px 15px;
    background: var(--darkest-teal);
    color: var(--bright-white);
    font-size: var(--ft-lg);
    font-weight: 600;
    text-transform: uppercase;
    border: 0;
    border-radius: 4px;
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

const AddBtn = ({ onClick }) => {
  return (
    <>
      <AddBtnBlock>
        <button onClick={onClick}>ADD<br></br>Text</button>
      </AddBtnBlock>
    </>
  );
};

export default AddBtn;

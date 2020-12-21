import React from "react";
import styled from "styled-components";

const AddBtnBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 25px;

  button {
    position: relative;
    width: 140px;
    height: 45px;
    padding: 10px 15px;
    background: var(--dark-teal);
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
      font-size: var(--ft-xl);
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
        <button onClick={onClick}>ADD</button>
      </AddBtnBlock>
    </>
  );
};

export default AddBtn;

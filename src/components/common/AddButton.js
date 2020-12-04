import React from "react";
import Responsive from "./Responsive";
import styled from "styled-components";

const AddButtonBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AddBtn = styled.button``;

const AddButton = ({ onClick }) => {
  return (
    <>
      <AddButtonBlock>
        <AddBtn onClick={onClick}>ADD</AddBtn>
      </AddButtonBlock>
    </>
  );
};

export default AddButton;

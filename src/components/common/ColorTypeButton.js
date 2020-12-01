import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";

const ColorTypeButtonBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColorTypeButton = ({ onClick }) => {
  return (
    <ColorTypeButtonBlock>
      <span>
        <input
          type="radio"
          id="backC"
          name="radioB"
          value="backG"
          onClick={onClick}
          defaultChecked
        />
        <label htmlFor="backC">Background</label>
        <input
          type="radio"
          id="textC"
          name="radioB"
          value="text"
          onClick={onClick}
        />
        <label htmlFor="textC">Text</label>
      </span>
    </ColorTypeButtonBlock>
  );
};

export default ColorTypeButton;

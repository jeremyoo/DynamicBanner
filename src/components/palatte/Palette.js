import React from "react";
import styled from "styled-components";
import { HuePicker, GithubPicker } from "react-color";
import Responsive from "../common/Responsive";

const PickerBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spacer = styled.div`
  margin-top: 2rem;
`;

const Palette = ({
  canvasHex,
  textHex,
  onChangeField,
  select,
}) => {
  
  const onChange = (color) => {
    onChangeField({ type: select, hexColor: color.hex, rgbColor: color.rgb })
  };

  return (
    <>
      <PickerBlock>
        <GithubPicker
          width={"200px"}
          triangle={"hide"}
          color={(select === "canvas") ? canvasHex : textHex}
          onChange={onChange}
        />
        <HuePicker
          width={"200px"}
          height={"20px"}
          color={(select === "canvas") ? canvasHex : textHex}
          onChange={onChange}
        />
      </PickerBlock>
      <Spacer />
    </>
  );
};

export default Palette;

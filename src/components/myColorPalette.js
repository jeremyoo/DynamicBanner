import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { CustomPicker } from "react-color";
const tinycolor = require("tinycolor2");
const { Saturation, Hue } = require('react-color/lib/components/common');

const PickerBlock = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

const CustomSlider = () => {return <StyledCustomSlider />}
const StyledCustomSlider = styled.div`
  margin-top: -1px;
  width: 8px;
  border-radius: 1px;
  height: 17px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .6);
  background: #fff;
  transform: translateX(-2px);
`;
const CustomPointer = () => {return <StyledCustomPointer />}
const StyledCustomPointer = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: translate(-9px, -1px);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
`;

const MyColorPalette = ({
  hsl,
  hsv,
  onChangeField,
  select,
}) => {
  const onChange = (color) => {
    const hexColor = tinycolor(color).toHex();
    onChangeField({ type: select, hexColor: `#${hexColor}`})
  };

  // prevent content scrolling while changing color
  const blockRef = useRef();
  useEffect(() => {
    const block = blockRef.current
    block.addEventListener("touchmove", (e) => {
      e.preventDefault();
    })
  })

  return (
    <>
      <PickerBlock ref={blockRef}>
      <div style={{ height: 150, width: 200, position: 'relative' }} >
        <Saturation
          hsl={hsl}
          hsv={hsv}
          pointer={CustomPointer}
          onChange={onChange}
        />
      </div>
      <div style={{ height: 15, width: 200, position: 'relative' }} >
       <Hue
          hsl={hsl}
          pointer={CustomSlider}
          direction={"horizontal"}
          onChange={onChange}
        />
      </div>
      </PickerBlock>
    </>
  );
};

export default CustomPicker(MyColorPalette);
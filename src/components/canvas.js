import React, { useEffect, useState, useRef } from "react";
import AddBtn from "./addBtn";
import { addText } from '../utils/addTextUtils';
import { canvasInitiate, canvasMousedown, canvasMousemove, canvasMouseup } from '../utils/canvasUtils';
import styled from "styled-components";
// import PaletteContainer from "../containers/PaletteContainer";
import SizeInputContainer from "../containers/SizeInputContainer";
import TextInputContainer from "../containers/TextInputContainer";
import FontInputContainer from "../containers/FontInputContainer";
// import TypeInputContainer from "../containers/TypeInputContainer";
import PaletteIconContainer from "../containers/PaletteIconContainer";

const CanvasBlock = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

const Canvas = ({
  text,
  fontStyle,
  fontSize,
  canvasWidth,
  canvasHeight,
  backgroundHex,
  textHex,
  inputRef,
  initialize,
}) => {
  const [textElement, setTextElement] = useState([]);
  const canvasRef = useRef();

  const onClickAddText = () => {
    const canvas = canvasRef.current;
    const input = inputRef.current;
    addText(canvas, text, textHex, fontSize, fontStyle, textElement, setTextElement);
    initialize();
    input.value = "";
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    canvasInitiate(canvas, backgroundHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement);
    canvasMousemove(canvas, backgroundHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement);
    canvasMousedown(canvas, textElement);
    canvasMouseup(canvas, textElement);
  }, [text, textHex, fontSize, fontStyle, backgroundHex, canvasWidth, canvasHeight, textElement]);

  return (
    <>
      <CanvasBlock>
        <SizeInputContainer />
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
        <PaletteIconContainer />
        <TextInputContainer inputRef={inputRef} />
        <FontInputContainer />
        <AddBtn onClick={onClickAddText} />
      </CanvasBlock>
    </>
  );
};

export default Canvas;


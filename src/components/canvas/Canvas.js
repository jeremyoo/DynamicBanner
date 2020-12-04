import React, { useEffect, useState, useRef } from "react";
import Responsive from "../common/Responsive";
import AddButton from "../common/AddButton";
import { addText } from '../../utils/addTextUtils';
import { canvasInitiate, canvasMousedown, canvasMousemove, canvasMouseup } from '../../utils/canvasUtils';
import styled from "styled-components";

const CanvasBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spacer = styled.div`
  margin-top: 1rem;
`;

const Canvas = ({
  text,
  fontStyle,
  fontSize,
  canvasWidth,
  canvasHeight,
  canvasHex,
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
    canvasInitiate(canvas, canvasHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement);
    canvasMousemove(canvas, canvasHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement);
    canvasMousedown(canvas, textElement);
    canvasMouseup(canvas, textElement);
  }, [text, textHex, fontSize, fontStyle, canvasHex, canvasWidth, canvasHeight, textElement]);

  return (
    <>
      <CanvasBlock>
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
        <Spacer />
        <AddButton onClick={onClickAddText} />
        <Spacer />
      </CanvasBlock>
    </>
  );
};

export default Canvas;


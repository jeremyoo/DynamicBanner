import React, { useEffect, useState, useRef } from "react";
import AddBtn from "./addBtn";
import { addText } from '../utils/addTextUtils';
import * as canvasFn from '../utils/canvasUtils';
import styled from "styled-components";
import SizeInputContainer from "../containers/SizeInputContainer";
import TextInputContainer from "../containers/TextInputContainer";
import FontInputContainer from "../containers/FontInputContainer";
import PaletteIconContainer from "../containers/PaletteIconContainer";
import DownloadButton from "./downloadBtn";
import ResetButton from "./resetBtn";

const CanvasBlock = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  margin-bottom: 60px;

  .font_addbtn_div {
    ${({ theme }) => theme.mixins.flexCenter};
  }
  .reset_downlaod_div {
    ${({ theme }) => theme.mixins.flexCenter};
  }
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

  useEffect(() => {
    const canvas = canvasRef.current;
    canvasFn.canvasInitiate(canvas, backgroundHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement);
    canvasFn.canvasMousemove(canvas, backgroundHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement);
    canvasFn.canvasMousedown(canvas, textElement);
    canvasFn.canvasMouseup(canvas, textElement);
    canvasFn.canvasTouchmove(canvas, backgroundHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement);
    canvasFn.canvasTouchstart(canvas, textElement);
    canvasFn.canvasTouchend(canvas, textElement);
  }, [text, textHex, fontSize, fontStyle, backgroundHex, canvasWidth, canvasHeight, textElement]);

  const onClickAddText = () => {
    const canvas = canvasRef.current;
    const input = inputRef.current;
    addText(canvas, text, textHex, fontSize, fontStyle, textElement, setTextElement);
    initialize();
    input.value = "";
  };

  const onClickDonwload = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    dataURL.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    dataURL.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
    const aTag = document.createElement('a');
    aTag.download = 'Dynamic_banner.png';
    aTag.href = dataURL;
    aTag.click();
  }

  const onClickReset = () => {
    window.location.reload();
  }

  return (
    <>
      <CanvasBlock>
        <SizeInputContainer />
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
        <div className="reset_downlaod_div">
          <ResetButton textElement={textElement} canvasWidth={canvasWidth} onClick={onClickReset} />
          <DownloadButton textElement={textElement} canvasWidth={canvasWidth} onClick={onClickDonwload} />
        </div>
        <PaletteIconContainer />
        <TextInputContainer inputRef={inputRef} />
        <div className="font_addbtn_div">
          <FontInputContainer />
          <AddBtn onClick={onClickAddText} />
        </div>
      </CanvasBlock>
    </>
  );
};

export default Canvas;


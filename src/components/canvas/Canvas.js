import React, { useEffect, useState, useRef } from "react";
import Responsive from "../common/Responsive";
import AddButton from "../common/AddButton";

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
  const canvas = canvasRef.current;
  const input = inputRef.current;
  
  const AddTextElement = () => {
    const textCtx = canvas.getContext("2d");
    textCtx.font = `${fontSize}px ${fontStyle}`;
    const measureText = textCtx.measureText(text);
    const textWidth = Math.floor(measureText.width);
    const textHeight = parseInt(fontSize)
    const x = (canvas.width / 2) - (textWidth / 2);
    const y = (canvas.height / 2) - (textHeight / 2);
    setTextElement(
      textElement.concat({
        text: text,
        color: textHex,
        textX: x,
        textY: y,
        textWidth: textWidth,
        textHeight: textHeight,
        textStyle: fontStyle,
        xClick: Number,
        yClick: Number,
        isDrag: false,
      })
    );
    initialize();
    input.value = "";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = `${canvasHex}`
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const textCtx = canvas.getContext("2d");
    textCtx.textAlign = "center";
    textCtx.textBaseline = "middle";
    textCtx.font = `${fontSize}px ${fontStyle}`;
    textCtx.fillStyle = `${textHex}`;
    textCtx.fillText(`${text}`, `${canvasWidth / 2}`, `${canvasHeight / 2}`);
    
    canvas.addEventListener("mousedown", (e) => {
      const xx = e.offsetX;
      const yy = e.offsetY;
      let overlap = 0;
      if (textElement[textElement.length - 1]) {
        textElement.forEach((element) => {
          const xClick = xx - element.textX;
          const yClick = yy - element.textY;
          const x = element.textX;
          const y = element.textY;
          const xw = element.textWidth;
          const yh = element.textHeight;
          if (x < xx && xx < x + xw && y < yy && yy < y + yh) {
            element.xClick = xClick;
            element.yClick = yClick;
            element.isDrag = true;
            overlap++;
          }
        });
        textElement.forEach((element) => {
          if (element.isDrag && overlap !== 1) {
            element.isDrag = false;
            overlap--;
          }
        });
      }
    });

    canvas.addEventListener("mousemove", (e) => {
      const xx = e.offsetX;
      const yy = e.offsetY;
      let noDrag = [];
      let reDraw = false;
      if (textElement[textElement.length - 1]) {
        textElement.forEach((element) => {
          if (!element.isDrag) {
            noDrag.push(element);
          }
          if (element.isDrag) {
            reDraw = true;
            ctx.fillStyle = `${canvasHex}`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            textCtx.font = `${element.textHeight}px ${element.textStyle}`;
            textCtx.fillStyle = `${element.color}`;
            textCtx.fillText(
              `${element.text}`,
              xx - `${element.xClick}`,
              yy - `${element.yClick}`
            );
          }
        });
      }
      if (reDraw) {
        noDrag.forEach((nd) => {
          textCtx.font = `${nd.textHeight}px ${nd.textStyle}`;
          textCtx.fillStyle = `${nd.color}`;
          textCtx.fillText(`${nd.text}`, `${nd.textX}`, `${nd.textY}`);
        });
        textCtx.font = `${fontSize}px ${fontStyle}`;
        textCtx.fillStyle = `${textHex}`;
        textCtx.fillText(`${text}`, `${canvasWidth / 2}`, `${canvasHeight / 2}`);
      }
    });

    canvas.addEventListener("mouseup", (e) => {
      const xx = e.offsetX;
      const yy = e.offsetY;
      if (textElement[textElement.length - 1]) {
        textElement.forEach((element) => {
          if (element.isDrag) {
            element.textX = xx - element.xClick;
            element.textY = yy - element.yClick;
            element.isDrag = false;
          }
          element.xClick = 0;
          element.xClick = 0;
        });
      }
    });

    if (textElement[textElement.length - 1]) {
      textCtx.textAlign = "start";
      textCtx.textBaseline = "top";
      textElement.forEach((text) => {
        textCtx.fillStyle = `${text.color}`;
        textCtx.font = `${text.textHeight}px ${text.textStyle}`;
        textCtx.fillText(`${text.text}`, `${text.textX}`, `${text.textY}`);
      });
    }
  }, [text, textHex, fontSize, fontStyle, canvasHex, canvasWidth, canvasHeight, textElement]);

  return (
    <>
      <CanvasBlock>
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
        <Spacer />
        <AddButton onClick={AddTextElement} />
        <Spacer />
      </CanvasBlock>
    </>
  );
};

export default Canvas;


import React, { useRef, useEffect } from "react";
import Responsive from "../common/Responsive";
import styled from "styled-components";

const CanvasPracticeBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spacer = styled.div`
  margin-top: 2rem;
`;

const CanvasTesting = () => {
  let textt = [];
  const canvasRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1273de";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const textCtx = canvas.getContext("2d");
    textCtx.fillStyle = "#fad0c3";
    textCtx.font = "20px normal";
    textCtx.textAlign = "center";
    textCtx.textBaseline = "middle";
    textCtx.fillText("Add text and drag it!", canvas.width / 2, canvas.height / 2)

    textCtx.textAlign = "start";
    textCtx.textBaseline = "top";

    // input
    const input = inputRef.current;
    input.addEventListener("change", (e) => {
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      const measureWidth = textCtx.measureText(e.target.value);
      const textW = Math.floor(measureWidth.width);
      textCtx.fillText(
        `${e.target.value}`,
        canvas.width / 2,
        canvas.height / 2
      );
      textt.push({
        x: x,
        y: y,
        xw: textW,
        yh: 30,
        xClick: Number,
        yClick: Number,
        text: e.target.value,
        isDrag: false,
      });
      e.target.value = "";
    });

    canvas.addEventListener("mousedown", (e) => {
      const xx = e.offsetX;
      const yy = e.offsetY;
      let overlap = 0;
      if (textt[textt.length - 1]) {
        textt.forEach((text) => {
          const xCL = xx - text.x;
          const yCL = yy - text.y;
          const x = text.x;
          const xw = text.xw;
          const y = text.y;
          const yh = text.yh;
          if ((x < xx && xx < x + xw && y < yy && yy < y + yh)) {
            text.xClick = xCL;
            text.yClick = yCL;
            text.isDrag = true;
            overlap ++;
          };
        });
        textt.forEach((text) => {
          if (text.isDrag && overlap !== 1) {
            text.isDrag = false;
            overlap--;
          }
        })
      };
    });

    canvas.addEventListener("mousemove", (e) => {
      const xx = e.offsetX;
      const yy = e.offsetY;
      let noDrag = [];
      let reDraw = false;
      if (textt[textt.length - 1]) {
        textt.forEach((text) => {
          if (!text.isDrag) {
            noDrag.push(text);
          }
          if (text.isDrag) {
            reDraw = true;
            ctx.fillStyle = "#1273de";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            textCtx.fillStyle = "#fad0c3";
            textCtx.fillText(`${text.text}`, (xx - `${text.xClick}`), (yy - `${text.yClick}`));
          }
        });
      }
      if (reDraw) {
        noDrag.forEach((nd) => {
          textCtx.fillText(`${nd.text}`, `${nd.x}`, `${nd.y}`);
        });
      }
    });

    canvas.addEventListener("mouseup", (e) => {
      const xx = e.offsetX;
      const yy = e.offsetY;
      if (textt[textt.length - 1]) {
        textt.forEach((text) => {
          if (text.isDrag) {
            text.x = xx - text.xClick;
            text.y = yy - text.yClick;
            text.isDrag = false;
          }
          text.xClick = 0;
          text.xClick = 0;
        });
      }
    });

    textt.forEach((text) => {
      textCtx.fillText(`${text.text}`, `${text.x}`, `${text.y}`);
    });
  });
  return (
    <>
      <Spacer />
      <CanvasPracticeBlock>
        <canvas ref={canvasRef} width="300" height="200" />
      <Spacer />
        <input style={{textAlign: "center"}} ref={inputRef} placeholder="Add text here and ENTER" type="text" />
      </CanvasPracticeBlock>
      <Spacer />
      <Spacer />

    </>
  );
};

export default CanvasTesting;
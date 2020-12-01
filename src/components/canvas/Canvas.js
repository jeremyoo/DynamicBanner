import React, { useEffect, useRef } from "react";
import Responsive from "../common/Responsive";

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
}) => {
  const canvasRef = useRef();
  const canvas = canvasRef.current;

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
  }, [text, textHex, fontSize, fontStyle, canvasHex, canvasWidth, canvasHeight]);

  return (
    <>
      <CanvasBlock>
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
        <Spacer />
      </CanvasBlock>
    </>
  );
};

export default Canvas;


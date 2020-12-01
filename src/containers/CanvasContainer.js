import React from "react";
import { useSelector } from "react-redux";
import Canvas from "../components/canvas/Canvas";

const CanvasContainer = () => {
  const {
    text,
    fontStyle,
    fontSize,
    canvasWidth,
    canvasHeight,
    canvasHex,
    textHex,
  } = useSelector(({ input, palette }) => ({
    text: input.text,
    fontStyle: input.fontStyle,
    fontSize: input.fontSize,
    canvasWidth: input.canvasWidth,
    canvasHeight: input.canvasHeight,
    canvasHex: palette.canvas.hex,
    textHex: palette.text.hex,
  }));

  return (
    <>
      <Canvas
        text={text}
        fontStyle={fontStyle}
        fontSize={fontSize}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        canvasHex={canvasHex}
        textHex={textHex}
      />
    </>
  );
};

export default CanvasContainer;

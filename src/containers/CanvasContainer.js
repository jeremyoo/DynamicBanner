import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeText } from "../modules/input";
import Canvas from "../components/canvas/Canvas";

const CanvasContainer = ({ inputRef }) => {
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
  const dispatch = useDispatch();
  const initialize = useCallback(() => dispatch(initializeText()), [dispatch]);

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
        inputRef={inputRef}
        initialize={initialize}
      />
    </>
  );
};

export default CanvasContainer;

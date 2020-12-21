import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeText } from "../actions/inputActions";
import Canvas from "../components/canvas";

const CanvasContainer = ({ inputRef }) => {
  const {
    text,
    fontStyle,
    fontSize,
    canvasWidth,
    canvasHeight,
    backgroundHex,
    textHex,
  } = useSelector(({ inputReducer, paletteReducer }) => ({
    text: inputReducer.text,
    fontStyle: inputReducer.fontStyle,
    fontSize: inputReducer.fontSize,
    canvasWidth: inputReducer.canvasWidth,
    canvasHeight: inputReducer.canvasHeight,
    backgroundHex: paletteReducer.background.hex,
    textHex: paletteReducer.text.hex,
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
        backgroundHex={backgroundHex}
        textHex={textHex}
        inputRef={inputRef}
        initialize={initialize}
      />
    </>
  );
};

export default CanvasContainer;

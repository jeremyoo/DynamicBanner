import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeText, resetInput } from "../actions/inputActions";
import { resetColor } from "../actions/paletteActions";
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
  const resetI = useCallback(() => dispatch(resetInput()), [dispatch]);
  const resetC = useCallback(() => dispatch(resetColor()), [dispatch]);


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
        resetI={resetI}
        resetC={resetC}
      />
    </>
  );
};

export default CanvasContainer;

export const addText = (canvas, text, textHex, fontSize, fontStyle, textElement, setTextElement) => {
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
};

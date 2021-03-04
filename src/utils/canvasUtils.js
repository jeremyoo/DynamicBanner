export const canvasInitiate = (canvas, backgroundHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement) => {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = `${backgroundHex}`
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const textCtx = canvas.getContext("2d");
    textCtx.textAlign = "center";
    textCtx.textBaseline = "middle";
    textCtx.font = `${fontSize}px ${fontStyle}`;
    textCtx.fillStyle = `${textHex}`;
    textCtx.fillText(`${text}`, `${canvasWidth / 2}`, `${canvasHeight / 2}`);
    if (textElement[textElement.length - 1]) {
        textCtx.textAlign = "start";
        textCtx.textBaseline = "top";
        textElement.forEach((text) => {
          textCtx.fillStyle = `${text.color}`;
          textCtx.font = `${text.textHeight}px ${text.textStyle}`;
          textCtx.fillText(`${text.text}`, `${text.textX}`, `${text.textY}`);
        });
      }
    };

export const canvasMousedown = (canvas, textElement) => {
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
};

export const canvasMousemove = (canvas, backgroundHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement) => {
    const ctx = canvas.getContext("2d");
    const textCtx = canvas.getContext("2d");
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
                ctx.fillStyle = `${backgroundHex}`;
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
            const measureText = textCtx.measureText(text);
            const textWidth = Math.floor(measureText.width);
            const textHeight = parseInt(fontSize)
            const x = (canvas.width / 2) - (textWidth / 2);
            const y = (canvas.height / 2) - (textHeight / 2);
            textCtx.fillText(`${text}`, `${x}`, `${y}`);
          }
        });
    };

export const canvasMouseup = (canvas, textElement) => {
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
}

export const canvasTouchstart = (canvas, textElement) => {
  canvas.addEventListener("touchstart", (e) => {
    const xx = e.touches[0].pageX;
    const yy = e.touches[0].pageY - e.target.offsetTop;
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
  })
}

export const canvasTouchmove = (canvas, backgroundHex, fontSize, fontStyle, textHex, text, canvasWidth, canvasHeight, textElement) => {
  const ctx = canvas.getContext("2d");
  const textCtx = canvas.getContext("2d");
  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault()
    const xx = e.touches[0].pageX;
    const yy = e.touches[0].pageY - e.target.offsetTop;
    let noDrag = [];
    let reDraw = false;
    if (textElement[textElement.length - 1]) {
      textElement.forEach((element) => {
        if (!element.isDrag) {
          noDrag.push(element);
        }
        if (element.isDrag) {
          reDraw = true;
          ctx.fillStyle = `${backgroundHex}`;
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
}

export const canvasTouchend = (canvas, textElement) => {
  canvas.addEventListener("touchend", (e) => {
    const xx = e.changedTouches[0].pageX;
    const yy = e.changedTouches[0].pageY - e.target.offsetTop;;
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
}
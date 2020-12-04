import React, { useRef } from "react";
import Header from "./components/common/Header";
import CanvasContainer from "./containers/CanvasContainer";
import PaletteContainer from "./containers/PaletteContainer";
import ClientInputContainer from "./containers/ClientInputContainer";

const App = () => {
  const inputRef = useRef();
  const buttonRef = useRef();

  return (
    <>
      <Header />
      <CanvasContainer inputRef={inputRef} buttonRef={buttonRef} />
      <ClientInputContainer inputRef={inputRef} />
      <PaletteContainer />
    </>
  );
};

export default App;

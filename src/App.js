import React from "react";
import Header from "./components/common/Header";
import CanvasContainer from "./containers/CanvasContainer";
import PaletteContainer from "./containers/PaletteContainer";
import ClientInputContainer from "./containers/ClientInputContainer";
import CanvasTesting from "./components/canvas/CanvasTesting";

const App = () => {

  return (
    <>
      <Header />
      <CanvasContainer />
      <ClientInputContainer />
      <PaletteContainer />
      <CanvasTesting />
    </>
  );
};

export default App;

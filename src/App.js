import React from "react";
import Header from "./components/common/Header";
import CanvasContainer from "./containers/CanvasContainer";
import PaletteContainer from "./containers/PaletteContainer";
import ClientInputContainer from "./containers/ClientInputContainer";

const App = () => {

  return (
    <>
      <Header />
      <CanvasContainer />
      <ClientInputContainer />
      <PaletteContainer />
    </>
  );
};

export default App;

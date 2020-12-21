import React, { useRef } from "react";
import styled from 'styled-components';
import Layout from "./components/layout";
import CanvasContainer from "./containers/CanvasContainer";
// import PaletteContainer from "./containers/PaletteContainer";
// import SizeInputContainer from "./containers/SizeInputContainer";
// import TextInputContainer from "./containers/TextInputContainer";
// import FontInputContainer from "./containers/FontInputContainer";
// import TypeInputContainer from "./containers/TypeInputContainer";

const StyledMainContainer = styled.main``;

const StyledSectionContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

const App = () => {
  const inputRef = useRef();
  const buttonRef = useRef();

  return (
    <>
    <Layout>
      <StyledMainContainer>
        <StyledSectionContainer>
            <CanvasContainer inputRef={inputRef} buttonRef={buttonRef} />
              {/* <TextInputContainer inputRef={inputRef} />
              <SizeInputContainer />
              <FontInputContainer />
              <TypeInputContainer />
              <PaletteContainer /> */}
        </StyledSectionContainer>
      </StyledMainContainer>
    </Layout>
    </>
  );
};

export default App;

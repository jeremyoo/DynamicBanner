import React from "react";
import Nav from "./nav"
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return(
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledContent>
            <Nav />
            <div id="content">
              {children}
            </div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  )
};

export default Layout;

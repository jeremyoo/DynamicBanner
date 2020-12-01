import React from "react";
import Responsive from "./Responsive";
import styled from "styled-components";

const HeaderBlock = styled.div`
  position: fixed;
  height: 5rem;
  width: 100%;
  background: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: gray;
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 100;
`;

const Spacer = styled.div`
  height: 7rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Responsive>
          <Title>Dynamic Banner</Title>
        </Responsive>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;

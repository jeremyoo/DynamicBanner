import React from "react";
import styled from "styled-components";

const StyledNavBlock = styled.header`
  ${({ theme }) => theme.mixins.flexBetween}
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  padding: 0px 50px;
  height: 100px;
  background: var(--navy);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
    height: 80px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--teal);
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
    a {
      font-size: 2rem;
      color: var(--teal);
      &:hover,
      &:focus {
        color: var(--lightest-steel);
      }
      @media (max-width: 768px) {
        font-size: var(--ft-xxl);
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 10px;
    }
  }
`;



const Nav = () => {
  return (
    <>
      <StyledNavBlock>
        <StyledNav>
          <div className="logo">
            <a href="/">[Dynamic Banner]</a>
          </div>
          <StyledLinks>
            <ul>
              <li>About</li>
              <li>Example</li>
              <li>Github</li>
            </ul>
          </StyledLinks>
        </StyledNav>
      </StyledNavBlock>
    </>
  );
};

export default Nav;

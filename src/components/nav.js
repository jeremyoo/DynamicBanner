import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaPaintBrush } from "react-icons/fa";
import { useOnClickOutside } from "../hooks"
import Menu from "./menu";

const StyledNavBlock = styled.header`
  ${({ theme }) => theme.mixins.flexBetween}
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100vw;
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
      ${({ theme }) => theme.mixins.flexCenter};
      font-size: var(--ft-sm-heading);
      color: var(--teal);
      &:hover,
      &:focus {
        color: var(--lightest-steel);
      }
      @media (max-width: 768px) {
        font-size: var(--ft-xxl);
      }
      span {
        padding: 0 15px;
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
      font-size: var(--ft-sm);
      padding: 10px 20px;
    }
  }
`;

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [currentLink, setCurrentLink] = useState("");
  const onClickLink = (e) => {
    setMenuOpen(!menuOpen);
    // setCurrentLink(e.target.name);
  };

  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setMenuOpen(false));

  return (
    <>
      <StyledNavBlock>
        <StyledNav>
          <div className="logo">
            <a href="/">
              <FaPaintBrush size="35" /><span>DYMANIC BANNER</span>
            </a>
          </div>
          <StyledLinks>
            <ul>
              <li><a href="/menu/#about" name="about" onClick={onClickLink} >ABOUT</a></li>
              <li><a href="/menu/#example" name="example" onClick={onClickLink} >EXAMPLE</a></li>
              <li><a href="/menu/#contact" name="contact" onClick={onClickLink} >CONTACT</a></li>
            </ul>
          </StyledLinks>
        </StyledNav>
      </StyledNavBlock>
      <Menu menuOpen={menuOpen} menuRef={menuRef} />
    </>
  );
};

export default Nav;

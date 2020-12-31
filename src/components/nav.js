import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
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
  @media (max-width: 414px) {
    padding: 0 15px;
    height: 60px;
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
      span {
        padding: 0 15px;
      }
      @media (max-width: 768px) {
        font-size: var(--ft-xxl);
        .brushIcon {
          width: 30px;
          height: 30px;
        }
        span {
        padding: 0 10px;
        }
      }
      @media (max-width: 414px) {
        font-size: var(--ft-xl);
        .brushIcon {
          width: 25px;
          height: 25px;
        }
        span {
        padding: 0 7.5px;
        }
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
      cursor: pointer;
      font-size: var(--ft-sm);
      padding: 10px 15px;
    }
  }
`;

const MenuButton = styled.div`
  ${({ theme }) => theme.mixins.flexCenter };
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid var(--teal);
  cursor: pointer;
  transition: var(--transition);
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 414px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 320px) {
    width: 30px;
    height: 30px;
  }
  ${props => props.menuOpen && css`
    display: none;
  `}
`;

const Hamburger = styled.div`
  width: 20px;
  height: 2px;
  border-radius: 3px;
  background: var(--teal);
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 3px;
    background: var(--teal);
  }
  &::before {
    transform: translateY(-8px);
    @media (max-width: 414px) {
      transform: translateY(-7px);
    }
    @media (max-width: 320px) {
      transform: translateY(-6px);
    }
  }
  &::after {
    transform: translateY(8px);
    @media (max-width: 414px) {
      transform: translateY(7px);
    }
    @media (max-width: 320px) {
      transform: translateY(6px);
    }
  }
`;

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClickLink = () => {
    setMenuOpen(!menuOpen);
  };
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setMenuOpen(false));

  return (
    <>
      <StyledNavBlock>
        <StyledNav>
          <div className="logo">
            <a href="/">
              <FaPaintBrush className="brushIcon" size="35px" />
              <span>DYMANIC BANNER</span>
            </a>
          </div>
          <StyledLinks>
            <ul>
              <li name="about" onClick={onClickLink} >ABOUT</li>
              <li name="example" onClick={onClickLink} >EXAMPLE</li>
              <li name="contact" onClick={onClickLink} >CONTACT</li>
            </ul>
          </StyledLinks>
          <MenuButton menuOpen={menuOpen} onClick={onClickLink}>
            <Hamburger />
          </MenuButton>
        </StyledNav>
      </StyledNavBlock>
      <Menu menuOpen={menuOpen} menuRef={menuRef} onClickLink={onClickLink} MenuButton={MenuButton} />
    </>
  );
};

export default Nav;

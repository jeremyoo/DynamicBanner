import React, { useState, useRef, useEffect } from "react";
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
      font-size: var(--ft-heading);
      font-family: BauhausC;
      color: var(--teal);
      span {
        padding: 0 15px;
      }
      &:hover,
      &:focus,
      &:active {
        color: var(--white);
        .brushIcon {
          animation: spin 0.5s;
          animation-timing-function: var(--easing);
        }
        span {
          animation: jump 0.25s;
          animation-timing-function: var(--easing);
        }
        @media (max-width: 414px) {
        span {
          animation: none;
          }
        }
      }
      @media (max-width: 768px) {
        font-size: var(--ft-sm-heading);
        .brushIcon {
          width: 30px;
          height: 30px;
        }
        span {
        padding: 0 10px;
        }
      }
      @media (max-width: 414px) {
        font-size: var(--ft-xxl);
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
    .about {
      width: 50px;
    }
    .instructions {
      width: 104px;
    }
    .contact {
      width: 66px;
    }
    li {
      cursor: pointer;
      font-size: var(--ft-sm);
      text-transform: uppercase;
      margin: 10px 10px;
      &:hover,
      &:focus,
      &:active {
        font-weight: 600;
        color: var(--white);
        animation: jump 0.25s;
        animation-timing-function: var(--easing);
      }
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
  &:hover,
  &:focus,
  &:active {
    background: var(--teal-tint);
  }
  ${props => props.btnOpen && css`
    display: none;
  `}
`;

const Hamburger = styled.div`
  width: 20px;
  height: 2px;
  border-radius: 3px;
  background: var(--teal);
  pointer-events: none;
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
  const [btnOpen, setBtnOpen] = useState(false);
  const [btnClose, setBtnClose] = useState(false);
  const [menuTarget, setMenuTarget] = useState("");

  const onClickMenu = (e) => {
    setMenuOpen(!menuOpen);
    if (e.target.className) setMenuTarget(e.target.className);
  };

  const onClickClose = () => {
    setMenuOpen(!menuOpen);
    setMenuTarget("");
  }

  useEffect(() => {
    if (menuOpen) setTimeout(() => {setBtnOpen(true);}, 250); 
    if (menuOpen) setTimeout(() => {setBtnClose(true);}, 250);
    if (menuOpen) window.document.body.style.position = "fixed";
    if (!menuOpen) window.document.body.style.position = "relative";
  }, [menuOpen]);

  const menuRef = useRef();
  useOnClickOutside(menuRef, () => {
    setMenuOpen(false);
    setBtnOpen(false);
    setBtnClose(false);
    setTimeout(() => {setMenuTarget("");}, 250) 
  });

  return (
    <>
      <StyledNavBlock>
        <StyledNav>
          <div className="logo">
            <a href="/">
              <FaPaintBrush className="brushIcon" size="35px" />
              <span>Dynamic Banner</span>
            </a>
          </div>
          <StyledLinks>
            <ul>
              <li className="about" onClick={onClickMenu} >about</li>
              <li className="instructions" onClick={onClickMenu} >instructions</li>
              <li className="contact" onClick={onClickMenu} >contact</li>
            </ul>
          </StyledLinks>
          <MenuButton btnOpen={btnOpen} onClick={onClickMenu}>
            <Hamburger />
          </MenuButton>
        </StyledNav>
      </StyledNavBlock>
      <Menu
        menuOpen={menuOpen}
        btnOpen={btnOpen}
        btnClose={btnClose}
        menuRef={menuRef}
        menuTarget={menuTarget}
        onClickClose={onClickClose}
      />
    </>
  );
};

export default Nav;

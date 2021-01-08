import React, { useState, useEffect } from 'react';
import exampleVideo1 from '../static/video/exampleVideo1.mp4'
import exampleVideo2 from '../static/video/exampleVideo2.mp4'
import styled, { css } from 'styled-components';

const MenuBlock = styled.div`
    position: fixed;
    right: 0;
    width: 45%;
    height: 100vh;
    max-width: 600px;
    z-index: 100;
    background: rgba(2, 12, 27, 0.98);
    font-size: var(--ft-sm-heading);
    color: var(--white);
    transition: var(--transition);
    @media (max-width: 1080px) {
        width: 60%;
    };
    @media (max-width: 768px) {
        width: 80%;
    };
    @media (max-width: 414px) {
        width: 100%;
    };
    overflow-x: hidden;
    ${props => !props.menuOpen && css`
        transform: translateX(100%);
        pointer-events: none;
    `}
`;
const MenuContentBlock = styled.div`
    ${({theme}) => theme.mixins.flexCenter};
    flex-direction: column;
    position: relative;
    pointer-events: all;
    margin: 60px 20px 0;
    span {
        cursor: pointer;
        text-transform: uppercase;
    }
    @media (max-width: 768px) {
        margin: 50px 25px 0;
    }
    @media (max-width: 414px) {
        margin: 30px 30px 0;
    }
`;
const AboutBlock = styled.div`
    width: 90%;
    margin: 10px 0;
    .aboutContent {
        margin: 10px 5px;
        font-size: var(--ft-md);
    }
    ${props => props.openAbout ? css`
        div {
            transition: var(--transition);
            position: relative;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }`: css`
        div {
            position: fixed;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
    `}
`;
const InstructionBlock = styled.div`
    width: 90%;
    margin: 10px 0;
    .instructionContent {
        margin: 10px 5px;
        font-size: var(--ft-md);
        .methods {
            font-size: var(--ft-xl);
            margin: 10px 0;
            span {
                text-transform: none;
                padding: 0 10px;
                &::before {
                    font-size: calc(var(--ft-md)*0.98);
                    line-height: 5px;
                }
                :nth-child(1) { &::before { content: "1. "}}
                :nth-child(2) { &::before { content: "2. "}}
            }
        }
        video {
            width: 400px;
            @media (max-width: 768px) {
                width: 350px;
            }
            @media (max-width: 414px) {
                width: 275px;
            }
        }
    }
    ${props => props.openIntro ? css`
        div {
            transition: var(--transition);
            position: relative;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }`: css`
        div {
            position: fixed;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }`
    }
    ${props => props.methodSwitch === "create" ? css`
        .swtichC {
            transition: var(--transition);
            position: relative;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }`: css`
        .swtichC {
            position: fixed;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }`
    }
    ${props => props.methodSwitch === "layout" ? css`
        .swtichL {
            transition: var(--transition);
            position: relative;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }`: css`
        .swtichL {
            position: fixed;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }`
    }
`;
const ContactBlock = styled.div`
    width: 90%;
    margin: 10px 0;
    .contactContent {
        margin: 10px 5px;
        font-size: var(--ft-md);
    }
    ${props => props.openContact ? css`
        div {
            transition: var(--transition);
            position: relative;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }`: css`
        div {
            position: fixed;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }`
    }
`;
const CloseButtonBlock = styled.div`
    position: fixed;
    z-index: 110;
    transition: var(--transition);
    ${props => !props.btnClose && css`
        display: none;
    `}
    @media (min-width: 768px) {
        top: 20px;
        right: 40px;
    }
    @media (max-width: 768px) {
        top: 20px;
        right: 25px;
    }
    @media (max-width: 414px) {
        top: 12.5px;
        right: 15px;
    }
    @media (max-width: 320px) {
        top: 15px;
    }
`;
const CloseButton = styled.div`
  ${({ theme }) => theme.mixins.flexCenter };
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid var(--teal);
  cursor: pointer;
  transition: var(--transition);
  @media (max-width: 414px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 320px) {
    width: 30px;
    height: 30px;
  }
`;

const Menu = ({ menuOpen, btnClose, menuRef, menuTarget, onClickClose }) => {
    const [openAbout, setOpenAbout] = useState(false);
    const [openIntro, setOpenIntro] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const [methodSwitch, setMethodSwitch] = useState("");

    useEffect(() => {
        setOpenAbout(false); setOpenIntro(false); setOpenContact(false);
        setTimeout(() => {
            if (menuTarget === "about") setOpenAbout(true); 
            if (menuTarget === "instructions") setOpenIntro(true); setMethodSwitch("create");
            if (menuTarget === "contact") setOpenContact(true);
        }, 250)
    }, [menuTarget])

    const onClickContent = (e) => {
        if (e.target.className === "about") {setOpenAbout(!openAbout); setOpenIntro(false); setOpenContact(false);}
        if (e.target.className === "instructions") {
            setOpenIntro(!openIntro); setOpenAbout(false); setOpenContact(false); 
            if (openIntro) setMethodSwitch("");
            if (!openIntro) setMethodSwitch("create");
        }
        if (e.target.className === "contact") {
            setOpenContact(!openContact); setOpenIntro(false); setOpenAbout(false);}
            if (openIntro) setMethodSwitch("");
    }

    const onClickMethod = (e) => {
        console.log(e.target.className);
        setMethodSwitch(e.target.className);
    };

    return (
        <>
        <MenuBlock menuOpen={menuOpen} ref={menuRef}>
            <MenuContentBlock>
                <AboutBlock menuTarget={menuTarget} openAbout={openAbout}>
                    <span className="about" onClick={onClickContent}>about</span>
                    <div className="aboutContent">
                        Dynamic Banner helps you to create awsome banners quickly and easily.
                        You can adjust size of the banner, font-size, font-style, background-color,
                        font-color and more importantly, the position of each added text element. 
                        Combination of changing above aspects will offer you to express variety of creative designs.
                        Check videos and explanations on instructions section for more clear idea.
                    </div>
                </AboutBlock>
                <InstructionBlock menuTarget={menuTarget} openIntro={openIntro} methodSwitch={methodSwitch}>
                    <span className="instructions" onClick={onClickContent}>instructions</span>
                    <div className="instructionContent">
                        <div className="methods">
                            <span className="create" onClick={onClickMethod}>Creating</span>
                            <span className="layout" onClick={onClickMethod}>Positioning</span>
                        </div>
                        <div className="videos">
                            <video className="swtichC" autoplay muted src={exampleVideo1}/>
                            <video className="swtichL" autoplay muted src={exampleVideo2}/>
                        </div>
                        <div className="explanation">
                            <div className="swtichC">
                                create, create, create, create, create, create, create, create, create. create, create, create, create, create, create, create, create, create.
                            </div>
                            <div className="swtichL">
                                layout, layout, layout, layout, layout, layout, layout, layout, layout. layout, layout, layout, layout, layout, layout, layout, layout, layout.
                            </div>
                        </div>
                    </div>
                </InstructionBlock>
                <ContactBlock menuTarget={menuTarget} openContact={openContact}>
                    <span className="contact" onClick={onClickContent}>contact</span>
                    <div className="contactContent">
                        <span>github page</span>
                        <span>fortpolio website</span>
                        <span><a href="mailto:jyyoo824@gmail.comm">jyyoo824@gmail.com</a></span>
                    </div>
                </ContactBlock>
            </MenuContentBlock>
        </MenuBlock>
        <CloseButtonBlock btnClose={btnClose} onClick={onClickClose}>
            <CloseButton>
            </CloseButton>
        </CloseButtonBlock>
        </>
    )
};

export default Menu;
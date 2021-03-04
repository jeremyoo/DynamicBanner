import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { SiGithub, SiGmail } from "react-icons/si";
import exampleVideo1 from '../static/video/exampleVideo1.mp4'
import exampleVideo2 from '../static/video/exampleVideo2.mp4'

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
    margin: 60px 20px;
    span {
        cursor: pointer;
        text-transform: uppercase;
    }
    @media (max-width: 768px) {
        margin: 40px 25px 0;
    }
    @media (max-width: 414px) {
        margin: 25px 30px 0;
    }
`;
const AboutBlock = styled.div`
    width: 90%;
    margin: 10px 0;
    .aboutContent {
        margin: 15px 5px;
        font-size: var(--ft-md);
    }
    div {
        color: var(--white);
        transform: translateY(5%);
    }
    ${props => props.openAbout ? css`
        span {
            color: var(--teal);
            text-shadow: var(--lightestest-navy) 2.5px 2.5px;
        }
        div {
            transition: var(--transition);
            transform: translateY(0);
            position: relative;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }`: css`
        span {
            &:hover {
                color: var(--bright-white);
                text-shadow: var(--lightestest-navy) 2.5px 2.5px;
            }
        }
        div {
            position: fixed;
            top: -50%;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
    `}
`;
const InstructionBlock = styled.div`
    width: 90%;
    margin: 10px 0;
    @media (max-width: 414px) {
        margin: 0;
    }
    .instructionContent {
        margin: 10px 5px;
        font-size: var(--ft-md);
        color: var(--white);
        .methods {
            color: var(--lightestest-navy);
            font-size: var(--ft-xl);
            margin-top: 10px;
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
        .explanation {
            padding: 7.5px 0;
            font-size: var(--ft-sm);
        }
        .videos {
            margin: 10px 0;
        }
        video {
            background: var(--light-navy);
            width: 400px;
            @media (max-width: 768px) {
                width: 350px;
            }
            @media (max-width: 414px) {
                width: 275px;
            }
        }
    }
    .instructionContent {
        transform: translateY(5%);
    }
    ${props => props.openIntro ? css`
        .instructions {
                color: var(--teal);
                text-shadow: var(--lightestest-navy) 2.5px 2.5px;
            }
        .instructionContent {
                transition: var(--transition);
                transform: translateY(0);
                position: relative;
                opacity: 1;
                visibility: visible;
                pointer-events: all;
            }`: css`
        .instructions {
            &:hover {
                color: var(--bright-white);
                text-shadow: var(--lightestest-navy) 2.5px 2.5px;
            }
        }
        .instructionContent {
            position: fixed;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }`
    }
    ${props => props.methodSwitch === "create" ? css`
        .create {
            color: var(--teal);
            text-shadow: var(--lightestest-navy) 2px 2px;
        }
        .layout {
            &:hover,
            &:focus,
            &:active {
                color: var(--white);
                text-shadow: var(--lightestest-navy) 2px 2px;
            }
        }
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
        .layout {
            color: var(--teal);
            text-shadow: var(--lightestest-navy) 2px 2px;
        }
        .create {
            &:hover,
            &:focus,
            &:active {
                color: var(--white);
                text-shadow: var(--lightestest-navy) 2px 2px;
            }
        }
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
    .contactWord {
        margin: 15px 0;
    }
    .contactIcon {
        display: flex;
        justify-content: flex-end;
        margin: 0 10px;
        span {
            padding: 0 5px;
        }
    }
    .githubIcon,
    .gmailLogo {
        &:hover,
        &:focus,
        &:active {
            color: var(--bright-white);
            animation: spin 0.5s;
            animation-timing-function: var(--easing);
        }
    }
    div {
        color: var(--white);
        transform: translateY(5%);
    }
    ${props => props.openContact ? css`
        span {
            color: var(--teal);
            text-shadow: var(--lightestest-navy) 2.5px 2.5px;
        }
        div {
            transition: var(--transition);
            transform: translateY(0);
            position: relative;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }`: css`
        span {
            &:hover {
                color: var(--bright-white);
                text-shadow: var(--lightestest-navy) 2.5px 2.5px;
            }
        }
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
    .closeSymbol {
        position: absolute;
        right: 0;
        top: 0;
        :before,
        :after {
            position: absolute;
            content: "";
            top: 1px;
            right: 18px;
            width: 1px;
            height: 36px;
            background: var(--teal);
            @media (max-width: 414px) {
                top: 0;
                right: 16px;
                height: 34px;
            }
        }
        :before {
            transform: rotate(45deg);
        }
        :after {
            transform: rotate(-45deg);
        }
    }
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
        setMethodSwitch(e.target.className);
    };

    return (
        <>
        <MenuBlock menuOpen={menuOpen} ref={menuRef}>
            <MenuContentBlock>
                <AboutBlock menuTarget={menuTarget} openAbout={openAbout}>
                    <span className="about" onClick={onClickContent}>about</span>
                    <div className="aboutContent">
                        Dynamic Banner helps you to create awesome banners quickly and easily. 
                        You can adjust the size of the banner, font-size, font-style, background colour, font colour as well as the position of each added text. 
                        Playing with different combinations will allow to create a variety of fun designs for your banner. 
                        Please check the ‘Instructions’ section to see how!
                    </div>
                </AboutBlock>
                <InstructionBlock menuTarget={menuTarget} openIntro={openIntro} methodSwitch={methodSwitch}>
                    <span className="instructions" onClick={onClickContent}>instructions</span>
                    <div className="instructionContent">
                        <div className="methods">
                            <span className="create" onClick={onClickMethod}>Creating</span>
                            <span className="layout" onClick={onClickMethod}>Positioning</span>
                        </div>
                        <div className="explanation">
                            <div className="swtichC">
                                The following video demonstrates how to start creating your banner. You need to press 'Add Text' button in order to be able to change the position of the banner element.
                            </div>
                            <div className="swtichL">
                                Once you have entered your text, you can change their position. Simply press the ‘Add Text’ button and drag each word to your desired place. Have fun being creative! 
                            </div>
                        </div>
                        <div className="videos">
                            <video className="swtichC" controls muted src={exampleVideo1}/>
                            <video className="swtichL" controls muted src={exampleVideo2}/>
                        </div>
                    </div>
                </InstructionBlock>
                <ContactBlock menuTarget={menuTarget} openContact={openContact}>
                    <span className="contact" onClick={onClickContent}>contact</span>
                    <div className="contactContent">
                        <div className="contactWord">
                            Please contact me through email or the github link down below for any feature requests, advice, questions or even just to say hi! You are always welcome!
                        </div>
                        <div className="contactIcon">
                            <span>
                                <a href="mailto:jyyoo824@gmail.comm">
                                    <SiGmail className="gmailLogo" size="45px" />
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/jeremyoo/BannerCreator" target="blank">
                                    <SiGithub className="githubIcon" size="45px" />    
                                </a>
                            </span>
                        </div>
                    </div>
                </ContactBlock>
            </MenuContentBlock>
        </MenuBlock>
        <CloseButtonBlock btnClose={btnClose} onClick={onClickClose}>
            <CloseButton>
                <div className="closeSymbol" />
            </CloseButton>
        </CloseButtonBlock>
        </>
    )
};

export default Menu;
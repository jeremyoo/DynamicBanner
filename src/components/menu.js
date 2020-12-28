import React from 'react';
import styled, { css } from 'styled-components';

const MenuBlock = styled.div`
    position: fixed;
    right: 0;
    width: 45%;
    height: 100vh;
    z-index: 200;
    background: rgba(2, 12, 27, 0.98);
    font-size: var(--ft-sm-heading);
    color: var(--white);
    transition: var(--transition);
    @media (max-width: 1080px) {
        width: 60%;
    };
    @media (max-width: 768px) {
        width: 70%;
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
    margin-top: 20px;
`;
const AboutBlock = styled.div`
    width: 90%;
    margin: 15px 0;
    .aboutContent {
        margin: 10px 5px;
        font-size: var(--ft-md)
    }
`;
const ExampleBlock = styled.div`
    width: 90%;
    margin: 20px 0;
    .exampleContent {
        margin: 10px 5px;
        width: 400px;
        height: 250px;
        background: var(--lightest-navy);
    }
`;
const ContactBlock = styled.div`
    width: 90%;
    margin: 20px 0;
    .contactContent {
        margin: 10px 5px;
        font-size: var(--ft-md)
    }
`;


const Menu = ({ menuOpen, menuRef }) => {

    return (
        <MenuBlock menuOpen={menuOpen} ref={menuRef}>
            <MenuContentBlock>
                <AboutBlock>
                    <div>
                        <a href="/menu/#about">ABOUT</a>
                    </div>
                    <div className="aboutContent">
                        Dynamic Banner will help you to create awsome banners quickly and easily.
                        You can adjust size of the banner, font-size, font-style, background-color,
                        font-color and more importantly, the position of each added text element.
                    </div>
                </AboutBlock>
                <ExampleBlock>
                    <div>
                        <a href="/menu/#example">EXAMPLE</a>
                    </div>
                    <div className="exampleContent"></div>
                </ExampleBlock>
                <ContactBlock>
                    <div>
                        <a href="/menu/#contact">CONTACT</a>
                    </div>
                    <div className="contactContent">
                        <div>github page</div>
                        <div>fortpolio website</div>
                        <div>jyyoo824@gmail.com</div>
                    </div>
                </ContactBlock>
            </MenuContentBlock>
        </MenuBlock>
    )
};

export default Menu;
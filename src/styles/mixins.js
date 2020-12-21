import { css } from 'styled-components';

const mixins = {
    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    epicSides: css`
        position: relative;
        z-index: 1;
        &:before {
            position: absolute;
            content: "";
            display: block;
            top: 0;
            left: -5000px;
            height: 100%;
            width: 10000px;
            z-index: -1;
            @content;
        }
    `,
};

export default mixins;
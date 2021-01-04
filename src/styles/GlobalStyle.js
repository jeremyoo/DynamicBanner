import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --dark-navy: #020d1f;
    --navy: #0a192f;
    --light-navy: #172a45;
    --lightest-navy: #303C55;
    --lightestest-navy: #56678a;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --steel: #848ead;
    --light-steel: #a4afce;
    --lightest-steel: #d0dbff;
    --white: #e4f0ff;
    --bright-white: #f7fbff;
    --teal: #64FAC8;
    --dark-teal: #14cc8f;
    --darkest-teal: #12a171;
    --teal-tint: rgba(100, 250, 200, 0.1);
    --reddish: #fa6464;
    --dark-reddish: #d65858;
    --darkest-reddish: #aa4545;
    --bluish: #647afa;
    --dark-bluish: #5669d6;
    --darkest-bluish: #4756ad;

    --ft-xs: 0.75rem;
    --ft-sm: 0.875rem;
    --ft-md: 1rem;
    --ft-lg: 1.125rem;
    --ft-xl: 1.25rem;
    --ft-xxl: 1.5rem;
    --ft-sm-heading: 1.75rem;
    --ft-heading: 2rem;

    --border-radius: 0.25rem;

    --easing: cubic-bezier(0.65, 0, 0.35, 1);
    --transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100vw;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--steel);
    color: var(--light-steel);
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    background-color: var(--navy);
    color: var(--steel);
    font-family: sans-serif;
    font-size: var(--ft-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--ft-lg);
    }
  };

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 0 150px;

    @media (max-width: 1080px) {
      padding: 0 100px;
    }
    @media (max-width: 768px) {
      padding: 0px 50px;
    }
    @media (max-width: 480px) {
      padding: 0px 25px;
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0 0;
    max-width: 1000px;
    
      @media (max-width: 768px) {
        padding: 80px 0 0;
      }
      @media (max-width: 480px) {
        padding: 60px 0 0;
      }
    }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
  }

  input {
    display: inline-block;
    border: 0;
    outline: 0;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none; 
      margin: 0; 
    }
  }

  select {
    display: inline-block;
    border: 0;
    outline: 0;
  }
`;

export default GlobalStyle;
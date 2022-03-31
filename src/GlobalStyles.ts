import { bg } from 'assets/images';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      align-items: center;
      background-color: ${({ theme }) => theme.colors.background};
      background-image: url(${bg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      font-family: 'Roboto', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      height: 100vh;
      justify-content: center;
      margin: 0;
      margin: 0;
      transition: background-color 300ms ease-in-out;
      width: 100%;
      color: ${({ theme: { colors } }) => colors.text};
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    h1 {
      display: block;
      font-size: 2em;
    }

    h2 {
      font-family: 'Roboto-bold';
      font-size: 24px;
      font-style: normal;
      letter-spacing: 0em;
      line-height: 28px;
      text-align: left;
    }

    h3 {
      font-family: 'Roboto-bold';
      font-size: 20px;
      font-style: normal;
      letter-spacing: 0em;
      line-height: 23px;
      text-align: left;
    }

    h4 {      
      font-family: 'Roboto';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      line-height: 19px;
      text-align: left;
    }

    p {
      line-height: 22px;
      margin: 0 0 25px 0;
    }
`;

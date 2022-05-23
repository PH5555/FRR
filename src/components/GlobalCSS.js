import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  * {
    font-family: "Arial", sans-serif;
    box-sizing: border-box;
    color: #ffffff;
  }

  html {
    font-size: 14px;
    font-weight: 400;
    height: 100%;
  }

  body {
    max-width: 1920px;
    margin: auto;
    font-size: 14px;
    font-weight: 400;
    background-color: #000000;
    color: #ffffff;
  }
`
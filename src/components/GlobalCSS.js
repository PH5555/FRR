import {createGlobalStyle} from "styled-components";

export const GlobalCSS = createGlobalStyle`
  * {
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
    font-size: 16px;
    font-weight: 500;
    background-color: #000000;
    color: #ffffff;
  }
`
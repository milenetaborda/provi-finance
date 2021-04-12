import {  createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F3FA;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    } 
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiesed;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
  }
  
  button {
    cursor: pointer; 
  }

`;
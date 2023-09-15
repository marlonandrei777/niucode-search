import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

   html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${(props) => props.theme["gray-100"]};
    color: ${(props) => props.theme["gray-400"]}; /* cor de texto padrão */
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font: 400 1rem "DM Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

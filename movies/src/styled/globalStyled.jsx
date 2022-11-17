import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({theme}) =>{
        return theme.colors.background
    }};
    font-family: ${({theme}) =>{
      return theme.fonts.secundary
    }};
  }
`;

export const theme = {
    colors:{
      primary: '#FA5529',
      darkPrimary: '#E04D24',
      background: '#2C2C2A',
      darkBackground:'#1a1a1a'
    },
    fonts:{
      primary:"'Fragment Mono', monospace",
      secundary: "'Inter', sans-serif"
      
    }
  }
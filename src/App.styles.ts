
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-color: #363636;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
   * {
     font-family: 'helvetica';
     border-sizing: border-box;
   }
`

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   > p {
     color: #fff;
   }
   .score {
     color: #dedede;
     font-size: 18px;
     margin: 0;
   }
   h1 {
     font-size: 30px;
     color: #dedede
   }

   .start, .next {
     cursor: pointer;
     background-color: pink;
     color: #363636;
     border-color: 1px solid black;
     height: 40px;
     width: 90px;
     margin: 20px 0px;
   }
`


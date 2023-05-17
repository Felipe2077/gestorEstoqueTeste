// globalStyles.js
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Inter', sans-serif;

}  
  body {
    max-width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    background-color: #EEE;
    box-shadow: inset 0 -440px #002837;    

  }
`;

export default GlobalStyle;
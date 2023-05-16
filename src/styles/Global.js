// globalStyles.js
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Inter', sans-serif;

}  
  body {
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    background-color: #D9D9D9;
  }
`;

export default GlobalStyle;
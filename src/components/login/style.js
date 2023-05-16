import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 600px;
  height: 819px;
  background-color: #FEFEFE;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin-top: 53px;
    width: 388px;
  }
  `;

export const InputForm = styled.input`

background: transparent;
border-radius: 5px;
border: 2px solid #D9D9D9;
width: 394px;
height: 55px;
margin-top: 16px;
margin-bottom: 30px;
outline: none;
padding-left: 20px;
box-sizing: border-box;
color: #6D6D6D;
font-weight: 600;
font-size: 15px;
`;

export const Line = styled.div`
    width: 381px;
    height: 2px;
    background-color: #D9D9D9;
    margin-top: 10px;
    margin-bottom: 40px;
`;


export const InputLogin = styled.button`
  background: #009DDA;
  border-radius: 5px;
  border: none;
  width: 394px;
  height: 55px;
  font-weight: 600;

`;

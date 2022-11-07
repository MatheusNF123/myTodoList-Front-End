import styled from "styled-components";

export const Container = styled.header`
box-sizing: border-box;
  width: 100%;
  font-weight: bold;
  border-bottom: 2px solid #797A81;
  margin-bottom: 10px;
  height: 80px;
  display: flex;
  align-items: center;

  h1{
    text-align: center;
    margin-top: 0px;
    margin: 0px;
    text-align: center;
    width: 100%;
  }
  
`

export const ButtonMenuMobile = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff49;
  display: none;
  
  :hover{
    background-color: #ffffff65;
  }

  @media only screen and (max-width: 850px){   
    display: flex;
   }
`;
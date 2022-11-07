import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow-x: auto;
  background-color: #1c1c27;
  padding: 10px; 
  border-radius: 10px;
  height: 100%;
`;

export const AreaInputAndMenu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;



export const addTask = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 50px;
  overflow: hidden;
  align-items: center;
  width: 100%;

  :hover{
    background-color: #1c1c27;
  }


  input{
    border: none;
    width: 100%;
    outline: none;
    padding: 8px;
    background-color: transparent;
    color: white;
    font-size: 18px;
    
  }

  button{
    border: none;
    border-radius: 50px;
    color: #fff;
    padding: 4px 10px;
    width: 100px;
    height: 55px;
    background-color: transparent;
    background: #0a122b;
    border-left: 1px solid white;
    font-size: 16px;
    font-weight: bold;
    transition: .2s
  }
  button:hover{
    background-color: #003100
  }


  .image{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
  }

  @media only screen and (max-width: 700px){
    max-width: 100%;
    min-width: 700px;
  }
`
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  width: 100%;
 
`;

export const addTask = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin-bottom: 20px;
  overflow: hidden;

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
`
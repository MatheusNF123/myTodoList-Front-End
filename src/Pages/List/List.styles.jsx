import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const addTask = styled.div`
  display: flex;
  border: 1px solid #ccc;
  /* padding: 4px; */
  border-radius: 50px;
  margin-bottom: 20px;
  overflow: hidden;


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
    transition: .4s
  }
  button:hover{
    background-color: #005a00
  }

  .image{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
  }
`
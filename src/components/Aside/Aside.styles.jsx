import styled from "styled-components";

export const Container = styled.aside`
 border: 2px solid black;
  padding: 5px;
 
`;

export const AreaInput = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #2b2b2b;
  margin-bottom: 10px;
`;

export const DivInput = styled.div`
   display: flex;
   width: 100%;
   align-items: center;
   background-color: #1a1d30;
   padding: 10px;
   border-radius: 5px;
   height: 18px;
   border: 1px solid transparent;
  margin-bottom: 5px;
   /* :active, :focus{
    border: 1px solid #28315c;
  } */
`;

export const InputText = styled.input`
  width: 100%;  
  font-size: 18px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #bbb8b8;
 

  /* :active, :focus{
    border: 1px solid #28315c;
  } */
`;

export const buttonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #a3a3a3;
  font-size: 20px;
  padding: 5px;
  
  :hover{
    border-radius: 20px;
    background-color: #a3a3a31f;
  }
  :active{
    background-color: #cccccc1f;
  }
`;


export const AreaListTask = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
`;
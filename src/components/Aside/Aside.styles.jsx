import styled from "styled-components";

export const Container = styled.aside`
 border: 2px solid black;

 
`;

export const Area = styled.section`
  height: 100% ;
  display: flex;
  justify-content: center
`;

export const Input = styled.input`
margin-top: 10px;
  width: 85%;
  height: 18px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border-bottom: 2px solid white;
  border: 1px solid black;
  outline: none;
  background-color: #1a1d30;
  color: #bbb8b8;
  border-radius: 5px;

  :active, :focus{
    border: 1px solid #28315c;
  }
`;
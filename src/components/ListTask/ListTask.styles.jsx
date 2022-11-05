import styled from "styled-components";

export const ContentListTask = styled.div`
  display: flex;
  padding: 5px;
  width: 100%;
  align-items: center;
  transition: .2s;

  :hover{
    background-color: #3c3c3c1a;
  }
  :active{
    background-color: #3c3c3c37;
  }
`;

export const divImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 5px;
`;

export const img = styled.img`
  width: 100%;

`;

export const h3 = styled.h3`
  font-weight: 500;
  
`;
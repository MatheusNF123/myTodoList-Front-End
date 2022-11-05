import styled from "styled-components";

export const ContentListTask = styled.button(({idFolder, id}) => (
  `
  display: flex;
  padding: 5px;
  width: 100%;
  align-items: center;
  border-radius: 5px;
  border: none;
  border-left: ${id === idFolder ?  '2px solid #8c8d96' : 'none'};
  border-bottom: 1px solid #52525253;
  border-top: 1px solid #52525253;
  margin-bottom: 5px;
  background-color: #2b2d36;
  cursor: pointer;

  :hover{
    background-color: #3c3c3c1a;
    border-left: 2px solid #303d75;
  }
  :active{
    background-color: #3c3c3c37;
    border-left: 2px solid #8c8d96;
  }
`
))

export const divImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const img = styled.img`
  width: 100%;

`;

export const h3 = styled.h3`
  font-weight: 500;
  color: white;
  
`;
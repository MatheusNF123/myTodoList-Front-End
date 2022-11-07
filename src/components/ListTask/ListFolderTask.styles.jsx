import styled from "styled-components";

export const divContainer = styled.div(({idFolder, id}) => (
  `
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  background-color: ${ id === idFolder ? '#222533' : '#191b24'};
  border-left: ${id === idFolder ?  '3px solid #8c8d96' : 'none'};
  cursor: pointer;
  padding-right: 5px;
  margin-bottom: 5px;
  :hover{
    background-color: #222533;
    border-left: 2px solid #fff;
  }

  :hover ${DeleteInput} {
    visibility: visible;
    
  }
`
))

export const ContentListTask = styled.button `
  display: flex;
  padding: 5px;
  width: 100%;
  align-items: center;
  border: none;  
  background-color: transparent;
  border-radius: 5px;
  :active{
    background-color: #3c3c3c37;
    border-left: 2px solid #fff;
  }

`

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
  overflow: hidden;
  text-align: start;
  width: 100%;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
  
`;

export const DeleteInput = styled.div`
display: flex;
font-size: 20px;
color: #535353;
visibility: hidden;
z-index: 10;
:hover{
  color: white;
}
;
`;
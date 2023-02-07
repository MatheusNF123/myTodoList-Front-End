import styled from "styled-components"

export const btnModal = styled.div`
    
    margin-left: 5px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.children === "Excluir" ? "#21A641" : '#c92e3d' };
    color: white;
    padding: 6px;
    border: none;
    font-size: 14px;
    border-radius: 2px;
    font-weight: bold;
    box-shadow: 2px 2px 2px #00000037;
    cursor: pointer;

    :hover{
      background-color: ${props => props.children === "Excluir" ? "#24b947" : '#da3243' };
    }
  

`
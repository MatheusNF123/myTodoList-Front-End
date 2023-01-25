import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px; 

  h4{
    background-color: #2ECC71;
    padding: 20px 20px;
    color: #FFF;
    text-shadow: 1px 1px 1px black;
    font-size: 18px;
    box-shadow: 1px 1px 5px #0000007a;
    border-radius: 5px;
    transition-duration: .3s;
    transform: ${props => props.registerComSucesso ? 'translateY(-100px)':'translateY(0px)'}
  }
`;

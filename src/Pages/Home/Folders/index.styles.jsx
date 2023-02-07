import styled from "styled-components";

export const Container = styled.aside(({menuOpen}) => (
  `
 border: 2px solid #1e212e;
  padding: 5px;
  border-radius: 5px;
  background-color: #191b24;
  box-shadow: 0px 0px 10px #101218b7;
  min-width: 350px;
  height: 100%;
  overflow: auto;
  transition: .2s;

  ::-webkit-scrollbar-track {
    background-color: #222330;
}
::-webkit-scrollbar {
    width: 6px;
    background: #222330;
}
::-webkit-scrollbar-thumb {
    background: #7c81a8;
}
  ::-moz-scrollbar-track {
    background-color: #222330;
}
::-moz-scrollbar {
    width: 6px;
    background: #222330;
}
::-moz-scrollbar-thumb {
    background: #7c81a8;
}
  @media only screen and (max-width: 850px){
   
  position: absolute;
  z-index: 30;
  height: 88%;
  width: 350px;
  transform: ${menuOpen ? 'translateX(0)' : 'translateX(-350px)'};
  }

`
))

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
   padding: 10px;
   border-radius: 5px;
   height: 40px;
  margin-bottom: 5px;
  

  border: 1px solid #28315c;
  :hover{
    background-color: #1f1f2c
  }

  .form-field-folder-name{
    width: 100%;  
  font-size: 18px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #bbb8b8;
  height: 20px;

  ::placeholder {
    color: ${props => props.err || props.message ? "#850000" : ''};
    font-size: 14px;
  }
}
  
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
`;
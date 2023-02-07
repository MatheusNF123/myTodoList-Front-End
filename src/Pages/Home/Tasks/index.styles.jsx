import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow-x: auto;
  background-color: #181820;
  padding: 10px; 
  border-radius: 10px;
  height: 100%;
`;

export const AreaInputAndMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0px;
  height: 90px;


  .form-error-name{
  color: #850000;
  margin-left: 10px;
  font-size: 14px;
  
}
`;



export const addTask = styled.div`
  display: flex;
  border: 1px solid ${props => props.edit ? 'rgba(55, 255, 20, 0.589)' : '#ccc'};
  transition: .4s;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;

  :hover{
    background-color: #1c1c27;
  }


  button{
    border: none;
    border-radius: 10px;
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

  @media only screen and (max-width: 700px){
    max-width: 100%;
    min-width: 700px;
  }

.form-field-name{
  border: none;
  width: 100%;
  outline: none;
  padding: 8px;
  background-color: transparent;
  color: white;
  font-size: 18px;
}

`

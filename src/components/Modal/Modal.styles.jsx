import styled from "styled-components"

export const ContainerMoal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000037;
  position: fixed;
  top: 0;
  left: 0;
  transition: .2s;
  display: ${props => props.show ? 'flex' : "none"};
  justify-content: center;
  align-items: center;

`

export const DivAreaButtonModal = styled.div`
  display: flex;
  padding: 5px 10px 10px 10px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

`

export const CardModal = styled.div`
  background-color: #f0f0f0;
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  width: 280px;
  flex-wrap: wrap;
  overflow: hidden;

  .divTitle{
    padding: 10px;
    background-color:#b32937;
    display: flex;
    justify-content: flex-start;
    color: white;
    font-weight: bold;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .divInfo{
    color: initial;
    display: flex;
    padding: 10px;
   text-align: start;
   line-height: 18px;
   font-size: 14px;
  }



`
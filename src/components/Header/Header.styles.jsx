import styled from "styled-components";

export const Container = styled.header`
box-sizing: border-box;
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #191b24;

  h1{
    text-align: center;
    margin-top: 0px;
    margin: 0px;
    text-align: center;
    display: flex;
    justify-content:center;
    align-items: center;
  }

  @media only screen and (max-width: 1200px){ 
    h1{
      font-size: 25px;
    }
   }
    
   @media only screen and (max-width: 700px){   
  h1{
    font-size: 20px;
  }

  @media only screen and (max-width: 600px){   
  h1{
    width: 100%;
  }

}

}
  
`

export const DivArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ButtonMenuMobile = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff49;
  display: flex;
  transform: translateX(-50px);
  transition: .2s;

  :hover{
    background-color: #ffffff65;
  }

  @media only screen and (max-width: 850px){   
  transform: translateX(0px);
   }
`;

export const divPerfil = styled.div`
  display: flex;
  align-items: center;
   margin-right: 20px;
   overflow: hidden;
   width: 200px;
  span{
    
  }

  .iconPerfil{
    font-size: 30px;
    font-weight: 400;
    margin-right: 8px;
  }

  @media only screen and (max-width: 600px){   
  display: none;

}
`;


export const ButtonSair = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
   width: 100px;
   height: 50px;
   background-color: transparent;
   color: white;
   border: none;
   border-radius: 10px;
   background-color: #222230;
   transition: .1s;

   :hover{
    transform: scale(1.1);
    background-color: #ffffff22;
    
   }
   :active{
    background-color: #ffffff53;
   }

   margin-right: 10px;;
  span{
    margin-right: 10px;
    font-weight: bold;
    font-size: 14px;    
  }

  .iconSair{
    font-size: 22px;
  }
`;
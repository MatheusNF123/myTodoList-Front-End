import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;


  @media only screen and (max-width: 800px){    
 flex-direction: column;
}
  
`

export const AreaForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
  width: 100%;
  flex-direction: column;


  h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #6069a1;
    /* margin-bottom: 50px; */

  }

  .form-register{
     width: 50%;
    
  }
  .form-link-register{
    color: #4491f5;
  }

  @media only screen and (max-width: 1000px){    
  h1{
    font-size: 24px;
  }  
}

@media only screen and (max-width: 800px){   
  height: 100%;

}
@media only screen and (max-width: 600px){   
  h1{
    font-size: 22px;
  }

}

`
export const AreaImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3FB7AB;
  width: 100%;

  div{
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 30px;
  }
  img{
    width: 100%
  }

  @media only screen and (max-width: 800px){    
    
 div{
  width: 250px;
 }
 img{
    margin: 50px;
  }
}

`

export const DivRegisterFormGroup = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;


  .form-field{
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #a5a5a5;
    padding: 10px;
    width: 100%;
    margin-bottom: 8px;
    font-size: 20px;
    border-radius: 5px;
    

    :active{
      outline: none;
      border: none;
      border-bottom: 1px solid black;
    }
    :focus{
      outline: none;
      border: none;
      border-bottom: 1px solid #a5a5a5;
    }

    ::placeholder{
      color: #a5a5a5
    }

    :hover{
      background-color: #b4b4b420
    }
  }

  .form-error{
    color: #c40000;
    font-size: 12px;
  }

`



export const ButtonCadastro = styled.button`
  display: flex;
  background-color: #4491f5;
  width: 100%;
  padding: 12px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  color: #dddddd;
  border: none;
  border-radius: 5px;
  margin-bottom: 25px;
  margin-top: 30px;
  box-shadow: 0px 5px 6px 0px #b4b4b4;

  :hover{
    background-color: #5195ee;
  }

  :active{
    background-color: #2d78da;
  }
`
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
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #6069a1;
    margin-bottom: 40px;
  }

  .form{
    width: 50%;
  }
  @media only screen and (max-width: 800px){
    h1{    
      margin-bottom: 0px;
    height: 100px;
    font-size: 20px;
  }   
  }

  @media only screen and (max-width: 1000px){
    height: 100%;
    h1{

      font-size: 25px;    
    }
  }

.form-span-inscrever{
  color: #303030;
  font-size: 16px;
}

.form-link-inscrever{
  color: #4491f5

}



`
export const AreaImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e4577;
  width: 100%;
  flex-direction: column;

  h1{
    width: 100%;
    
    text-align: center;
    font-size: 60px;
    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  div{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 30px;
  }
  img{
    width: 100%;
    border-radius: 30px;
  }

  @media only screen and (max-width: 1000px){
    div{
      width: 250px;
    }
   
    img{
    margin: 50px;
  }
  }
  

`

export const DivLoginFormGroup = styled.div`
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
    font-size: 18px;
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

export const DivFormRedefinir = styled.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .form-redefinir{
    color: #4491f5;
    justify-content: flex-end;
    text-decoration: none;

    
  }
`

export const ButtonLogin = styled.button`
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
  box-shadow: 0px 5px 6px 0px #b4b4b4;

  :hover{
    background-color: #5195ee;
  }

  :active{
    background-color: #2d78da;
  }
`
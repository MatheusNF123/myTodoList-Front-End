import styled from "styled-components";

export const ContainerAreaTask = styled.div`
  width: 100%;
  /* height: 100%; */
  /* max-height: 88.5%; */
  height: auto;


  ::-webkit-scrollbar-track {
    background-color: #7c81a8;
}
::-webkit-scrollbar {
    width: 6px;
    background: #7c81a8;
}
::-webkit-scrollbar-thumb {
    background: #222330;
}
  ::-moz-scrollbar-track {
    background-color: #7c81a8;
}
::-moz-scrollbar {
    width: 6px;
    background: #7c81a8;
}
::-moz-scrollbar-thumb {
    background: #222330;
}
`;

export const AreaTask = styled.div(({done, edit, isDesc}) => (
  `display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  width: 100%;
  // height: 100%;

  :hover{
    background-color: #232533;
  }

  .checkboxLab{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%
  }

  input {
    width: 25px;
    height: 25px;
  }

  label{
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'};
    font-weigth: 18px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 25px;     
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
  }

  .date{ 
    width: 200px;
    display: flex;
    justify-content: center;
    width: 20%
  }
  .progress{
    display: flex;
    justify-content: center;
    width: 200px;
    color: ${done ? 'green' : 'yellow'};
    width: 20%
   
  }

  .buttns{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button{
    font-size: 20px;
    background-color: transparent;
    border: none;    
  }

  .btnEdit{
    color: white;
    background-color: transparent;
    margin-left: 8px;    
    transition: .2s;
  }
  .btnEdit:hover,  .btnDelete:hover{
    transform: scale(1.15);
  }
  .btnDelete{
    color:  ${edit.edit ? '#7c7c7c76' : '#920000'};
    background-color: transparent;
  }
  .btnDesc{
    color: white;
    background-color: transparent;
    font-size: 24px;
    display: flex;
    transform: ${isDesc ? 'rotate(-180deg)' : 'rotate(0deg)'};
    transition: .8s

  }




  input[type="checkbox"] { display: none; }
  
  input[type="checkbox"] + label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 20px;
    font: 18px/20px 'Open Sans', Arial, sans-serif;
    color: #ddd;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    
  }
  
  input[type="checkbox"] + label:last-child { margin-bottom: 0; }
  
  input[type="checkbox"] + label:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: ${edit.edit ? '1px solid #7c7c7c76' :  '1px solid #6cc0e5'};    
    position: absolute;
    left: 0;
    top: 0;
    opacity: .6;
    -webkit-transition: all .12s, border-color .08s;
    transition: all .12s, border-color .08s;
  }
  
  input[type="checkbox"]:checked + label:before {
    width: 10px;
    top: -5px;
    left: 5px;
    border-radius: 0;
    opacity: 1;
    border-top-color: transparent;
    border-left-color: transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    
  }

  @media only screen and (max-width: 700px){
    max-width: 100%;
    min-width: 700px;
  }
`
));


export const Descricao = styled.div(({isDesc}) => (`
display: flex;
width: 99.3%;
flex-direction: column;
height: ${isDesc ? '180px':'0px'};
transition: 0.3s;
visibility:${isDesc ? 'visible':'hidden'};
position: relative;
bottom: 14px;
z-index: 1;
background-color: #171822;
color: white;
border-bottom-right-radius: 20px;
border-bottom-left-radius: 20px;
border: 2px solid  #20223a;
margin: auto;

textarea{
  visibility:${isDesc ? 'visible':'hidden'};
  background-color: transparent;
  height: 75%;
  outline: none;
  border: none;
  resize: none;
  overflow: hidden;
  margin: 20px;
  color: #797A81;
  transition: 0.1s;
  font-size: 16px;
}

button{
  visibility:${isDesc ? 'visible':'hidden'};
  width: fit-content;
  align-self: end;
  margin: 0px 30px 20px 0px;
  border-radius: 5px;
  background-color: transparent;
  color: #6cc0e5;
  border: none;
  font-size: 16px;
  transition: 0.1s;
}

button:hover{
  transform: scale(1.15);
}
button:hover:active{
  color: #1fdb5e;
}
`))

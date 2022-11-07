export const verifyInputCreator = ({value, list}) => {
 
  if(!value){
    return {errorC: 'Campo vazio'}
  }else if(!list){
    return {errorC: 'Selecione uma Pasta'}
  }else{
    return {errorC: ""}
  }
}

export const verifyInputEditor = ({value}) => {
 
  if(!value){
    return {errorE: 'Campo vazio'}
  }else{
    return {errorE: ""}
  }
}
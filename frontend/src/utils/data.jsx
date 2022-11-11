export const format = () => {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  const today = new Date(); 
  const arrDate = today.toLocaleDateString().split('/')
  const formatar = `${arrDate[0]} ${months[arrDate[1] -1 ]} ${arrDate[2]}`
 
  return formatar
}


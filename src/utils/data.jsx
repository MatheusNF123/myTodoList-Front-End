export const format = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed); 
  const arrDate = today.toUTCString().split(' ')
  const formatar = `${arrDate[1]} ${arrDate[2]} ${arrDate[3]}`
  return formatar
}


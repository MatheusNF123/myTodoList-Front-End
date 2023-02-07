
export const setUserLocalStorage = (user) => {
  localStorage.setItem("u", JSON.stringify(user))
}

export const getUserLocalStorage = () => {
  const json = localStorage.getItem("u")

  if(!json){
    return null
  }

  const user = JSON.parse(json)
// console.log(user);
  return user ?? null
}
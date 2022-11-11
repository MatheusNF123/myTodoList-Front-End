export const getLocalStorage = () => {
  const storage = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : {isActive: '', listFolder: []}

  return storage
}

export const setLocalStorage = (task) => {
  const storage = getLocalStorage()
  if(storage.listFolder.length > 0){
    (localStorage.setItem("tasks", JSON.stringify([...storage, task])))
  }else{
    localStorage.setItem("tasks", JSON.stringify([task]))
  }
}

export const savaLocalArr = (list) => {
  localStorage.setItem("tasks", JSON.stringify(list))
}
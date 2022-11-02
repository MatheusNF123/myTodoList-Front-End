import { getLocalStorage, savaLocalArr } from "../../utils/localStorage"

const INITIAL_STATE = getLocalStorage()

const listReduer = (state = INITIAL_STATE, action) => {
  switch (action.type) { 

    case 'addList':
     const addList = [...state, {...action.payload}] 
     savaLocalArr(addList)
    return addList

     case "invertDone":
      const invertDone = state.map((task) => {
        if(task.id === action.payload.id) {
          return {...task, done: !task.done}
        }
        return task
      })
      savaLocalArr(invertDone)
      return invertDone

     case "deleteTask":
      const deleteTask = state.filter((task) => task.id !== action.payload.id )
      savaLocalArr(deleteTask)
      return deleteTask

     case "editTask":
      const editTask = state.map((task) => {
        if(task.id === action.payload.id){
          return {...task, ...action.payload}
        }
        return task
      })
      savaLocalArr(editTask)
      return editTask
      
      case 'saveDesc':
        console.log('aqui');
        const saveDesc = state.map((el) => {
          if(el.id === action.payload.id){
            console.log('entrou');
            return {...el, desc: action.payload.desc}
          }
          return el
        })
        savaLocalArr(saveDesc)
        return saveDesc

      default:
        return [...state]
  }
}

export default listReduer
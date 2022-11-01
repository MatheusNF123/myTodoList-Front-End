const INITIAL_STATE = []

const listReduer = (state = INITIAL_STATE, action) => {
  switch (action.type) { 

    case 'addList':
     return [...state, {...action.payload}] 

     case "invertDone":
      return state.map((task) => {
        if(task.id === action.payload.id) {
          return {...task, done: !task.done}
        }
        return task
      })

     case "deleteTask":
      return state.filter((task) => task.id !== action.payload.id )

     case "editTask":
      return state.map((task) => {
        if(task.id === action.payload.id){
          console.log('entrou');
          return {...task, ...action.payload}
        }
        return task
      })
      
      case 'saveDesc':
        return state.map((el) => {
          if(el.id === action.payload.id){
            return {...el, desc: action.payload.desc}
          }
          return el
        })
      default:
        return [...state]
  }
}

export default listReduer
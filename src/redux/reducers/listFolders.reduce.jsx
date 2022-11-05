

const INITIAL_STATE = {isActive: '', listFolder: []}

const listFolderReduer = (state = INITIAL_STATE, action) => {
  console.log('aqui');
  switch (action.type) { 

    case 'addFolder':
     const addFolderList = {...state, listFolder: [...state.listFolder, action.payload] }  
    return addFolderList  

    case 'isActive':
     const isActive = {...state, isActive: action.payload.id }  
    return isActive  

    case 'addList':      
     const addList = {...state, listFolder: [...state.listFolder.map((el) => {
      if(el.id === state.isActive) {
         el.listTask.push(action.payload)
         return el
      }
      return el
     })]} 
    //  savaLocalArr(addList)
    return addList

    case "invertDone":
      const folderFiltered = state.listFolder.find((el) => el.id === state.isActive)
      folderFiltered.listTask.forEach((task) => {
        if(task.id === action.payload.id) {
         task = {...task, done: !task.done}
        }
       
      })
      const returnArray = state.listFolder.map((folder) => folder.id === folderFiltered.id ? folderFiltered : folder)
      // savaLocalArr(invertDone)
      return {...state, listFolder: [...returnArray]}

      case "deleteTask":
        const folderFilteredDelete = state.listFolder.find((el) => el.id === state.isActive)
      const deleteTask = folderFilteredDelete.listTask.filter((task) => task.id !== action.payload.id )
      folderFilteredDelete.taskList = [...deleteTask]
      const returnArrayDelete = state.listFolder.map((folder) => folder.id === folderFilteredDelete.id ? folderFilteredDelete : folder)
      // savaLocalArr(deleteTask)
      return {...state, listFolder: [...returnArrayDelete]}

      case "editTask":
        const folderFilteredEdit = state.listFolder.find((el) => el.id === state.isActive)
        folderFilteredEdit.listTask.forEach((task) => {
          if(task.id === action.payload.id) {
           task = {...task, task: action.payload}
          }
         
        })
        const returnArrayEdit = state.listFolder.map((folder) => folder.id === folderFilteredEdit.id ? folderFilteredEdit : folder)
        // savaLocalArr(editTask)
        return {...state, listFolder: [...returnArrayEdit]}
      
        case 'saveDesc':
          const folderFilteredSaveDesc = state.listFolder.find((el) => el.id === state.isActive)
      
          folderFilteredSaveDesc.listTask.forEach((task) => {
            if(task.id === action.payload.id) {
             task = {...task, desc: action.payload.desc}
            }
           
          })
          const returnArraySaveDesc = state.listFolder.map((folder) => folder.id === folderFilteredSaveDesc.id ? folderFilteredSaveDesc : folder)
         
          // savaLocalArr(saveDesc)
          return {...state, listFolder: [...returnArraySaveDesc]}
        

      default:
        return {...state}
  }
}

export default listFolderReduer
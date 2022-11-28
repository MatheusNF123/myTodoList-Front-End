
const INITIAL_STATE = {isActive: '', listFolder: []}

const listFolderReduer = (state = INITIAL_STATE, action) => {
 
  switch (action.type) { 

    case "getAllFolder":
      const getAllFolder = {...state, listFolder: [...action.payload]}
  
      return getAllFolder
    case 'addFolder':
     const addFolderList = {...state, listFolder: [...state.listFolder, action.payload] }  
  
    return addFolderList  

    case 'deleteFolder':
     const deleteFolder = {...state, listFolder: [...state.listFolder.filter((el) => el.id !== action.payload.id)]}
    return deleteFolder  

    case 'isActive':
     const isActive = {...state, isActive: action.payload.id } 
    return isActive  

    case 'addList':
      const folderFilteredAddList = state.listFolder.find((el) => el.id === state.isActive)    
      folderFilteredAddList.tasks.push(action.payload) 
      const returnArrayAddList = state.listFolder.map((folder) => folder.id === folderFilteredAddList.id ? folderFilteredAddList : folder)

    return {...state, listFolder: [...returnArrayAddList]}

    case "invertDone":
      const folderFiltered = state.listFolder.find((el) => el.id === state.isActive )
      const mapTask = folderFiltered.tasks.map((task) => {
        if(task.id === action.payload.id) {
          console.log('dentro forEach');
        return {...task, inProgress: !task.inProgress}
        }
       return task
      })
      folderFiltered.tasks = [...mapTask]
      const returnArray = state.listFolder.map((folder) => folder.id === folderFiltered.id ? folderFiltered : folder)
    
      return {...state, listFolder: [...returnArray]}

      case "deleteTask":
       
        const folderFilteredDelete = state.listFolder.find((el) => el.id === state.isActive)
      const deleteTask = folderFilteredDelete.tasks.filter((task) => task.id !== action.payload.id )
      folderFilteredDelete.tasks = [...deleteTask]
      const returnArrayDelete = state.listFolder.map((folder) => folder.id === folderFilteredDelete.id ? folderFilteredDelete : folder)
      return {...state, listFolder: [...returnArrayDelete]}

      case "editTask":
        const folderFilteredEdit = state.listFolder.find((el) => el.id === state.isActive)
       
       const mapEdit = folderFilteredEdit.tasks.map((task) => {
          if(task.id === action.payload.id) {
           return {...action.payload}
          }
         return task
        })
        folderFilteredEdit.tasks = [...mapEdit]
        const returnArrayEdit = state.listFolder.map((folder) => folder.id === folderFilteredEdit.id ? folderFilteredEdit : folder)
        return {...state, listFolder: [...returnArrayEdit]}
    
      default:
        return {...state}
  }
}

export default listFolderReduer
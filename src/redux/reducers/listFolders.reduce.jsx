import { getLocalStorage, savaLocalArr } from "../../utils/localStorage";


const INITIAL_STATE = getLocalStorage() 
//  {isActive: '', listFolder: []}

const listFolderReduer = (state = INITIAL_STATE, action) => {
 
  switch (action.type) { 

    case 'addFolder':
     const addFolderList = {...state, listFolder: [...state.listFolder, action.payload] }  
     savaLocalArr(addFolderList) 
    return addFolderList  

    case 'deleteFolder':
     const deleteFoldert = {...state, listFolder: [...state.listFolder.filter((el) => el.id !== action.payload.id)]}
     savaLocalArr(deleteFoldert) 
    return deleteFoldert  

    case 'isActive':
     const isActive = {...state, isActive: action.payload.id } 
     savaLocalArr(isActive) 
    return isActive  

    case 'addList':
      const folderFilteredAddList = state.listFolder.find((el) => el.id === state.isActive)    
      folderFilteredAddList.listTask.push(action.payload) 
      const returnArrayAddList = state.listFolder.map((folder) => folder.id === folderFilteredAddList.id ? folderFilteredAddList : folder)

     savaLocalArr({...state, listFolder: [...returnArrayAddList]})
    return {...state, listFolder: [...returnArrayAddList]}

    case "invertDone":
      console.log('invertDone');
      const folderFiltered = state.listFolder.find((el) => el.id.includes(state.isActive))
      const mapTask = folderFiltered.listTask.map((task) => {
        if(task.id === action.payload.id) {
          console.log('dentro forEach');
        return {...task, done: !task.done}
        }
       return task
      })
      folderFiltered.listTask = [...mapTask]
      const returnArray = state.listFolder.map((folder) => folder.id === folderFiltered.id ? folderFiltered : folder)
      // savaLocalArr(invertDone)
      savaLocalArr({...state, listFolder: [...returnArray]})
      return {...state, listFolder: [...returnArray]}

      case "deleteTask":
        const folderFilteredDelete = state.listFolder.find((el) => el.id === state.isActive)
      const deleteTask = folderFilteredDelete.listTask.filter((task) => task.id !== action.payload.id )
      folderFilteredDelete.listTask = [...deleteTask]
      const returnArrayDelete = state.listFolder.map((folder) => folder.id === folderFilteredDelete.id ? folderFilteredDelete : folder)
      savaLocalArr({...state, listFolder: [...returnArrayDelete]})
      return {...state, listFolder: [...returnArrayDelete]}

      case "editTask":
        const folderFilteredEdit = state.listFolder.find((el) => el.id.includes(state.isActive))
       const mapEdit = folderFilteredEdit.listTask.map((task) => {
          if(task.id === action.payload.id) {
           return {...task, task: action.payload.task}
          }
         return task
        })
        folderFilteredEdit.listTask = [...mapEdit]
        const returnArrayEdit = state.listFolder.map((folder) => folder.id === folderFilteredEdit.id ? folderFilteredEdit : folder)
        savaLocalArr({...state, listFolder: [...returnArrayEdit]})
        return {...state, listFolder: [...returnArrayEdit]}
      
        case 'saveDesc':
          const folderFilteredSaveDesc = state.listFolder.find((el) => el.id === state.isActive)
      
          const mapSaveDesc = folderFilteredSaveDesc.listTask.map((task) => {
            if(task.id === action.payload.id) {
             return {...task, desc: action.payload.desc}
            }
           return task
          })
          folderFilteredSaveDesc.listTask = [...mapSaveDesc]
          const returnArraySaveDesc = state.listFolder.map((folder) => folder.id === folderFilteredSaveDesc.id ? folderFilteredSaveDesc : folder)
         
          savaLocalArr({...state, listFolder: [...returnArraySaveDesc]})
          return {...state, listFolder: [...returnArraySaveDesc]}
        

      default:
        return {...state}
  }
}

export default listFolderReduer
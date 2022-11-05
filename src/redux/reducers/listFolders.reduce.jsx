

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

      default:
        return {...state}
  }
}

export default listFolderReduer
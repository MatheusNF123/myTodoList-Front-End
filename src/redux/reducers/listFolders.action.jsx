import createFolder from "../../services/folder/createFolder"
import deleteFolder from "../../services/folder/deleteFolder"
import getAllFolders from "../../services/folder/getAllFolders"
import { getUserLocalStorage } from "../../utils/localStorage"

export const actionAddFolder = (payload) => ({type: 'addFolder', payload})
export const actionIsActive = (payload) => ({type: 'isActive', payload})
export const actionDeleteFolder = (id) => ({type: "deleteFolder", payload: {id}})
export const actionGetAllFolder = (payload) => ({type: 'getAllFolder', payload})



export const actionGetAllFoldersThunk = () => async (dispatch) => {
  const token = getUserLocalStorage()?.token || null
  if(!token) return
  try {
    const { data: folders, status } = await getAllFolders(token)
    if (status !== 200) return console.log('getFolder', folders);
    dispatch(actionGetAllFolder(folders))
  } catch {
    alert('Erro interno, volte mais tarde!')  
  }


}

export const actionDeleteFolderThunk = (id) => async (dispatch) => {
  try {  
    const { data, status } = await deleteFolder(id)
    if (status !== 200) return console.log('deleteFolder', data);
  dispatch(actionDeleteFolder(id))
  } catch (e) {
    alert('Erro interno, volte mais tarde!')  
  }
}


export const actionCreateFolderThunk = (folder) => async (dispatch) => {
  try {
    const { data: newFolder, status } = await createFolder(folder)
    if (status !== 201) return console.log('createfolder', newFolder);
     dispatch(actionAddFolder({...newFolder, tasks: []}))
     dispatch(actionIsActive({id: newFolder.id}))    
  } catch (error) {
    alert('Erro interno, volte mais tarde!')  
  }
}
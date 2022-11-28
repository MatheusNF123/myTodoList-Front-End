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
  const folders = await getAllFolders(token)
  dispatch(actionGetAllFolder(folders))

}

export const actionDeleteFolderThunk = (id, ide) => async (dispatch) => {
  await deleteFolder(id)
  dispatch(actionDeleteFolder(id))
}


export const actionCreateFolderThunk = (folder) => async (dispatch) => {
 const newFolder = await createFolder(folder)
  dispatch(actionAddFolder({...newFolder, tasks: []}))
  dispatch(actionIsActive({id: newFolder.id}))
}
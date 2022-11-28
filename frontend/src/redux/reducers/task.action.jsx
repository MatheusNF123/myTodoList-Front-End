import createTask from "../../services/tasks/createTask"
import deleteFolder from "../../services/tasks/deleteTask"
import editTask from "../../services/tasks/editTask"
import inProgressTask from "../../services/tasks/inProgressTask"

export const actionListCreator = (payload) => ({type:'addList', payload})
export const actionInvertDone = (id) => ({type: 'invertDone', payload: {id}})
export const actionDeleteTask = (id) => ({type: 'deleteTask', payload: {id}})
export const actionEditTask = (payload) => ({type: 'editTask', payload})
export const actionSaveDesc = ({id, desc}) => ({type: 'saveDesc', payload: {id, desc}})


export const actionCreateTaskThunk = (task, id) => async (dispatch) => {
  const newTask = await createTask(task, id)
   dispatch(actionListCreator(newTask))
 }


export const actionDeleteTaskThunk = (id) => async (dispatch) => {
  await deleteFolder(id)
   dispatch(actionDeleteTask(id))
 }

 
export const actionEditTaskThunk = (task) => async (dispatch) => {
  await editTask(task)
   dispatch(actionEditTask(task))
 }


export const actionEditInProgressThunk = (id) => async (dispatch) => {
  await inProgressTask(id)
   dispatch(actionInvertDone(id))
 }
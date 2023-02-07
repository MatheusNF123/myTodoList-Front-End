import createTask from "../../services/tasks/createTask"
import deleteFolder from "../../services/tasks/deleteTask"
import editTask from "../../services/tasks/editTask"
import inProgressTask from "../../services/tasks/inProgressTask"

export const actionListCreator = (payload) => ({type:'addList', payload})
export const actionInvertDone = (id) => ({type: 'invertDone', payload: {id}})
export const actionDeleteTask = (id) => ({type: 'deleteTask', payload: {id}})
export const actionEditTask = (payload) => ({type: 'editTask', payload})
export const actionSaveDesc = ({id, desc}) => ({type: 'saveDesc', payload: {id, desc}})
export const actionReset = () => ({type: 'reset'})


export const actionCreateTaskThunk = (task, id) => async (dispatch) => {
  try {
    const {data: newTask, status} = await createTask(task, id)
    if(status !== 201) return console.log("createtask", newTask)
     dispatch(actionListCreator(newTask))
    
  } catch {
    alert('Erro interno, volte mais tarde!')
  }
 }


export const actionDeleteTaskThunk = (id) => async (dispatch) => {
  try {
    const { data, status } = await deleteFolder(id)
    if(status !== 204) return console.log("deleteTask", data)
     dispatch(actionDeleteTask(id))
  } catch (error) {
    alert('Erro interno, volte mais tarde!')
  }
 }

 
export const actionEditTaskThunk = (task) => async (dispatch) => {
  try {
   const { data, status } = await editTask(task)
    if(status !== 200) return console.log("editTask", data)
     dispatch(actionEditTask(task))
  } catch {
    alert('Erro interno, volte mais tarde!')
  }
 }


export const actionEditInProgressThunk = (id) => async (dispatch) => {
  try {
    const { data, status } = await inProgressTask(id)
    if(status !== 200) return console.log("editInprogress", data)
     dispatch(actionInvertDone(id))
    
  } catch (error) {
    alert('Erro interno, volte mais tarde!')
  }
 }
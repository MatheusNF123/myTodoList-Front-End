import * as C from './Tasks.styles'
import {useDispatch} from "react-redux"
import { actionInvertDone } from '../../redux/reducers/list.action'
import { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { actionDeleteTask } from '../../redux/reducers/list.action';


const Task = ({task, done, id, date, setEdit, setValue, edit, setValueDesc, saveDesc}) => {
 const [isDesc, setIsDesc] = useState(false)

  const dispatch = useDispatch()


  const deleteTask = () => {
    dispatch(actionDeleteTask(id))
  }

 const editTask = () => {
  setValue(task)
  setEdit({edit: true, id})
 }
  


  return (
    <>
      <C.AreaTask done={done} edit={edit} isDesc={isDesc}>    
      <div className='checkboxLab'> 
        <input type="checkbox"
        id={id}
        checked={done}
        onChange={() => {dispatch(actionInvertDone(id))}}
        disabled={edit.edit ? true : false}/>
        <label htmlFor={id}>{task}</label>
      </div>     
        <div className='date'>{date}</div>
        <div className='progress'>{done ? 'Done': 'inProgress'}</div>

        <div className='buttns'>

          <button className='btnDesc' onClick={() => setIsDesc(!isDesc)}>
            <IoArrowDownCircleOutline/>
          </button>

          <button className='btnEdit' onClick={editTask}>
            <FaRegEdit/>
          </button>

          <button  disabled={edit.edit ? true : false}
            className='btnDelete'
            onClick={deleteTask}>
            <RiDeleteBin6Line/>
          </button>

        </div>           
      </C.AreaTask>
     
      <C.Descricao isDesc={isDesc}>       
         <textarea onChange={(e) => setValueDesc(e.target.value)} placeholder='Digite aqui...'></textarea>
         <button onClick={() => saveDesc(id)}>Save</button>
      </C.Descricao>  
      </>   
      
  )
}

export default Task
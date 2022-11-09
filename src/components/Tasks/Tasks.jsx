import * as C from './Tasks.styles'
import {useDispatch} from "react-redux"
import { actionInvertDone } from '../../redux/reducers/list.action'
import { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { actionDeleteTask } from '../../redux/reducers/list.action';
import Button from './Button';

const Task = ({task, done, id, date, desc, setEdit, setValue, edit, saveDesc}) => {
 const [isDesc, setIsDesc] = useState(false)
 const [valueDesc, setValueDesc] = useState(desc)

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

        <C.DivButtns isDesc={isDesc} edit={edit}>
          <Button estilo={'btnDesc'} func={() => setIsDesc(!isDesc)}>
          <IoArrowDownCircleOutline/>
          </Button>

          <Button estilo={'btnEdit'} func={editTask}>
          <FaRegEdit/>
          </Button>

          <Button estilo={'btnDelete'} func={deleteTask} disable={true}>
          <RiDeleteBin6Line/>
          </Button>

        </C.DivButtns>           
      </C.AreaTask>
     
      <C.Descricao isDesc={isDesc}>       
         <textarea onChange={(e) => setValueDesc(e.target.value)} value={valueDesc} placeholder='Digite aqui...'></textarea>
         <Button func={() => saveDesc({id, desc: valueDesc})}>Save</Button>
      </C.Descricao>  
      </>   
      
  )
}

export default Task
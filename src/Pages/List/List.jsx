import { useState } from 'react'
import Task from '../../components/Tasks/Tasks'
import * as C from './List.styles'
import {useSelector, useDispatch} from 'react-redux'
import { v4 as uuid } from 'uuid';
import { actionEditTask, actionListCreactor, actionSaveDesc } from '../../redux/reducers/list.action';
import { format } from '../../utils/data';
import { ContainerAreaTask } from '../../components/Tasks/Tasks.styles';
import { verifyInputCreator, verifyInputEditor } from '../../utils/verifyInput';




const List = () => {
  const list = useSelector((state) => state.listFolder.listFolder)
  const isActive = useSelector((state) => state.listFolder.isActive)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [edit, setEdit] = useState({edit:false, id: ''})
  const [message, setMessage] = useState("")

  const enterKey = (e) => {
    const _TASK = {
      id: uuid(),
      task: value,
      done: false,
      desc: '',
      date: format()
    }
    if(e.code === 'Enter'){
      const {errorC} = verifyInputCreator({value: value.length, list: list.length})
      if(!edit.edit && errorC){
        console.log(errorC)
        setMessage(errorC)
      }else if(!edit.edit && !errorC){
        dispatch(actionListCreactor(_TASK))
        setValue('')
        setMessage('')
      }

      const {errorE} = verifyInputEditor({value: value.length})
      if(edit.edit && errorE){
        setMessage(errorE)
      }else if(edit.edit && !errorE){
        dispatch(actionEditTask({..._TASK, id: edit.id}))
        setEdit({edit:false, id: ''})
        setValue('')
        setMessage('')
      }
    }

  }

  const addTask = () => {
    const _TASK = {
      id: uuid(),
      task: value,
      done: false,
      desc: '',
      date: format()
    }
    const {errorE} = verifyInputEditor({value: value.length})
    if(!edit.edit && errorE) {
      setMessage(errorE)
    }else if(!edit.edit && !errorE){
      dispatch(actionListCreactor(_TASK))
      setValue('')
      setMessage('')
    }

    if(edit.edit && errorE) {
      setMessage(errorE)
    } else if(edit.edit && !errorE){
      dispatch(actionEditTask({..._TASK, id: edit.id}))
      setEdit({edit:false, id: ''})
      setValue('')
      setMessage('')
    } 
 
  }
  const saveDesc = ({id, desc}) => {
   
    dispatch(actionSaveDesc({
      id,
      desc
    }))
  }



  return (
    <C.Container>
      
      <C.AreaInputAndMenu>
      <C.addTask>
      <div className='image'>➕</div>
        <C.inputAddTarefa message={message} 
        type="text"
        placeholder={!message ? 'Adicionar Tarefas' : message}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={enterKey} /> 
        <button onClick={addTask}>Adicionar</button>
      </C.addTask>
        </C.AreaInputAndMenu>
      <ContainerAreaTask>       
        {list.length > 0  && list.find((folder) => folder.id.includes(isActive))?.listTask.map((el, index) =>  <Task
        key={el+index}
        {...el}
        setEdit={setEdit}
        setValue={setValue}
        edit={edit}
        saveDesc={saveDesc}
        />)}
         
        </ContainerAreaTask> 
    </C.Container>
  )
}

export default  List
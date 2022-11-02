import { useState } from 'react'
import Task from '../../components/Tasks/Tasks'
import * as C from './List.styles'
import {useSelector, useDispatch} from 'react-redux'
import { v4 as uuid } from 'uuid';
import { actionEditTask, actionListCreactor, actionSaveDesc } from '../../redux/reducers/list.action';
import { format } from '../../utils/data';
import { ContainerAreaTask } from '../../components/Tasks/Tasks.styles';



const List = () => {
  const list = useSelector((state) => state.list)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [edit, setEdit] = useState({edit:false, id: ''})

  const enterKey = (e) => {
    const _TASK = {
      id: uuid(),
      task: value,
      done: false,
      desc: '',
      date: format()
    }
    if(value.length > 0 && e.code === 'Enter' && !edit.edit){
      dispatch(actionListCreactor(_TASK))
      setValue('')
    }

    if(value.length > 0 && e.code === 'Enter' && edit.edit){
      dispatch(actionEditTask({..._TASK, id: edit.id}))
      setEdit({edit:false, id: ''})
      setValue('')
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
    if(value.length > 0 && !edit.edit) {
      dispatch(actionListCreactor(_TASK))
      setValue('')
    }

    if(value.length > 0 && edit.edit) {
      dispatch(actionEditTask({..._TASK, id: edit.id}))
      setEdit({edit:false, id: ''})
      setValue('')
    }  
 
  }
  const saveDesc = ({id, desc}) => {
    if(desc.length > 0)
    dispatch(actionSaveDesc({
      id,
      desc
    }))
  }


  return (
    <C.Container>
      <C.addTask>
      <div className='image'>➕</div>
        <input 
        type="text"
        placeholder='Adicionar Tarefas'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={enterKey} /> 
        <button onClick={addTask}>Adicionar</button>
      </C.addTask>  
      <ContainerAreaTask>
        {list.map((el, index) =>  <Task
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
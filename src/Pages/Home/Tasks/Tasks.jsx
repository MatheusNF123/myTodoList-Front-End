import {useState } from 'react'
import ListTask from './ListTasks'
import * as C from './Tasks.styles'
import {useSelector, useDispatch} from 'react-redux'
import { actionCreateTaskThunk, actionEditTaskThunk } from '../../../redux/reducers/task.action';
import { format } from '../../../utils/data';
import { ContainerAreaTask } from './ListTasks.styles';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validateNameTask } from '../../../schema/schema';




const Tasks = () => {
  const list = useSelector((state) => state.listFolder.listFolder)
  const isActive = useSelector((state) => state.listFolder.isActive)
  const dispatch = useDispatch()
  const [value, setValue] = useState({name: ''})
  const [edit, setEdit] = useState({edit:false, id: ''})
  const [message, setMessage] = useState(false)

  const addTask = (nameTask) => {

    if(list.length === 0) return setMessage(true)
    setMessage(false)
    const _TASK = {
      name: nameTask.name,
      inProgress: false,
      descricao: '',
      date: format()
    }
  
      if(edit.edit){
        dispatch(actionEditTaskThunk({..._TASK, id: edit.id}))
        setEdit({edit:false, id: ''})       
        nameTask.name = ""
      }else{
        dispatch(actionCreateTaskThunk(_TASK, isActive))     
        nameTask.name = ""
      } 
  }


  const saveDesc = (task) => {   
    dispatch(actionEditTaskThunk({...task}))
  }



  return (
    <C.Container>
      <C.AreaInputAndMenu >
        <Formik 
        initialValues={value}
        onSubmit={addTask}
        validationSchema={validateNameTask}>
          <Form autoComplete='off'>
            <C.addTask edit={edit.edit}>
            <div className='image'>➕</div>
            <Field 
            name="name"
            type="text"
            className="form-field-name"            
            placeholder={`${edit.edit ? "Nome da tarefa..." : 'Adicionar Tarefa...'}`}
           
            
            />
           
              <button type='submit'>Adicionar</button>
            </C.addTask>
              <ErrorMessage
                component="span"
                name="name"
                className="form-error-name"
                render={(msg) => {
                  if(msg){
                    setMessage(false)
                  }
                  return  <span className="form-error-name">{msg}</span>
                }} 
              />
              {message && <span className='form-error-name'>Nenhuma Pasta Selecionada</span>}
          </Form>
        </Formik>
        </C.AreaInputAndMenu>
      <ContainerAreaTask>  
        {list?.length > 0  && list.find((folder) => folder.id === isActive)?.tasks.map((el, index) =>  <ListTask
        key={el.name+index}
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

export default  Tasks
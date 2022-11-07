import ListTask from '../ListTask/ListFolderTask'
import * as C from './Aside.styles'
import { BiFolderPlus } from "react-icons/bi";
import { useContext, useState } from 'react';
import { actionAddFolder, actionIsActive } from '../../redux/reducers/listFolders.action';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Mycontext from '../../Context/MyContext';
import { verifyInputEditor } from '../../utils/verifyInput';

const Aside = () => {
  const listFolder = useSelector((state) => state.listFolder)
  const [valueInputListFolder, setValueInputList] = useState('')
  const dispatch = useDispatch()
  const idFolder = useSelector((state) => state.listFolder.isActive)
  const {menuOpen} = useContext(Mycontext)
const [message, setMessage] = useState('')

  const enterKey = (e) => {
    const foolder = {
      id: uuid(),
      nameFolder: valueInputListFolder,
      listTask: []
    }
    if(e.code === "Enter"){
     const {errorE} = verifyInputEditor({value: valueInputListFolder.length > 0})
     if(!errorE){
       dispatch(actionAddFolder(foolder))
       dispatch(actionIsActive({id: foolder.id}))
       setValueInputList('')
       setMessage('')
     }else if(errorE){
       setMessage(errorE)
     }
   }
  }

  const addFolderList = () => {
    const foolder = {
      id: uuid(),
      nameFolder: valueInputListFolder,
      listTask: []
    }
    const {errorE} = verifyInputEditor({value: valueInputListFolder.length > 0})
    if(!errorE) {
      dispatch(actionAddFolder(foolder))
      dispatch(actionIsActive({id: foolder.id}))
      setValueInputList('')
      setMessage('')
    }else if(errorE){
      setMessage(errorE)
    }
  }

const nextActive = (index) => {
  if(index > 0){
    dispatch(actionIsActive({id: listFolder.listFolder[index - 1].id}))
  }
}

  return (
    <C.Container menuOpen={menuOpen}>
      <C.AreaInput>

        <C.DivInput>
          <C.InputText message={message}
          type="text"
           placeholder={!message ? 'Adicionar Pasta' : message}
            value={valueInputListFolder}
             onChange={(e) => setValueInputList(e.target.value)}
             onKeyUp={enterKey}/>
          <C.buttonAdd type='button' onClick={addFolderList}>
          <BiFolderPlus/>
        </C.buttonAdd>

        </C.DivInput>
      </C.AreaInput>

      <C.AreaListTask>
      {listFolder.listFolder.map((folder, index) => <ListTask
       key={index + folder.nameFolder}
        {...folder}      
        idFolder={idFolder}
        list={listFolder}
        index={index}
        nextActive={nextActive}
        /> )}
      </C.AreaListTask>
    </C.Container>
  )
}

export default Aside
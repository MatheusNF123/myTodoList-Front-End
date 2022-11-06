import ListTask from '../ListTask/ListFolderTask'
import * as C from './Aside.styles'
import { BiFolderPlus } from "react-icons/bi";
import { useState } from 'react';
import { actionAddFolder, actionIsActive } from '../../redux/reducers/listFolders.action';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

const Aside = () => {
  const listFolder = useSelector((state) => state.listFolder)
  const [valueInputListFolder, setValueInputList] = useState('')
  const dispatch = useDispatch()
  const idFolder = useSelector((state) => state.listFolder.isActive)

  const enterKey = (e) => {
    const foolder = {
      id: uuid(),
      nameFolder: valueInputListFolder,
      listTask: []
    }
    if(e.code === "Enter" && valueInputListFolder.length){
      dispatch(actionAddFolder(foolder))
      dispatch(actionIsActive({id: foolder.id}))
      setValueInputList('')
    }
  }

  const addFolderList = () => {
    const foolder = {
      id: uuid(),
      nameFolder: valueInputListFolder,
      listTask: []
    }
    if(valueInputListFolder.length > 0) {
      dispatch(actionAddFolder(foolder))
      dispatch(actionIsActive({id: foolder.id}))
      setValueInputList('')

    }
  }

const nextActive = (index) => {
  if(index > 0){
    console.log('aqui?');
    dispatch(actionIsActive({id: listFolder.listFolder[index - 1].id}))
  }
}

  return (
    <C.Container>
      <C.AreaInput>

        <C.DivInput>
          <C.InputText type="text"
           placeholder='Adicionar Pasta'
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
import ListTask from '../ListTask/ListFolderTask'
import * as C from './Aside.styles'
import { BiFolderPlus } from "react-icons/bi";
import { useState } from 'react';
import { actionAddFolder } from '../../redux/reducers/listFolders.action';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';


const Aside = () => {
  const listFolder = useSelector((state) => state.listFolder)
  const [valueInputListFolder, setValueInputList] = useState('')
  const dispatch = useDispatch()
  const idFolder = useSelector((state) => state.listFolder.isActive)

  const addFolderList = () => {
  
    dispatch(actionAddFolder({
      id: uuid(),
      nameFolder: valueInputListFolder,
      listTask: []
    }))
    setValueInputList('')
  }
  return (
    <C.Container>
      <C.AreaInput>

        <C.DivInput>
          <C.InputText type="text" placeholder='Adicionar Pasta' value={valueInputListFolder} onChange={(e) => setValueInputList(e.target.value)}/>
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
        /> )}
      </C.AreaListTask>
    </C.Container>
  )
}

export default Aside
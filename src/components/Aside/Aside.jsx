import ListTask from '../ListTask/ListTask'
import * as C from './Aside.styles'
import { BiFolderPlus } from "react-icons/bi";
import { useState } from 'react';
const Aside = () => {
  const [valueInputList, setValueInputList] = useState()

  const addFolderList = () => {
    
  }
  return (
    <C.Container>
      <C.AreaInput>

        <C.DivInput>
          <C.InputText type="text" placeholder='Adicionar Pasta' value={valueInputList} onChange={(e) => setValueInputList(e.target.value)}/>
          <C.buttonAdd onClick={addFolderList}>
          <BiFolderPlus/>
        </C.buttonAdd>

        </C.DivInput>
      </C.AreaInput>

      <C.AreaListTask>
      <ListTask/>
      </C.AreaListTask>
    </C.Container>
  )
}

export default Aside
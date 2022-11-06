// import { useState } from "react"
import { useDispatch } from "react-redux"
import { actionDeleteFolder, actionIsActive } from "../../redux/reducers/listFolders.action"
import { VscClose } from "react-icons/vsc";
import * as C from "./ListFolderTask.styles"

const ListTask = ({nameFolder, id, idFolder, index, nextActive}) => {
  const dispatch = useDispatch()

  
  return (
    <C.divContainer id={id} idFolder={idFolder}>
      <C.ContentListTask onClick={() => dispatch(actionIsActive({id}))} id={id} idFolder={idFolder}>
  
        <C.divImg>
          <C.img src='https://cdn-icons-png.flaticon.com/512/235/235251.png'/>
        </C.divImg>
        <C.h3>{nameFolder}</C.h3>
      </C.ContentListTask>
        <C.DeleteInput onClick={() => {nextActive(index);dispatch(actionDeleteFolder(id))}}>
          
            <VscClose/>
        </C.DeleteInput>
    </C.divContainer>
  )
}

export default ListTask
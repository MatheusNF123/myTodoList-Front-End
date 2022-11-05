// import { useState } from "react"
import { useDispatch } from "react-redux"
import { actionIsActive } from "../../redux/reducers/listFolders.action"
import * as C from "./ListFolderTask.styles"

const ListTask = ({nameFolder, id, idFolder}) => {
  const dispatch = useDispatch()

  return (
  <C.ContentListTask onClick={() => dispatch(actionIsActive({id}))} id={id} idFolder={idFolder}>
    <C.divImg>
      <C.img src='https://cdn-icons-png.flaticon.com/512/235/235251.png'/>
    </C.divImg>
      <C.h3>{nameFolder}</C.h3>
  </C.ContentListTask>
  )
}

export default ListTask
import { useDispatch } from "react-redux";
import {
  actionDeleteFolderThunk,
  actionIsActive,
} from "../../../redux/reducers/listFolders.action";
import { VscClose } from "react-icons/vsc";
import * as C from "./ListFolders.styles";
import { useEffect } from "react";
import Modal from "../../../components/Modal/Modal";
import { useState } from "react";
import ButtonModal from "../../../components/Modal/ButtonModal";

const ListTask = ({ name, id, idFolder, index, nextActive, list }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const deleteFolder = (e) => {
    nextActive(index);
    dispatch(actionDeleteFolderThunk(id));
  };

  const onModal = () => {
    setShow(true);
  };

  useEffect(() => {
    if (!idFolder) {
      dispatch(actionIsActive({ id: list?.listFolder[0]?.id || 0 }));
    }
  }, [list?.listFolder, idFolder, dispatch]);

  return (
    <C.divContainer id={id} idFolder={idFolder}>
      <C.ContentListTask onClick={() => dispatch(actionIsActive({ id }))}>
        <C.divImg>
          <C.img src="https://cdn-icons-png.flaticon.com/512/235/235251.png" />
        </C.divImg>
        <C.h3>{name}</C.h3>
      </C.ContentListTask>
      <Modal
        show={show}
        setShow={setShow}
        title={"EXCLUIR PASTA"}
        info={`Tem certeza que deseja excluir a pasta`}
        name={name}
      >
        <ButtonModal name={"Cancelar"} handleBtn={() => setShow(false)} />
        <ButtonModal name={"Excluir"} handleBtn={deleteFolder} />
      </Modal>
      <C.DeleteInput onClick={onModal}>
        <VscClose />
      </C.DeleteInput>
    </C.divContainer>
  );
};

export default ListTask;

import ListFolders from "./ListFolders";
import * as C from "./index.styles";
import { BiFolderPlus } from "react-icons/bi";
import { useContext, useState } from "react";
import {
  actionCreateFolderThunk,
  actionIsActive,
} from "../../../redux/reducers/listFolders.action";

import { useDispatch, useSelector } from "react-redux";
import Mycontext from "../../../Context/MyContext";
import { Field, Form, Formik } from "formik";
import { validateNameFolder } from "../../../schema/schema";

const Folders = () => {
  const listFolder = useSelector((state) => state.listFolder);
  const [valueInputListFolder, setValueInputList] = useState({ name: "" });
  const dispatch = useDispatch();
  const idFolder = useSelector((state) => state.listFolder.isActive);
  const { menuOpen } = useContext(Mycontext);
  const [message, setMessage] = useState(false);

  const addFolderList = (value) => {
    const existFolder = listFolder?.listFolder.some(
      (el) => el.name === value.name
    );
    if (existFolder) {
      value.name = "";
      setMessage(true);
      return;
    }
    const foolder = {
      name: value.name,
      tasks: [],
    };

    dispatch(actionCreateFolderThunk(foolder));
    setValueInputList("");
    setMessage("");
    value.name = "";
  };

  const nextActive = (index) => {
    if (index > 0) {
      dispatch(actionIsActive({ id: listFolder.listFolder[index - 1].id }));
    }
  };

  return (
    <C.Container menuOpen={menuOpen}>
      <Formik
        initialValues={valueInputListFolder}
        onSubmit={addFolderList}
        validationSchema={validateNameFolder}
      >
        {({ errors }) => (
          <Form autoComplete="off">
            <C.AreaInput>
              <C.DivInput err={errors.name} message={message}>
                <Field
                  name="name"
                  type="text"
                  className="form-field-folder-name"
                  placeholder={
                    message
                      ? "Essa pasta já existe"
                      : errors.name
                      ? errors.name
                      : "Adicionar Pasta"
                  }
                />

                <C.buttonAdd type="submit">
                  <BiFolderPlus />
                </C.buttonAdd>
              </C.DivInput>
            </C.AreaInput>
          </Form>
        )}
      </Formik>

      <C.AreaListTask>
        {listFolder.listFolder?.map((folder, index) => (
          <ListFolders
            key={index + folder.name}
            {...folder}
            idFolder={idFolder}
            list={listFolder}
            index={index}
            nextActive={nextActive}
          />
        ))}
      </C.AreaListTask>
    </C.Container>
  );
};

export default Folders;

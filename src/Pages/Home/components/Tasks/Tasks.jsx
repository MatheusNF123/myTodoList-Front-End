import * as C from "./Tasks.styles";
import { useDispatch } from "react-redux";
import {
  actionDeleteTaskThunk,
  actionEditInProgressThunk,
} from "../../../../redux/reducers/task.action";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Button from "./Button";

const Task = ({
  name,
  inProgress,
  id,
  date,
  descricao,
  setEdit,
  setValue,
  edit,
  saveDesc,
}) => {
  const [isDesc, setIsDesc] = useState(false);
  const [valueDesc, setValueDesc] = useState(descricao);

  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(actionDeleteTaskThunk(id));
  };

  const editTask = () => {
    setValue({ name: name });
    setEdit({ edit: true, id });
  };

  return (
    <>
      <C.AreaTask done={inProgress} edit={edit} isDesc={isDesc}>
        <div className="checkboxLab">
          <input
            type="checkbox"
            id={id}
            checked={inProgress}
            onChange={() => {
              dispatch(actionEditInProgressThunk(id));
            }}
            disabled={edit.edit ? true : false}
          />
          <label htmlFor={id}>{name}</label>
        </div>
        <div className="date">{date}</div>
        <div className="progress">{inProgress ? "Done" : "inProgress"}</div>

        <C.DivButtns isDesc={isDesc} edit={edit}>
          <Button estilo={"btnDesc"} func={() => setIsDesc(!isDesc)}>
            <IoArrowDownCircleOutline />
          </Button>

          <Button estilo={"btnEdit"} func={editTask}>
            <FaRegEdit />
          </Button>

          <Button estilo={"btnDelete"} func={deleteTask} disable={true}>
            <RiDeleteBin6Line />
          </Button>
        </C.DivButtns>
      </C.AreaTask>

      <C.Descricao isDesc={isDesc}>
        <textarea
          onChange={(e) => setValueDesc(e.target.value)}
          value={valueDesc}
          placeholder="Digite aqui..."
        ></textarea>
        <Button
          func={() =>
            saveDesc({ id, descricao: valueDesc, date, inProgress, name })
          }
        >
          Save
        </Button>
      </C.Descricao>
    </>
  );
};

export default Task;

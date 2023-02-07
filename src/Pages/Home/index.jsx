import * as C from "./index.styles";
import Header from "../../components/Header/Header";
import Tasks from "./Tasks";
import Folders from "./Folders";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGetAllFoldersThunk } from "../../redux/reducers/listFolders.action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetAllFoldersThunk());
  }, [dispatch]);

  return (
    <C.Container>
      <Header />
      <C.Area>
        <Folders />
        <Tasks />
      </C.Area>
    </C.Container>
  );
};
export default Home;

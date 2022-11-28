import * as C from "./Home.styles";
import Header from "../../components/Header/Header";
import List from "./List/List";
import Aside from "./Aside/Aside";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGetAllFoldersThunk } from "../../redux/reducers/listFolders.action";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetAllFoldersThunk())
  },[dispatch])
 

  return (
    
      <C.Container>
        <Header />
        <C.Area>
          <Aside />
          <List />
        </C.Area>
      </C.Container>
  );
};
export default Home;

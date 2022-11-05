import * as C from './App.styles'
import Header from './components/Header/Header';
import List from './Pages/List/List';
import Aside from './components/Aside/Aside';

function App() {
  return (
   <C.Container>
        <Header />
      <C.Area>
        <Aside/>
        <List/>
      </C.Area>
   </C.Container>
  );
}

export default App;

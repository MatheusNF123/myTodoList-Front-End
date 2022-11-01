import * as C from './App.styles'
import Header from './components/Header/Header';
import List from './Pages/List/List';

function App() {
  return (
   <C.Container>
      <C.Area>
        <Header />
        <List/>
      </C.Area>
   </C.Container>
  );
}

export default App;

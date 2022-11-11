import * as C from './App.styles'
import Header from './components/Header/Header';
import List from './Pages/List/List';
import Aside from './components/Aside/Aside';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <C.Container>
          <Header />
          <C.Area>
            <Aside/>
            <List/>
          </C.Area>
      </C.Container>
   </Provider>
  );
}

export default App;

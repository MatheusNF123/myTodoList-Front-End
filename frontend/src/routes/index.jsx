import {Routes , Route} from 'react-router-dom'
import Private from '../components/Private/Private'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'

const AppRoutes = () => {
  return (
      <Routes>
        <Route exact path='/' element={ <Private><Home/></Private>}/>
        <Route exact path='/home' element={<Private><Home/></Private>}/>
        <Route exact path='/login' element={<Login/>}/> 
        <Route exact path='/signup' element={<SignUp/>}/> 
      </Routes>
  )
}

export default AppRoutes

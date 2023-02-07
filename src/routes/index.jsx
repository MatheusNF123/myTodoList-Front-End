import {Routes , Route} from 'react-router-dom'
import Private from '../components/Private/Private'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

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

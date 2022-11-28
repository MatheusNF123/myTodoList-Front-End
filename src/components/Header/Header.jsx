import { useContext } from 'react'
import { FcFolder } from 'react-icons/fc'
import Mycontext from '../../Context/MyContext'
import * as C from './Header.styles'

import { MdLogout } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { AuthContext } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const auth = useContext(AuthContext);
  const {menuOpen, setMenuOpen} = useContext(Mycontext)
const navigate = useNavigate()
  const openMenuFolder = () => {
    setMenuOpen(!menuOpen)
  }

const logout = () => {
  auth?.logout()
  navigate('/login')
}
  return (
    <C.Container>
      <C.DivArea>
       <C.ButtonMenuMobile onClick={openMenuFolder}>
        <FcFolder/>
        </C.ButtonMenuMobile>
      <h1>📝 My-Todo-List</h1>


      <C.divPerfil>
       <BiUserCircle className='iconPerfil'/>
       <span>{auth?.user || 'Usuário'}</span>
      </C.divPerfil>


      </C.DivArea>
      <C.ButtonSair onClick={logout}>
        <span>Sair</span>
        <MdLogout className='iconSair'/>
      </C.ButtonSair>
    </C.Container>
  )
}
export default Header
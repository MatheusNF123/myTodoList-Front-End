import { useContext } from 'react'
import { FcFolder } from 'react-icons/fc'
import Mycontext from '../../Context/MyContext'
import * as C from './Header.styles'

const Header = () => {
  const {menuOpen, setMenuOpen} = useContext(Mycontext)

  const openMenuFolder = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <C.Container>
       <C.ButtonMenuMobile onClick={openMenuFolder}>
        <FcFolder/>
        </C.ButtonMenuMobile>
      <h1>📝 My-Todo-List</h1>
    </C.Container>
  )
}
export default Header
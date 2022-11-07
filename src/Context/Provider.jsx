
import { useState } from 'react';
import Mycontext from './MyContext';

const Provider = ({children}) => {
  const [menuOpen, setMenuOpen] = useState(false)

 const context = {
  menuOpen,
  setMenuOpen
 }
  return(
    <Mycontext.Provider value={context}>
      {children}
    </Mycontext.Provider>
  )
}

export default Provider
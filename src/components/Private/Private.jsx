import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";


function Private({children}) {
  const auth = useContext(AuthContext);

  return (
    <>
    {auth?.authUser ? <>{children}</>: <Navigate to="/login" replace={true}/>}
    </>
 
    
  )
}

export default Private
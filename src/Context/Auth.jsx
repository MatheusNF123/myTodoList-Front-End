import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import authTokenUser from "../services/user/authUser";
import {
  getUserLocalStorage,
  setUserLocalStorage,
} from "../utils/localStorage";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  const validateLocal = async (payload) => {
    const valid = await authTokenUser(payload?.token || null)    
    if (payload && valid === 'OK') {      
      setUser(payload);
    }else{
      setUser(null)
    }
  }
 
  useEffect(() => {
    const userLocal = getUserLocalStorage();   
  if(userLocal?.token){    
    validateLocal(userLocal)
  }  
  }, []);


  const authenticate = useCallback(async (infoUser, call) => {
    try {
          const {status, data} = await call(infoUser);
          if(status !== 200 && status !== 201) {
            setUser(null)
            return {err: true, data}
          }
          const payload = { token: data.token, email: data.email, user: data.userName };
          setUser(payload);
          setUserLocalStorage(payload);
          return {err: false}         
        }catch(e){
          setLoading(false)
          alert('Erro inesperado! Tente novamente mais tarde.')
        }
    }, []);

  const logout = useCallback(() => {
    setUser(null);
    setUserLocalStorage(null);
  },[]);

  const authUser = useMemo(() => !!user, [user]);

  return (
    <AuthContext.Provider value={{ ...user, authUser, authenticate, logout, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

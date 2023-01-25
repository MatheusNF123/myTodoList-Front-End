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
          alert('Erro inesperado! Tente novamente mais tarde.')
        }
    }, []);

  // const authenticate = useCallback(async (email, password) => {
  //   try {
  //     const {status, data} = await loginRequest(email, password);
  //     if(status !== 200) {
  //       setUser(null)
  //       return {err: true}
  //     }
  //     const payload = { token: data.token, email: data.email, user: data.userName };
  //     setUser(payload);
  //     setUserLocalStorage(payload);
  //     return {err: false}
  //   }catch(e){
  //     alert('Erro inesperado! Tente novamente mais tarde.')
  //   }
  // }, []);

  const logout = useCallback(() => {
    setUser(null);
    setUserLocalStorage(null);
  },[]);

  const authUser = useMemo(() => !!user, [user]);

  return (
    <AuthContext.Provider value={{ ...user, authUser, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

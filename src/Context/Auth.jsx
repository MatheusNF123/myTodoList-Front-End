import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import authTokenUser from "../services/user/authUser";
import loginRequest from "../services/user/login";
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

  // useEffect(() => {
  //   const userLocal = getUserLocalStorage();
  
  //   const validateLocal = async () => {

  //   const valid = await authTokenUser(userLocal?.token || null)
    
  //   if (userLocal && valid === 'OK') {
  //     setUser(userLocal);
  //   }else{
  //     setUser(null)
  //   }
  // }
 
  // if(userLocal?.token){
  //   validateLocal()
  // }else{
  //   setUser(null)
  // }
  
  // }, []);

  const authenticate = useCallback(async (email, password) => {
    const request = await loginRequest(email, password);
    console.log("---------", 'autenticando', request);
    const payload = { token: request.token, email: request.email, user: request.userName };
    setUser(payload);
    setUserLocalStorage(payload);
  }, []);

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

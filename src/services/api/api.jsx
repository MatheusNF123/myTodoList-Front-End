import axios from "axios";
import { getUserLocalStorage } from "../../utils/localStorage";

const Api = axios.create({
  baseURL: 'http://localhost:3001/' || process.env.REACT_APP_URL_HOST || 'http://localhost:3001/' , headers: { "Content-Type": "application/json", Authorization: getUserLocalStorage()?.token || null }
})



Api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  
  if(error.message !== 'Network Error') {
    return error.response
  }
  console.log('error');
  return Promise.reject(error);
});


export {Api}
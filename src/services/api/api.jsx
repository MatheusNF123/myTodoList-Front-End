import axios from "axios";
import { getUserLocalStorage } from "../../utils/localStorage";

const Api = axios.create({
  baseURL: process.env.REACT_APP_URL_HOST || 'http://localhost:3001/' , headers: { "Content-Type": "application/json", /* Authorization: getUserLocalStorage()?.token || null */ }
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

Api.interceptors.request.use(
  config => {
    const token = getUserLocalStorage()?.token || null

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  error => Promise.reject(error)
);


export {Api}
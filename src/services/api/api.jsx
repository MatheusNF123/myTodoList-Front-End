import axios from "axios";
import { getUserLocalStorage } from "../../utils/localStorage";

const Api = axios.create({
  baseURL: 'http://localhost:3001/' || process.env.REACT_APP_URL_HOST || 'http://localhost:3001/' , headers: { "Content-Type": "application/json", Authorization: getUserLocalStorage()?.token || null }
})

// http://localhost:3001/

// Api.interceptors.response.use(
//   (response) => {   
//     return response;
//   },
//   (error) => {
//     if (error.message === 'Network Error') {
//       return Promise.reject(new Error('Erro de conexão.'));
//     }
  
//     if (error.response?.status === 400) {
//       console.log(error);
//       return Promise.reject(new Error(error.response.data.message));
//     }
//     return Promise.reject(error);
//   }
// )

Api.interceptors.response.use(function (response) {  
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  
  if(error.message !== 'Network Error') {
    return error.response
  }
  console.log('error');
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
// export const setToken = () => {
//   const token = getUserLocalStorage()?.token || null
//   Api.defaults.headers.common.Authorization = token

// }

export {Api}
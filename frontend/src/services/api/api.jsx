import axios from "axios";
import { getUserLocalStorage } from "../../utils/localStorage";

const Api = axios.create({
  baseURL: "http://localhost:3001/", headers: { "Content-Type": "application/json", Authorization: getUserLocalStorage()?.token || null }
})


Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message === 'Network Error') {
      return Promise.reject(new Error('Erro de conexão.'));
    }
  
    if (error.response?.status === 400) {
      console.log(error);
      return Promise.reject(new Error(error.response.data.message));
    }
    return Promise.reject(error);
  }
)
// export const setToken = () => {
//   const token = getUserLocalStorage()?.token || null
//   Api.defaults.headers.common.Authorization = token

// }

export {Api}
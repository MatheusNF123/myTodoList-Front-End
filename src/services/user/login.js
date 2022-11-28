import { Api } from "../api/api";

const loginRequest = async (email, password) => {
  try {
    const {data} = await Api.post("login", { email, password });

    if(data){
      return data;
    }
    return new Error('Erro no login.');
  } catch (error) {
    console.error(error);
    return new Error(error.message || 'Erro no login.');
  }
};

export default loginRequest;

import { Api } from "../api/api";

const registerRequest = async (username, email, password) => {
  try {
    const {data} = await Api.post("register", { username, email, password });

    if(data) {
      return data;
    }
    throw new Error("Erro no cadastro");
  } catch (error) {
    console.error(error);
    return new Error(error.message || 'Erro no cadastro');
  }
};

export default registerRequest;
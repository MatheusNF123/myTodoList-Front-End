import { Api } from "../api/api";

const registerRequest = async ({username, email, password}) => {
    const data = await Api.post("register", { username, email, password });

    
      return data;

};

export default registerRequest;
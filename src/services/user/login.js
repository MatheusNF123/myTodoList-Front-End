import { Api } from "../api/api";

const loginRequest = async ({email, password}) => {
    const data = await Api.post("login", { email, password }); 
  
    
      return data;  
};

export default loginRequest;

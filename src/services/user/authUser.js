import { Api } from "../api/api";

const authTokenUser = async () => {
  // try {
    const {data} = await Api.get("auth");
    // if(data){
      return data;
  //   }
  //   return new Error('Usuário não autenticado.');
  // } catch (error) {
  //   return null
  //   // return new Error(error.message || 'Usuário não autenticado.');
  // }
};

export default authTokenUser;

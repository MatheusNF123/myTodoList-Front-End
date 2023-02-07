import { Api } from "../api/api";

const authTokenUser = async () => {
 
    const {data} = await Api.get("auth");

      return data;

};

export default authTokenUser;

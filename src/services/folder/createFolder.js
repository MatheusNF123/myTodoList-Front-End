import { Api } from "../api/api";

const createFolder = async (folder) => {
    const {data} = await Api.post(`folder`, {name: folder.name});
    if(data) {
      return data;
    }
    throw new Error("Erro ao criar uma pasta");
 
};

export default createFolder;
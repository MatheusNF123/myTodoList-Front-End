import { Api } from "../api/api";

const createFolder = async (folder) => {
  try {
    const {data} = await Api.post(`folder`, {name: folder.name});

    if(data) {
      return data;
    }
    throw new Error("Erro ao criar uma pasta");
  } catch (error) {
    console.error(error);
    return new Error(error.message || 'Erro ao criar uma pasta');
  }
};

export default createFolder;
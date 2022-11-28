
import { Api } from "../api/api";

const getAllFolders = async (token) => {
  try {
    const {data} = await Api.get("folder", {headers: {Authorization: token}});

    if(data) {
      return data;
    }
    throw new Error("Erro ao encontrar as pastas");
  } catch (error) {
    console.error(error);
    return new Error(error.message || 'Erro ao encontrar as pastas');
  }
};

export default getAllFolders;
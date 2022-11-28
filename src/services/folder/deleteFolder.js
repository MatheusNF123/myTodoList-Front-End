import { Api } from "../api/api";

const deleteFolder = async (id) => {
  try {
    const {data} = await Api.delete(`folder/${id}`);

    if(data) {
      return data;
    }
    throw new Error("Erro ao encontrar as pastas");
  } catch (error) {
    console.error(error);
    return new Error(error.message || 'Erro ao encontrar as pastas');
  }
};

export default deleteFolder;
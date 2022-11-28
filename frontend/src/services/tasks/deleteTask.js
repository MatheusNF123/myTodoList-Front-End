import { Api } from "../api/api";

const deleteFolder = async (id) => {
  try {
    const data = await Api.delete(`task/${id}`);
    if(data){
      return data
    }
    throw new Error("Erro ao Deletar Tarefa");
  } catch (error) {
    console.error(error);
    return new Error(error.message || 'Erro ao Deletar Tarefa');
  }
};

export default deleteFolder;
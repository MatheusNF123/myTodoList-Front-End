import { Api } from "../api/api";

const inProgressTask = async (id) => {
  try {
    const {data} = await Api.patch(`task/${id}/inProgress`);

    if(data) {
      return data;
    }
    throw new Error("Erro ao mudar o progresso");
  } catch (error) {
    console.error(error);
    return new Error(error.message || 'Erro ao mudar o progresso');
  }
};

export default inProgressTask;
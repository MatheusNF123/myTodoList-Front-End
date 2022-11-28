import { Api } from "../api/api";

const editTask = async (task) => {
  try {
    const {data} = await Api.put(`task`, {...task});

    if(data) {
      return data;
    }
    throw new Error("Erro ao editar uma tarefa");
  } catch (error) {
    console.error(error);
    return new Error(error.message || 'Erro ao editar uma tarefa');
  }
};

export default editTask;
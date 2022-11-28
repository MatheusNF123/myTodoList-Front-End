import { Api } from "../api/api";

const createTask = async (task, id) => {
  try {
    const {data} = await Api.post(`task/folder/${id}`, {...task});

    if(data) {
      return data;
    }
    throw new Error("Erro ao criar uma pasta");
  } catch (error) {
    console.error(error);
    return new Error(error.message || 'Erro ao criar uma pasta');
  }
};

export default createTask;
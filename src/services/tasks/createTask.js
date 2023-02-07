import { Api } from "../api/api";

const createTask = async (task, id) => {
  const data = await Api.post(`task/folder/${id}`, { ...task });

  return data;
};

export default createTask;

import { Api } from "../api/api";

const editTask = async (task) => {
  const data = await Api.put(`task`, { ...task });

  return data;
};

export default editTask;

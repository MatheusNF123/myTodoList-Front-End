import { Api } from "../api/api";

const deleteFolder = async (id) => {
  const data = await Api.delete(`task/${id}`);

  return data;
};

export default deleteFolder;

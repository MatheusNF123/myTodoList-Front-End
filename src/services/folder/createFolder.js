import { Api } from "../api/api";

const createFolder = async (folder) => {
  const data = await Api.post(`folder`, { name: folder.name });

  return data;
};

export default createFolder;

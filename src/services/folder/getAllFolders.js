import { Api } from "../api/api";

const getAllFolders = async (token) => {
  const data = await Api.get("folder", { headers: { Authorization: token } });

  return data;
};

export default getAllFolders;

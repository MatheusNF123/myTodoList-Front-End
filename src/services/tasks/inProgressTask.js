import { Api } from "../api/api";

const inProgressTask = async (id) => {
  const data = await Api.patch(`task/${id}/inProgress`);
  return data;
};

export default inProgressTask;

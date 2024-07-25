import axios from "axios";

export const createRandomUser = async () => {
  const randomName = Math.random().toString(36).substring(7);
  const response = await axios.post("http://localhost:3001/users", {
    name: randomName,
    email: `${randomName}@mail.com`,
  });
  return response.data;
};

import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

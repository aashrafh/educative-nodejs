import axios from "axios"; // HTTP Client
import authHeader from "./auth.header";

const API_URL = "http://localhost:5000/api"; // The API endpoint to communicate with the server

const upload = (data) => {
  console.log(authHeader());
  return axios.post(`${API_URL}/upload`, data, {
    headers: { ...authHeader(), "Content-Type": "multipart/form-data" },
  });
};

const UserService = {
  upload,
};

export default UserService;

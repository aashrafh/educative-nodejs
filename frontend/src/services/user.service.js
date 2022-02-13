import axios from "axios"; // HTTP Client
import authHeader from "./auth.header";

const upload = (data) => {
  return axios.post(`/upload`, data, {
    headers: { ...authHeader(), "Content-Type": "multipart/form-data" },
  });
};

const getFiles = () => {
  return axios.get(`/file`, {
    headers: { ...authHeader() },
  });
};

const getFile = (filepath) => {
  return axios.get(`/uploads/${filepath}`, {
    headers: { ...authHeader() },
  });
};

const deleteFile = (id) => {
  return axios.delete(`/file/${id}`, {
    headers: { ...authHeader() },
  });
};

const UserService = {
  upload,
  getFile,
  getFiles,
  deleteFile,
};

export default UserService;

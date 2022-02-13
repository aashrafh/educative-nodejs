import axios from "axios"; // HTTP Client

/**
 * Handles the signup HTTP request to add a new user to the database
 * The data needed for each user is First Name, Last Name, Username, Email, and Password
 */
const signup = ({ firstName, lastName, username, email, password }) => {
  return axios.post(`/signup`, {
    firstName,
    lastName,
    username,
    email,
    password,
  });
};

/**
 * Handles the verify email request.
 */
const verify = (confirmationToken) => {
  return axios.get(`/verify/${confirmationToken}`);
};

/**
 * Handles the login HTTP request to access your user profile
 * The data needed for each user is the username or email along with the password
 */
const login = ({ emailOrUsername, password }) => {
  return axios.post(`/login`, { emailOrUsername, password });
};

const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  signup,
  verify,
  login,
  logout,
};

export default AuthService;

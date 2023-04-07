import { axios } from './setAxiosSettings';

export const checkAuth = () => {
  return axios.get(process.env.REACT_APP_API_USER);
}

export const login = async (email, password) => {
  return axios.post(process.env.REACT_APP_API_USER_LOGIN, { email, password });
}

export const logout = async () => {
  return axios.get(process.env.REACT_APP_API_USER_LOGOUT);
}

export const register = async (email, password) => {
  return axios.post(process.env.REACT_APP_API_USER_REGISTER, { email, password });
}
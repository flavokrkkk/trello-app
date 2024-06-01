import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

export const $host = axios.create({
  baseURL: baseUrl.REACT_API_URL,
});

export const $authHost = axios.create({
  baseURL: baseUrl.REACT_API_URL,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

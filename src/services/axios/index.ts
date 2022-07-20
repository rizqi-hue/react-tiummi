import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_DATA_PROVIDER}`,
});

api.interceptors.request.use(
  function (config: any) {
    // const token = localStorage.getItem("token_access");
    // if (token) {
    //   config.headers["Authorization"] = `${token}`;
    // }
    config.headers["Content-Type"] = `Application/json`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;

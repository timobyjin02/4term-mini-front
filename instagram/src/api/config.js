import axios from "axios";
import { getToken } from "../utils/getToken";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_URL}`,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setHeader = () => {
  // axios 헤더에 token을 넣어준다
  instance.defaults.headers.common["Authorization"] = getToken();
};

export const removeHeader = () => {
  delete instance.defaults.common["Authorization"]; // axios header에서 Authorization 제거
};

// instance.interceptors.request.use(
//   function (request) {
//     return request;
//   },
//   function (error) {
//     return error;
//   }
// );

// instance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (!error.response.data) {
//       throw new Error("알 수 없는 오류");
//     }

//     throw error.response.data;
//   }
// );

export default instance;

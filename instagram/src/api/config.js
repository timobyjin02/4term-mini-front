import axios from "axios";

const instance = axios.create({
  baseURL: "http://15.164.232.205:8080/moae",
});

export const setHeader = token => {
  // axios 헤더에 token을 넣어준다
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

instance.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    return error;
  }
);

instance.interceptors.request.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.response.data) {
      throw new Error("알 수 없는 오류");
    }

    throw error.response.data;
  }
);

export default instance;

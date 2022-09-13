import jwtDecode from "jwt-decode";

export const getToken = () => {
  if (typeof window !== "undefined") return localStorage.getItem("jwtToken");
  return undefined;
};

export const decodingToken = () => {
  if (getToken()) return jwtDecode(localStorage.getItem("jwtToken"));
  return undefined;
};

export const getUserNo = () => {
  if (getToken()) return jwtDecode(localStorage.getItem("jwtToken")).userNo;
  return undefined;
};

export const getUserNickname = () => {
  if (getToken()) return jwtDecode(localStorage.getItem("jwtToken")).nickname;
  return undefined;
};

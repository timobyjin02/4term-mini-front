import { atom } from "recoil";
import { getToken } from "../utils/getToken";

export const userNo = atom({
  key: "userNo",
  default: null,
});

// export const token = atom({
//   key: "token",
//   default: null,
//   effects: [getToken()]
// })

// export const tokenItemState = selector({
//   key: 'tokenItemState',
//   get: async({get}) => {
//     const tokenState = get(token);
//   }
// })

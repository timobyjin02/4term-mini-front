import { atom, selector } from "recoil";

export const userNo = atom({
  key: "userNo",
  default: 0,
});

// export const select = selector({
//   key: "userNo",
//   get: ({ get }) => {
//     const num = get(userNo);
//     return num;
//   },
//   set: ({ set, get }, newUserNo) => {
//     return set(userNo, newUserNo);
//   },
// });

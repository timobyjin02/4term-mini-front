import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  decodingInfo: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserNo: (state, action) => {
      state.token = action.payload;
    },
    setDecodingInfo: (state, action) => {
      state.decodingInfo = action.payload;
    },
  },
});

export const { setUserNo, setDecodingInfo } = user.actions;
export default user.reducer;

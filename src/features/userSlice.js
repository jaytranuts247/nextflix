import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    subscription: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.subscription = null;
    },
    addSubcription: (state, action) => {
      state.subscription = action.payload;
    }
  }
});

export const { login, logout, addSubcription } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSubscription = (state) => state.user.subscription;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "register",
    initialState: {
      currentUser: null,
      isFetching: false,
    },
    reducers: {
      registerStart: (state) => {
        state.isFetching = true;
      },
      registerSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      },
      registerFailiure: (state) => {
        state.currentUser = null;
        state.isFetching = false;
      },
    },
});

export const { registerStart, registerSuccess, registerFailiure } = registerSlice.actions;
export default registerSlice.reducer;
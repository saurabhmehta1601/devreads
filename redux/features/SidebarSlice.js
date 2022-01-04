import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shouldOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    close: (state) => {
      state.shouldOpen = false;
    },
    open: (state) => {
      state.shouldOpen = true;
    },
    toggle: (state) => {
      state.shouldOpen = !state.shouldOpen;
    },
  },
});

export const { open, close, toggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;

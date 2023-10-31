import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getTheme(state, action) {
      state.theme = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;

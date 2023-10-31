import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import taskSlice from "./task-slice";

const store = configureStore({
  reducer: { todo: taskSlice.reducer, darkMode: themeSlice.reducer },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import taskSlice from "./task-slice";

const store = configureStore({
  reducer: { tasks: taskSlice.reducer, theme: themeSlice.reducer },
});

export default store;

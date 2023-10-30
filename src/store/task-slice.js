import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    replaceTasks(state, action) {
      state.tasks = action.payload;
    },
    add(state, action) {
      state.tasks = state.tasks.concat(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    completed(state, action) {
      const existTaskIndex = state.tasks.find(
        (task) => task.id === action.payload
      );
      existTaskIndex.completed = !existTaskIndex.completed;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removed(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    reset(state) {
      state.tasks = [];
      localStorage.removeItem("tasks");
    },
  },
});

const store = configureStore({
  reducer: taskSlice.reducer,
});

export const taskActions = taskSlice.actions;

export default store;

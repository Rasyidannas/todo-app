import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add(state, action) {
      state.tasks = state.tasks.concat(action.payload);
    },
    completed(state, action) {
      // state.tasks = state.tasks.filter((item) => item !== action.payload);
      const existTaskIndex = state.tasks.find(
        (task) => task.id === action.payload
      );
      existTaskIndex.completed = !existTaskIndex.completed;
      // console.log(existTaskIndex);
    },
    removed(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    reset(state) {
      state.tasks = [];
    },
  },
});

const store = configureStore({
  reducer: taskSlice.reducer,
});

export const taskActions = taskSlice.actions;

export default store;

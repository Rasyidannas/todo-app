import { createStore } from "redux";

const initialTaskState = {
  tasks: [],
  completedTasks: [],
};

const taskReducer = (state = initialTaskState, action) => {
  if (action.type === "ADD") {
    //this is for length more 0
    if (tasks.length) {
      return { ...state, tasks: state.tasks.concat(action.payload) };
    }

    return { ...state, tasks: action.payload };
  }

  if (action.type === "COMPLETED") {
    if (completedTasks.length) {
      return {
        tasks: state.tasks.filter((item) => item !== action.payload),
        completedTasks: state.tasks.concat(action.payload),
      };
    }

    return {
      tasks: state.tasks.filter((item) => item !== action.payload),
      completedTasks: action.payload,
    };
  }
};

const store = createStore(taskReducer);

export default store;

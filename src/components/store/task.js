import { createStore } from "redux";

const initialTaskState = {
   tasks: [],
   completedTasks: []
}

const taskReducer = (state = initialTaskState, action) => {
   if(action.type === "ADD") {
      // return {...state, completedTasks: }
   }
}
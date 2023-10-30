import { taskActions } from "./task-slice";

//this is fetching data from localStorage
export const fetchTasksData = () => {
  return (dispatch) => {
    const storedTaksInLocalStorage = localStorage.getItem("tasks");

    if (storedTaksInLocalStorage) {
      dispatch(taskActions.replaceTasks(JSON.parse(storedTaksInLocalStorage)));
    }
  };
};

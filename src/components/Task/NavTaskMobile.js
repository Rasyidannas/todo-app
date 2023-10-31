import { useDispatch } from "react-redux";

import Button from "../UI/Button";
import { taskActions } from "../../store/task-slice";

function NavTaskMobile({
  countActive,
  navLinkActive,
  allTasks,
  activeTasks,
  completedTasks,
}) {
  const dispatch = useDispatch();

  const clearTasksHandler = () => {
    dispatch(taskActions.reset());
  };

  return (
    <>
      <div className="md:hidden flex justify-between px-8 py-4">
        <p className=" text-sm text-darkGrayishBlue">
          {countActive > 1 ? `${countActive} items ` : `${countActive} item `}
          left
        </p>

        <Button
          className="text-sm text-darkGrayishBlue"
          onClick={clearTasksHandler}
        >
          Clear Completed
        </Button>
      </div>

      <div className=" absolute left-1/2 -translate-x-1/2 mt-4 w-full text-sm text-darkGrayishBlue bg-veryLightGray dark:bg-verydarkDesaturatedBlue rounded md:hidden flex justify-center gap-8">
        <Button
          onClick={allTasks}
          className={` p-4 ${navLinkActive === "all" ? "text-brightBlue" : ""}`}
        >
          All
        </Button>
        <Button
          onClick={activeTasks}
          className={` p-4 ${
            navLinkActive === "active" ? "text-brightBlue" : ""
          }`}
        >
          Active
        </Button>
        <Button
          onClick={completedTasks}
          className={` p-4 ${
            navLinkActive === "completed" ? "text-brightBlue" : ""
          }`}
        >
          Completed
        </Button>
      </div>
    </>
  );
}

export default NavTaskMobile;

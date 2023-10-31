import { useDispatch } from "react-redux";

import Button from "../UI/Button";
import { taskActions } from "../../store/task-slice";

function NavTask({
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
    <div className="hidden md:flex justify-between px-8 py-4">
      <p className=" text-sm text-darkGrayishBlue">
        {countActive > 1 ? `${countActive} items ` : `${countActive} item `}
        left
      </p>

      <div className=" text-sm text-darkGrayishBlue flex gap-4">
        <Button
          onClick={allTasks}
          className={`${navLinkActive === "all" ? "text-brightBlue" : ""}`}
        >
          All
        </Button>
        <Button
          onClick={activeTasks}
          className={`${navLinkActive === "active" ? "text-brightBlue" : ""}`}
        >
          Active
        </Button>
        <Button
          onClick={completedTasks}
          className={`${
            navLinkActive === "completed" ? "text-brightBlue" : ""
          }`}
        >
          Completed
        </Button>
      </div>
      <Button
        className="text-sm text-darkGrayishBlue"
        onClick={clearTasksHandler}
      >
        Clear Completed
      </Button>
    </div>
  );
}

export default NavTask;

import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task-slice";

import IconClose from "../Icons/IconClose";
import IconCheck from "../Icons/IconCheck";
import Button from "../UI/Button";

function TaskItem({ taskTitle, taskId, completed }) {
  //dispatch to redux
  const dispatch = useDispatch();

  //handler connect to dispatch redux
  const completedHandler = () => {
    dispatch(taskActions.completed(taskId));
  };

  const removedHandler = () => {
    dispatch(taskActions.removed(taskId));
  };

  return (
    <div className="w-full flex items-center gap-4 px-8 py-4 border-b border-lightGrayishBlue dark:border-veryDarkGrayishBlue group cursor-pointer">
      {/* check */}
      <Button
        className={`min-w-[1.5rem] h-6 rounded-2xl border border-lightGrayishBlue dark:border-veryDarkGrayishBlue flex items-center justify-center ${
          completed ? "check-background" : "bg-transparent"
        }`}
        type="button"
        onClick={completedHandler.bind(null, taskId)}
      >
        {completed && <IconCheck />}
      </Button>
      <div
        className={` w-3/4 text-left text-lg dark:text-lightGrayishBlue ${
          completed ? "line-through text-darkGrayishBlue" : ""
        }`}
      >
        <p>{taskTitle}</p>
      </div>
      {/* remove */}
      <Button
        className="flex items-center justify-center ml-auto md:invisible md:group-hover:visible transition-all"
        type="button"
        onClick={removedHandler.bind(null, taskId)}
      >
        <IconClose />
      </Button>
    </div>
  );
}

export default TaskItem;

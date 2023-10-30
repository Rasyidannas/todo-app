import { useSelector } from "react-redux";

import TaskItem from "./TaskItem";
import NavTask from "./NavTask";
import { useState } from "react";

function TaskList() {
  //retrive tasks from redux
  const tasks = useSelector((state) => state.tasks);

  //nav link active
  const [linkActive, setLinkActive] = useState("all");

  //nav task handler
  const [all, setAll] = useState(true);
  const allHandler = () => {
    setAll(true);
    setActive(false);
    setCompleted(false);

    setLinkActive("all");
  };

  const [active, setActive] = useState(false);
  const activeHandler = () => {
    setAll(false);
    setActive(true);
    setCompleted(false);

    setLinkActive("active");
  };
  const activeTasks = tasks.filter((task) => task.completed === false);

  const [completed, setCompleted] = useState(false);
  const completedHandler = () => {
    setAll(false);
    setActive(false);
    setCompleted(true);

    setLinkActive("completed");
  };
  const completedTasks = tasks.filter((task) => task.completed === true);

  return (
    <div className="rounded bg-veryLightGray dark:bg-verydarkDesaturatedBlue drop-shadow-lightShadow dark:drop-shadow-darkShadow">
      {/* show allTasks */}
      {all &&
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            taskId={task.id}
            taskTitle={task.title}
            completed={task.completed}
          />
        ))}

      {/* show activeTask */}
      {active &&
        activeTasks.map((task) => (
          <TaskItem
            key={task.id}
            taskId={task.id}
            taskTitle={task.title}
            completed={task.completed}
          />
        ))}

      {/* show completedTask */}
      {completed &&
        completedTasks.map((task) => (
          <TaskItem
            key={task.id}
            taskId={task.id}
            taskTitle={task.title}
            completed={task.completed}
          />
        ))}

      <NavTask
        countActive={activeTasks.length}
        navLinkActive={linkActive}
        allTasks={allHandler}
        activeTasks={activeHandler}
        completedTasks={completedHandler}
      />
    </div>
  );
}

export default TaskList;

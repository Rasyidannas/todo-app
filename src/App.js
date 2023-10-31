import "./styles.css";
import bgDesktopDark from "../src/assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../src/assets/images/bg-desktop-light.jpg";

import Card from "./components/UI/Card";
import BackgroundHeader from "./components/Layout/BackgroundHeader";
import CreateTodo from "./components/Form/CreateTodo";
import TaskList from "./components/Task/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksData } from "./store/task-action";
import { useEffect } from "react";
import DarkMode from "./components/Switch/DarkMode";

export default function App() {
  const theme = useSelector((state) => state.darkMode.theme);

  const dispatch = useDispatch();

  //get data from localStorage
  useEffect(() => {
    dispatch(fetchTasksData());
  }, [dispatch]);

  return (
    <>
      {theme === "light" && <BackgroundHeader imgSrc={bgDesktopLight} />}
      {theme === "dark" && <BackgroundHeader imgSrc={bgDesktopDark} />}
      <Card className="absolute flex flex-col w-2/5 gap-8 -translate-x-1/2 top-16 left-1/2">
        <div className="flex w-full ">
          <h1 className=" text-veryLightGray">TODO</h1>
          {/* Switch dark mode */}
          <div className="ml-auto">
            <DarkMode />
          </div>
        </div>
        <CreateTodo />
        <TaskList />
      </Card>
    </>
  );
}

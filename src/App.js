import "./styles.css";
import bgDesktopDark from "../src/assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../src/assets/images/bg-desktop-light.jpg";
import bgMobileDark from "../src/assets/images/bg-mobile-dark.jpg";
import bgMobileLight from "../src/assets/images/bg-mobile-light.jpg";

import Card from "./components/UI/Card";
import BackgroundHeader from "./components/Layout/BackgroundHeader";
import CreateTodo from "./components/Form/CreateTodo";
import TaskList from "./components/Task/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksData } from "./store/task-action";
import { useEffect } from "react";
import DarkMode from "./components/Switch/DarkMode";
import { fetchTheme } from "./store/theme-action";

export default function App() {
  const theme = useSelector((state) => state.darkMode.theme);

  const dispatch = useDispatch();

  //get data from localStorage
  useEffect(() => {
    dispatch(fetchTasksData());
    dispatch(fetchTheme());
  }, [dispatch]);

  return (
    <>
      {theme !== "dark"  && (
        <BackgroundHeader
          imgSrcDesktop={bgDesktopLight}
          imgSrcMobile={bgMobileLight}
        />
      )}
      {theme === "dark" && (
        <BackgroundHeader
          imgSrcDesktop={bgDesktopDark}
          imgSrcMobile={bgMobileDark}
        />
      )}
      <Card className="absolute flex flex-col w-4/5 md:w-5/12 gap-8 -translate-x-1/2 top-16 left-1/2">
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

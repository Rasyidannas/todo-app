import "./styles.css";
import bgDesktopDark from "../src/assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../src/assets/images/bg-desktop-light.jpg";

import Card from "./components/UI/Card";
import BackgroundHeader from "./components/Layout/BackgroundHeader";
import CreateTodo from "./components/Form/CreateTodo";
import Button from "./components/UI/Button";
import IconSun from "./components/Icons/IconSun";
import IconMoon from "./components/Icons/IconMoon";
import TaskList from "./components/Task/TaskList";
import { useDispatch } from "react-redux";
import { fetchTasksData } from "./store/task-action";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();

  //get data from localStorage
  useEffect(() => {
    dispatch(fetchTasksData());
  }, [dispatch]);

  return (
    <>
      <BackgroundHeader imgSrc={bgDesktopLight} />
      <Card className="absolute flex flex-col w-2/5 gap-8 -translate-x-1/2 top-16 left-1/2">
        <div className="flex w-full ">
          <h1 className=" text-veryLightGray">TODO</h1>
          <div className="ml-auto">
            <Button>
              <IconSun />
            </Button>
            <Button>
              <IconMoon />
            </Button>
          </div>
        </div>
        <CreateTodo />
        <TaskList />
      </Card>
    </>
  );
}

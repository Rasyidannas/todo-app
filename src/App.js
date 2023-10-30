import "./styles.css";
import Card from "./components/UI/Card";
import BackgroundHeader from "./components/Layout/BackgroundHeader";
import CreateTodo from "./components/Form/CreateTodo";
import Button from "./components/UI/Button";

import bgDesktopDark from "../src/assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../src/assets/images/bg-desktop-light.jpg";
import IconSun from "./components/Icons/IconSun";
import IconMoon from "./components/Icons/IconMoon";
import TaskList from "./components/Task/TaskList";

export default function App() {
  return (
    <>
      <BackgroundHeader imgSrc={bgDesktopLight} />
      <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-2/5 flex flex-col gap-8">
        <div className=" w-full flex">
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

import Button from "../UI/Button";
import IconSun from "../Icons/IconSun";
import IconMoon from "../Icons/IconMoon";
import { useEffect, useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState("light");

  const lightHandler = () => {
    setTheme("light");

    localStorage.setItem("theme", "light");
  };

  const darkHandler = () => {
    setTheme("dark");

    localStorage.setItem("theme", "dark");
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    //store in localStorage
    //  localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <Button onClick={lightHandler}>
        <IconSun />
      </Button>
      <Button onClick={darkHandler}>
        <IconMoon />
      </Button>
    </>
  );
}

export default DarkMode;

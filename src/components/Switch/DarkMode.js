import Button from "../UI/Button";
import IconSun from "../Icons/IconSun";
import IconMoon from "../Icons/IconMoon";
import { useEffect, useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState("light");

  const switchHandler = (value) => {
    setTheme(value);

    localStorage.setItem("theme", value);
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {theme !== "light" && (
        <Button onClick={switchHandler.bind(null, "light")}>
          <IconSun />
        </Button>
      )}
      {theme !== "dark" && (
        <Button onClick={switchHandler.bind(null, "dark")}>
          <IconMoon />
        </Button>
      )}
    </>
  );
}

export default DarkMode;

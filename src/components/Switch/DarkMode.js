import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme-slice";

import Button from "../UI/Button";
import IconSun from "../Icons/IconSun";
import IconMoon from "../Icons/IconMoon";

function DarkMode() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.darkMode.theme);

  const switchHandler = (value) => {
    dispatch(themeActions.setTheme(value));
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

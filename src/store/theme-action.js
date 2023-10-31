import { themeActions } from "./theme-slice";

export const fetchTheme = () => {
  return (dispatch) => {
    const storedThemeInLocalStorage = localStorage.getItem("theme");

    if (storedThemeInLocalStorage) {
      dispatch(themeActions.getTheme(storedThemeInLocalStorage));
    }
  };
};

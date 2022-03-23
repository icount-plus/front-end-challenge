import { useState } from "react";

import ThemeButton from "./ThemeButton";
import classes from "./index.module.css";

const OSDefaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

if (OSDefaultTheme === "dark") {
  document.body.classList.add(OSDefaultTheme);
}

function ThemeSwitcherMenu() {
  const [isThemeMenuDisplayed, setIsThemeMenuDisplayed] = useState(false);

  function toggleMenu() {
    setIsThemeMenuDisplayed((prevState) => {
      return !prevState;
    });
  }

  function changeThemeHandler(theme = OSDefaultTheme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else if (theme === "os") {
      if (OSDefaultTheme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList = "theme-transition";
      }
    } else if (theme === "light") {
      document.body.classList = "theme-transition";
    }

    setIsThemeMenuDisplayed(false);
  }

  const Dropdown = () => {
    return (
      <ul className={classes.Theme__menu}>
        <ThemeButton
          onSelection={() => changeThemeHandler("os")}
          faIcon="fa-solid fa-circle-half-stroke"
          text="Padrão do Sistema"
          key="OS"
        />
        <ThemeButton
          onSelection={() => changeThemeHandler("light")}
          faIcon="fa-solid fa-sun"
          text="Claro"
          key="Light"
        />
        <ThemeButton
          onSelection={() => changeThemeHandler("dark")}
          faIcon="fa-solid fa-moon"
          text="Escuro"
          key="Dark"
        />
      </ul>
    );
  };

  return (
    <div className={classes.Theme__container}>
      {isThemeMenuDisplayed && <Dropdown />}
      <ThemeButton
        showMenu={toggleMenu}
        faIcon="fa-solid fa-circle-half-stroke"
        text="Tema"
      />
    </div>
  );
}

export default ThemeSwitcherMenu;

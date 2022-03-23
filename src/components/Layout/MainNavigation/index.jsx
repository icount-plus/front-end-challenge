import { useState } from "react";

import Sidebar from "../Sidebar";
import SidebarButton from "../Sidebar/SidebarButton";
import SearchBar from "../../ui/SearchBar";
import Backdrop from "../../ui/Backdrop";
import classes from "./index.module.css";

function MainNavigation() {
  const [sidebarMenuIsDisplayed, setSidebarMenuIsDisplayed] = useState(false);
  const [searchBarIsDisplayed, setSearchBarIsDisplayed] = useState(false);

  function toggleSidebarMenu() {
    setSidebarMenuIsDisplayed((prevState) => {
      return !prevState;
    });
  }

  function toggleSearchBar() {
    setSearchBarIsDisplayed((prevState) => {
      return !prevState;
    });
  }

  return (
    <header className={classes.MainNavigation__wrapper}>
      <div className={classes.MainNavigation__container}>
        {sidebarMenuIsDisplayed && <Sidebar closeSidebar={toggleSidebarMenu} />}
        {sidebarMenuIsDisplayed && (
          <Backdrop closeSidebar={toggleSidebarMenu} />
        )}
        <SidebarButton toggleSidebarMenu={toggleSidebarMenu} />
        <h2>
          DevWeather <span className="fa-solid fa-code"></span>
        </h2>
        <div className={classes.MainNavigation__rightSection}>
          {searchBarIsDisplayed && <SearchBar onSelection={toggleSearchBar} />}
          <button
            onClick={toggleSearchBar}
            className={classes.MainNavigation__addCityButton}
            type="button"
          >
            <i
              className={
                searchBarIsDisplayed ? "fa-solid fa-xmark" : "fa-solid fa-plus"
              }
            ></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;

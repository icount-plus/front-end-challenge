import SidebarButton from "./SidebarButton";
import SidebarDivider from "../../ui/SidebarDivider/";
import YourCitiesList from "../../WeatherComponents/YourCitiesList";
import ThemeSwitcherMenu from "../../ui/ThemeSwitcherMenu";
import classes from "./index.module.css";

function Sidebar(props) {
  return (
    <aside className={classes.Sidebar__wrapper}>
      <div className={classes.Sidebar__container}>
        <div className={classes.Sidebar_header}>
          <SidebarButton toggleSidebarMenu={props.closeSidebar} />
          <h2>
            DW <span className="fa-solid fa-code"></span>
          </h2>
        </div>
        <div className={classes.Sidebar__content}>
          <SidebarDivider
            icon="fa-solid fa-location-pin"
            text="Suas localizações"
          />
          <YourCitiesList toggleSidebarMenu={props.closeSidebar} />
        </div>
        <div className={classes.Sidebar__footer}>
          <ThemeSwitcherMenu />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

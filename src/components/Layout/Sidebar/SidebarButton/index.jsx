import classes from "./index.module.css";

function SidebarButton(props) {
  return (
    <button
      onClick={props.toggleSidebarMenu}
      type="button"
      className={classes.SidebarButton__container}
    >
      <div className="line-01"></div>
      <div className="line-02"></div>
      <div className="line-03"></div>
    </button>
  );
}

export default SidebarButton;

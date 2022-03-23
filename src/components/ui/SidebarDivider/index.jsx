import classes from "./index.module.css";

function SidebarDivider(props) {
  return (
    <div className={classes.SidebarDivider__container}>
      <div className={classes.SidebarDivider__content}>
        <i className={props.icon}></i>
        <h3>{props.text}</h3>
      </div>
      <hr />
    </div>
  );
}

export default SidebarDivider;

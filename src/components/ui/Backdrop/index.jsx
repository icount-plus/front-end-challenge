import classes from "./index.module.css";

function Backdrop(props) {
  return <div onClick={props.closeSidebar} className={classes.Backdrop}></div>;
}

export default Backdrop;

import { Fragment } from "react";
import styles from "./TopMenu.module.css";
import CustomButton from "./CustomButton";

const TopMenu = () => {
  return (
    <Fragment>
      <h2 className={styles.logo}>Tasks Master</h2>
      <div className={styles["select_menu"]}>
        <CustomButton name="Open Menu" />
        <CustomButton name="Show Hidden" />
      </div>
    </Fragment>
  );
};

export default TopMenu;

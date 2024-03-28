import { useState } from "react";
import styles from "./CustomButton.module.css";

const CustomButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  const OnHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles["custom_button"]} onClick={OnHandler}>
      <p className={styles["custom_button_name"]}>{props.name}</p>
      <p
        className={`${styles["custom_button_on"]} ${
          isActive ? styles.active : ""
        }`}
      >
        •
      </p>
    </div>
  );
};

export default CustomButton;

import styles from "./NewTaskButton.module.css";

const NewTaskButton = (props) => {
  return <button className={styles["form_button"]}>{props.name}</button>;
};

export default NewTaskButton;

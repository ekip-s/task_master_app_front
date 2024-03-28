import styles from "./SpaceSelector.module.css";

const SpaceSelector = ({ children }) => {
  return <div className={styles.itemSelector}>{children}</div>;
};

export default SpaceSelector;

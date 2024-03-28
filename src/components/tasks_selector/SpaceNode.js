import styles from "./SpaceNode.module.css";

const SpaceNode = (props) => {
  const elemHandler = (event) => {
    if (event.target.tagName != "BUTTON") {
      console.log("elemHandler");
    }
  };

  const lvlUpHandler = () => {
    console.log("lvlUpHandler");
  };

  const lvlDownHandler = () => {
    console.log("lvlDownHandler");
  };
  return (
    <div className={styles.nodes} onClick={elemHandler}>
      <h4>{props.name}</h4>
      <div>
        <div>
          <h5>Type:</h5>
          <p>{props.type}</p>
        </div>
        <div>
          <h5>lvl:</h5>
          <p>{props.lvl}</p>
        </div>
      </div>
      <div>
        <div>
          <h5>Change lvl:</h5>
          <button onClick={lvlUpHandler}>▲</button>
          <button onClick={lvlDownHandler}>▼</button>
        </div>
        <div>
          <p>•</p>
        </div>
      </div>
    </div>
  );
};

export default SpaceNode;

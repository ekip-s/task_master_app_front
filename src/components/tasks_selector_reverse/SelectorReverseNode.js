import { Fragment } from "react";
import styles from "./SelectorReverseNode.module.css";

const SelectorReverseNode = (props) => {
  return (
    <div>
      {props.name}
      {props.description}
    </div>
  );
};

export default SelectorReverseNode;

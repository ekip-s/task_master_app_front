import styles from "./SelectorReverse.module.css";
import SpaceSelectorReverse from "./../tasks_selector_reverse/SpaceSelectorReverse";
import SelectorReverseNode from "./SelectorReverseNode";
const SelectorReverse = () => {
  return (
    <div className={styles.menu}>
      <h4>Основные Задачи:</h4>
      <SpaceSelectorReverse>
        {listInfos.map((node) => {
          return (
            <SelectorReverseNode
              name={node.name}
              description={node.description}
            />
          );
        })}
      </SpaceSelectorReverse>
    </div>
  );
};

export default SelectorReverse;

const listInfos = [
  {
    name: "Задача 1",
    description: "Описание",
    lvl: 1,
  },
  {
    name: "Задача 1",
    description: "Описание",
    lvl: 1,
  },
];

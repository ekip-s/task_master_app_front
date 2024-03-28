import { Fragment } from "react";
import styles from "./SpaceList.module.css";
import SpaceNode from "./SpaceNode";

const SpaceList = () => {
  return (
    <Fragment>
      {elemListTests.map((elem) => {
        return <SpaceNode name={elem.name} type={elem.type} lvl={elem.lvl} />;
      })}
    </Fragment>
  );
};

export default SpaceList;

const elemListTests = [
  {
    name: "Универсальная процедура",
    type: "project",
    lvl: 1,
  },
  {
    name: "Универсальная процедура",
    type: "project",
    lvl: 1,
  },
];

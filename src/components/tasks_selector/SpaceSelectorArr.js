import { Fragment } from "react";
import styles from "./SpaceSelectorArr.module.css";
import SpaceSelector from "./../tasks_selector/SpaceSelector";
import SpaceList from "./../tasks_selector/SpaceList";
import NewTaskButton from "./../tasks_selector/NewTaskButton";
import FormMaster from "./../form_master/FormMaster";

const SpaceSelectorArr = () => {
  return (
    <Fragment>
      <FormMaster state="new_project_form" />
      <NewTaskButton name="Опять Работа" />
      <SpaceSelector>
        <SpaceList />
      </SpaceSelector>
    </Fragment>
  );
};

export default SpaceSelectorArr;

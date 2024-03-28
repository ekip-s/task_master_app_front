import styles from "./FormMaster.module.css";
import ReactDom from "react-dom";
import Card from "./../ui/Card";
import NewProjectForm from "./NewProjectForm";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal}></div>;
};

const Form = (props) => {
  const getForm = (state) => {
    if (state === "new_project_form") {
      return <NewProjectForm />; //<AccountForm onCloseModal={props.onCloseModal} />;
    } else {
      <p>Такой формы нет.</p>;
    }
  };

  return <Card className={styles.modal}>{getForm(props.state)}</Card>;
};

const FormMaster = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <Form state={props.state} onCloseModal={props.onCloseModal} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default FormMaster;

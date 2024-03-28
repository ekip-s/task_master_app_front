import { Fragment, useState } from "react";
import style from "./App.module.css";
import TopMenu from "./components/top_menu/TopMenu";
import SpaceSelector from "./components/tasks_selector/SpaceSelector";
import SpaceList from "./components/tasks_selector/SpaceList";
import SelectorReverse from "./components/tasks_selector_reverse/SelectorReverse";
import NewTaskButton from "./components/tasks_selector/NewTaskButton";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setIsOpenMenu(() => {
      return !isOpenMenu;
    });
  };

  return (
    <Fragment>
      <header className={style.header}>
        <TopMenu onOpenMenu={openMenuHandler} />
      </header>
      <main className={style.main}>
        <section className={style["mainsection"]}>
          {isOpenMenu && ( //переключение по кнопке
            <Fragment>
              <NewTaskButton name="Опять Работа" />
              <SpaceSelector>
                <SpaceList />
              </SpaceSelector>
            </Fragment>
          )}
          <section className={style.bodyinfo}>
            <SelectorReverse />
            <section></section>
          </section>
        </section>
      </main>
    </Fragment>
  );
}

export default App;

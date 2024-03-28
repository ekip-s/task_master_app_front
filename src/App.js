import { Fragment } from "react";
import style from "./App.module.css";
import TopMenu from "./components/top_menu/TopMenu";
import SpaceSelector from "./components/tasks_selector/SpaceSelector";
import SpaceList from "./components/tasks_selector/SpaceList";
import SpaceSelectorReverse from "./components/tasks_selector_reverse/SpaceSelectorReverse";

function App() {
  return (
    <Fragment>
      <header className={style.header}>
        <TopMenu />
      </header>
      <main className={style.main}>
        <section className={style["mainsection"]}>
          {true && ( //переключение по кнопке
            <SpaceSelector>
              <SpaceList />
            </SpaceSelector>
          )}
          <section>
            <SpaceSelectorReverse>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
              <div>Element 3</div>
              <div>Element 4</div>
              <div>Element 5</div>
              <div>Element 1</div>
              <div>Element 2</div>
            </SpaceSelectorReverse>
          </section>
        </section>
      </main>
    </Fragment>
  );
}

export default App;

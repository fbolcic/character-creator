import styles from "./App.module.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header text="Character Creator" />
        <div className={styles.creatorWrapper}>
          <div className={styles.creatorInputs}></div>
        </div>
      </div>
    </div>
  );
}

export default App;

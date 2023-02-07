import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header text="Character Creator" />
        <div className={styles.creatorWrapper}>
          <div className={styles.creatorInputs}>
            <Button text="Generate" onClick={() => console.log("Generate button clicked!")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

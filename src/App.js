import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.heading}>Hello World</h1>
        <div className={styles.creatorWrapper}>
          <div className={styles.creatorInputs}></div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const [name, setName] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header text="Character Creator" />
        <div className={styles.creatorWrapper}>
          <div className={styles.creatorInputs}>
            <Input value={name} onChange={setName} />
            <Button text="Generate" onClick={() => console.log("Character Name: ", name)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

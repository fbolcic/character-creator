import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");

  const character = { name, superpower };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header text="Character Creator" />
        <div className={styles.creatorWrapper}>
          <div className={styles.creatorInputs}>
            <Input label="Name" value={name} onChange={setName} />
            <Input label="Superpower" value={superpower} onChange={setSuperpower} />
            <Button text="Generate" onClick={() => console.log("Character: ", character)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

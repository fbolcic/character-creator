import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Radio } from "./components/Radio";

function App() {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [gender, setGender] = useState("female");

  const character = { name, superpower, gender };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header text="Character Creator" />
        <div className={styles.creatorWrapper}>
          <div className={styles.creatorInputs}>
            <Input label="Name" value={name} onChange={setName} />
            <Input label="Superpower" value={superpower} onChange={setSuperpower} />
            <Radio label="Gender" options={["male", "female"]} value={gender} onChange={setGender} />
            <Button text="Generate" onClick={() => console.log("Character: ", character)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

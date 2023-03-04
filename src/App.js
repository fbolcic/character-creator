import { useState } from "react";

import { useGeneratedImage } from "./hooks";
import { generatePromptFromCharacter } from "./utils";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Radio } from "./components/Radio";
import { Textarea } from "./components/Textarea";
import { Separator } from "./components/Separator";
import { Image } from "./components/Image";

import styles from "./App.module.css";

function App() {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [gender, setGender] = useState("female");
  const [description, setDescription] = useState("");

  const { getImageUrl, imageUrl, isIdle, isLoading, isError, isSuccess } = useGeneratedImage();

  const character = { name, superpower, gender, description };

  function handleGenerate() {
    const prompt = generatePromptFromCharacter(character);
    getImageUrl(prompt);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header text="Character Creator" />
        <div className={styles.creatorWrapper}>
          <div className={styles.creatorInputs}>
            <Input label="Name" value={name} onChange={setName} />
            <Input label="Superpower" value={superpower} onChange={setSuperpower} />
            <Radio label="Gender" options={["male", "female"]} value={gender} onChange={setGender} />
            <Textarea label="Description" value={description} onChange={setDescription} />
            <Button text="Generate" onClick={handleGenerate} />
          </div>
          <Separator />
          <Image imageUrl={imageUrl} isIdle={isIdle} isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
        </div>
      </div>
    </div>
  );
}

export default App;

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
  const [character, setCharacter] = useState({
    name: "",
    superpower: "",
    gender: "female",
    description: "",
  });

  const { getImageUrl, imageUrl, isIdle, isLoading, isError, isSuccess } = useGeneratedImage();

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
            <Input label="Name" value={character.name} onChange={(name) => setCharacter({ ...character, name })} />
            <Input
              label="Superpower"
              value={character.superpower}
              onChange={(superpower) => setCharacter({ ...character, superpower })}
            />
            <Radio
              label="Gender"
              options={["male", "female"]}
              value={character.gender}
              onChange={(gender) => setCharacter({ ...character, gender })}
            />
            <Textarea
              label="Description"
              value={character.description}
              onChange={(description) => setCharacter({ ...character, description })}
            />
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

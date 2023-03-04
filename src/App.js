import { useState } from "react";

import { useGeneratedImage } from "./hooks";
import { generatePromptFromCharacter } from "./utils";
import { Header, Button, Input, Radio, Textarea, Separator, Image } from "./components";

import styles from "./App.module.css";

function App() {
  const { getImageUrl, imageUrl, isIdle, isLoading, isError, isSuccess } = useGeneratedImage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header text="Character Creator" />
        <div className={styles.creatorWrapper}>
          <CharacterForm onGenerate={getImageUrl} />
          <Separator />
          <Image imageUrl={imageUrl} isIdle={isIdle} isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
        </div>
      </div>
    </div>
  );
}

function CharacterForm(props) {
  const [character, setCharacter] = useState({
    name: "",
    superpower: "",
    gender: "female",
    description: "",
  });

  return (
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
      <Button text="Generate" onClick={() => props.onGenerate(generatePromptFromCharacter(character))} />
    </div>
  );
}

export default App;

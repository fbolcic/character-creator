export function generatePromptFromCharacter(character) {
  if (isCharacterDataEmpty(character)) {
    return "";
  }

  let prompt = `A superhero whose name is ${character.name}. This is ${
    character.gender === "male" ? "his" : "her"
  } superpower: ${character.superpower}. ${
    character.description
  }. The hero should be depicted as a photorealistic video game character.`;

  return prompt;
}

function isCharacterDataEmpty(character) {
  if (!character) {
    return true;
  }

  if (!character.name) {
    return true;
  }

  if (!character.superpower) {
    return true;
  }

  if (!character.description) {
    return true;
  }

  return false;
}

import { SAMPLE_DATA_CHARACTERS } from "src/data/sample";
import { getLocal, setLocal } from "./localStorage";

export const getAllCharacters = async () => {
    const characters = getLocal("characters");
    if (characters) return Object.values(characters).sort((a, b) => a.order - b.order);
    return [];
};

export const createCharacter = async ({ name, ilvl }) => {
    const characters = getLocal("characters") ?? {};
    const newCharacters = { ...characters };

    const newCharacter = {
        name,
        ilvl: isNaN(parseInt(ilvl)) ? null : ilvl,
    };
    newCharacters[name] = newCharacter;
    setLocal("characters", newCharacters);
};

export const deleteCharacter = async ({ name }) => {
    const characters = getLocal("characters") ?? {};
    const newCharacters = { ...characters };
    delete newCharacters[name];
    setLocal("characters", newCharacters);
};

export const updateCharacter = async () => {};

export const resetSampleCharacters = async () => {
    setLocal("characters", SAMPLE_DATA_CHARACTERS);
};

import { SAMPLE_DATA_CHARACTERS } from 'src/data/sample';
import { getLocal, setLocal } from './localStorage';

const STORAGE_KEY = 'characters';

export const getAllCharacters = async () => {
    const characters = getLocal(STORAGE_KEY);
    if (characters) {
        return Object.values(characters)
            .sort((a, b) => a.order - b.order)
            .map((char) => {
                if (char.ilvl) return { ...char, ilvl: parseInt(char.ilvl, 10) };
                return char;
            });
    }
    return [];
};

export const createCharacter = async ({ name, ilvl }) => {
    const characters = getLocal(STORAGE_KEY) ?? {};
    const newCharacters = { ...characters };

    const newCharacter = {
        name,
        ilvl: Number.isNaN(parseInt(ilvl, 10)) ? null : ilvl,
    };
    newCharacters[name] = newCharacter;
    setLocal(STORAGE_KEY, newCharacters);
};

export const deleteCharacter = async ({ name }) => {
    const characters = getLocal(STORAGE_KEY) ?? {};
    const newCharacters = { ...characters };
    delete newCharacters[name];
    setLocal(STORAGE_KEY, newCharacters);
};

export const updateCharacter = async () => {};

export const resetSampleCharacters = async () => {
    setLocal(STORAGE_KEY, SAMPLE_DATA_CHARACTERS);
};

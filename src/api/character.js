import { SAMPLE_DATA_CHARACTERS } from 'src/data/sample';
import { getLocal, setLocal } from './localStorage';

export const CHARACTER_KEY = 'characters';

export const getAllCharacters = async () => {
    const characters = getLocal(CHARACTER_KEY);
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
    const characters = getLocal(CHARACTER_KEY) ?? {};
    const newCharacters = { ...characters };

    const newCharacter = {
        name,
        ilvl: Number.isNaN(parseInt(ilvl, 10)) ? null : ilvl,
    };
    newCharacters[name] = newCharacter;
    setLocal(CHARACTER_KEY, newCharacters);
};

export const deleteCharacter = async ({ name }) => {
    const characters = getLocal(CHARACTER_KEY) ?? {};
    const newCharacters = { ...characters };
    delete newCharacters[name];
    setLocal(CHARACTER_KEY, newCharacters);
};

export const updateCharacter = async () => {};

export const updateAllCharacters = async (charactersArr) => {
    const newCharacters = {};
    charactersArr.forEach((char) => {
        newCharacters[char.name] = char;
    });

    setLocal(CHARACTER_KEY, newCharacters);
};

export const resetSampleCharacters = async () => {
    setLocal(CHARACTER_KEY, SAMPLE_DATA_CHARACTERS);
};

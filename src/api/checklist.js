import { DAILIES, WEEKLIES } from 'src/data/events';
import { getLocal, setLocal } from './localStorage';

const STORAGE_KEY = 'checklist';

export const getChecklist = async () => {
    return getLocal(STORAGE_KEY) ?? {};
};

export const setChecklistItem = ({ value, index, character, event }) => {
    const checklist = getLocal(STORAGE_KEY);
    const newChecklist = { ...checklist };
    const characterChecklist = newChecklist[character.name];

    if (characterChecklist) {
        if (value) {
            // add to field
            characterChecklist[event.id] = characterChecklist[event.id]
                ? [...characterChecklist[event.id], index]
                : [index];
        } else if (characterChecklist[event.id]) {
            // remove from field
            characterChecklist[event.id] = characterChecklist[event.id].filter((i) => i !== index);
        }
    } else if (value) {
        newChecklist[character.name] = { [event.id]: [index] };
    }

    setLocal(STORAGE_KEY, newChecklist);
};

export const resetChecklistDailies = () => {
    const checklist = getLocal(STORAGE_KEY);
    const newChecklist = { ...checklist };

    Object.keys(newChecklist).forEach((characterName) => {
        Object.keys(newChecklist[characterName]).forEach((eventName) => {
            if (DAILIES.find((daily) => eventName === daily.id)) {
                delete newChecklist[characterName][eventName];
            }
        });
    });

    setLocal(STORAGE_KEY, newChecklist);
};
export const resetChecklistWeeklies = () => {
    const checklist = getLocal(STORAGE_KEY);
    const newChecklist = { ...checklist };

    Object.keys(newChecklist).forEach((characterName) => {
        Object.keys(newChecklist[characterName]).forEach((eventName) => {
            if (WEEKLIES.find((weekly) => eventName === weekly.id)) {
                delete newChecklist[characterName][eventName];
            }
        });
    });

    setLocal(STORAGE_KEY, newChecklist);
};

import { ABYSSALS, DAILIES, TYPE_DAILY, TYPE_WEEKLY, WEEKLIES } from 'src/data/events';
import { getLocal, setLocal } from './localStorage';

export const CHECKLIST_KEY = 'checklist';
export const CHECKLIST_CUSTOM_EVENTS = 'checklist_custom_events';
export const CHECKLIST_HIDDEN_EVENTS = 'checklist_hidden_events';

export const getChecklist = async () => {
    return getLocal(CHECKLIST_KEY) ?? {};
};

export const setChecklistItem = ({ value, index, character, event }) => {
    const checklist = getLocal(CHECKLIST_KEY);
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

    setLocal(CHECKLIST_KEY, newChecklist);
};

export const resetChecklist = (type) => {
    const checklist = getLocal(CHECKLIST_KEY);
    const customEvents = getLocal(CHECKLIST_CUSTOM_EVENTS);
    const newChecklist = { ...checklist };
    let arrayToCheck = [];
    if (type === TYPE_DAILY) arrayToCheck = DAILIES;
    if (type === TYPE_WEEKLY) arrayToCheck = [...WEEKLIES, ...ABYSSALS];

    Object.keys(newChecklist).forEach((characterName) => {
        Object.keys(newChecklist[characterName]).forEach((eventId) => {
            if (arrayToCheck.find((e) => eventId === e.id)) {
                // default events
                delete newChecklist[characterName][eventId];
            } else if (customEvents && customEvents[eventId]) {
                // custom events
                delete newChecklist[characterName][eventId];
            }
        });
    });

    setLocal(CHECKLIST_KEY, newChecklist);
};

export const resetChecklistDailies = () => {
    resetChecklist(TYPE_DAILY);
};

export const resetChecklistWeeklies = () => {
    resetChecklist(TYPE_WEEKLY);
};

// CUSTOM EVENTS
export const getChecklistCustomEvents = async () => {
    return getLocal(CHECKLIST_CUSTOM_EVENTS) ?? {};
};

export const setChecklistCustomEvents = async (newCustomEvents = {}) => {
    setLocal(CHECKLIST_CUSTOM_EVENTS, newCustomEvents);
};

// HIDDEN EVENTS
export const getChecklistHiddenEvents = async () => {
    return getLocal(CHECKLIST_HIDDEN_EVENTS) ?? {};
};

export const setChecklistHiddenEvents = async (newHiddenEvents = {}) => {
    setLocal(CHECKLIST_HIDDEN_EVENTS, newHiddenEvents);
};

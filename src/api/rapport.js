import { getLocal, setLocal } from './localStorage';

export const RAPPORT_KEY = 'rapport';

export const getRapport = async () => {
    const rapport = getLocal(RAPPORT_KEY);
    return rapport || {};
};

export const setRapportComplete = async ({ value, npc }) => {
    setRapportKeyValue({ key: 'isComplete', value, npc });
};

export const setRapportFavorite = async ({ value, npc }) => {
    setRapportKeyValue({ key: 'isFavorite', value, npc });
};

export const setRapportKeyValue = async ({ key, value, npc }) => {
    const rapport = getLocal(RAPPORT_KEY) || {};
    const newRapport = { ...rapport };

    if (!newRapport[npc.name] || typeof newRapport[npc.name] !== 'object') {
        newRapport[npc.name] = {};
    }
    newRapport[npc.name][key] = value;

    setLocal(RAPPORT_KEY, newRapport);
};

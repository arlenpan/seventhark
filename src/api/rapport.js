import { getLocal, setLocal } from './localStorage';

export const RAPPORT_KEY = 'rapport';

export const getRapport = async () => {
    const rapport = getLocal(RAPPORT_KEY);
    return rapport || {};
};

export const setRapportComplete = async ({ value, npc }) => {
    const rapport = getLocal(RAPPORT_KEY) || {};
    const newRapport = { ...rapport };

    if (!newRapport[npc.name] || typeof newRapport[npc.name] !== 'object') {
        newRapport[npc.name] = {};
    }
    newRapport[npc.name].isComplete = value;

    setLocal(RAPPORT_KEY, newRapport);
};

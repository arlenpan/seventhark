import { getLocal, setLocal } from './localStorage';

export const RAPPORT_KEY = 'rapport';

export const getRapport = async () => {
    const rapport = getLocal(RAPPORT_KEY);
    return rapport || {};
};

export const setNPC = async ({ value, npc }) => {
    const rapport = getLocal(RAPPORT_KEY) || {};
    const newRapport = { ...rapport };
    newRapport[npc.name] = value;
    setLocal(RAPPORT_KEY, newRapport);
};

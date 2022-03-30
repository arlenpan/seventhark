import { getLocal, setLocal } from './localStorage';

const STORAGE_KEY = 'rapport';

export const getRapport = async () => {
    const rapport = getLocal(STORAGE_KEY);
    return rapport || {};
};

export const setNPC = async ({ value, npc }) => {
    const rapport = getLocal(STORAGE_KEY) || {};
    const newRapport = { ...rapport };
    newRapport[npc.name] = value;
    setLocal(STORAGE_KEY, newRapport);
};

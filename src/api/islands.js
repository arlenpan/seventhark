import { getLocal, setLocal } from './localStorage';

const STORAGE_KEY = 'islands';

export const getIslands = async () => {
    const islands = getLocal(STORAGE_KEY);
    return islands || {};
};

export const setIsland = async ({ value, island }) => {
    const islands = getLocal(STORAGE_KEY) || {};
    const newIslands = { ...islands };
    newIslands[island.name] = value;
    setLocal(STORAGE_KEY, newIslands);
};

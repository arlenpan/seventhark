import { getLocal, setLocal } from './localStorage';

export const ISLAND_KEY = 'islands';

export const getIslands = async () => {
    const islands = getLocal(ISLAND_KEY);
    return islands || {};
};

export const setIsland = async ({ value, island }) => {
    const islands = getLocal(ISLAND_KEY) || {};
    const newIslands = { ...islands };
    newIslands[island.name] = value;
    setLocal(ISLAND_KEY, newIslands);
};

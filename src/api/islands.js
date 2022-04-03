import { getLocal, setLocal } from './localStorage';

export const ISLAND_KEY = 'islands';

export const getIslands = async () => {
    const islands = getLocal(ISLAND_KEY);
    return islands || {};
};

export const setIslandComplete = async ({ value, island }) => {
    setIslandKeyValue({ key: 'isComplete', value, island });
};

export const setIslandFavorite = async ({ value, island }) => {
    setIslandKeyValue({ key: 'isFavorite', value, island });
};

export const setIslandKeyValue = async ({ key, value, island }) => {
    const islands = getLocal(ISLAND_KEY) || {};
    const newIslands = { ...islands };

    if (!newIslands[island.name] || typeof newIslands[island.name] !== 'object') {
        newIslands[island.name] = {};
    }
    newIslands[island.name][key] = value;

    setLocal(ISLAND_KEY, newIslands);
};

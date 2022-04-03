import { getLocal, setLocal } from './localStorage';

export const ISLAND_KEY = 'islands';

export const getIslands = async () => {
    const islands = getLocal(ISLAND_KEY);
    return islands || {};
};

export const setIslandComplete = async ({ value, island }) => {
    const islands = getLocal(ISLAND_KEY) || {};
    const newIslands = { ...islands };

    if (!newIslands[island.name] || typeof newIslands[island.name] !== 'object') {
        newIslands[island.name] = {};
    }
    newIslands[island.name].isComplete = value;

    setLocal(ISLAND_KEY, newIslands);
};

// export const setIslandComplete = async ({ value, island }) => {
//     const islands = getLocal(ISLAND_KEY) || {};
//     const newIslands = { ...islands };

//     if (!newIslands[island.name]) newIslands[island.name] = {};
//     newIslands[island.name].completed = value;

//     setLocal(ISLAND_KEY, newIslands);
// };

import { getLocal, setLocal } from './localStorage';

const TIERS_KEY = 'tiers';
const TIERS_DEFAULT = { 1: true, 2: true, 3: true };
export const getActiveTiers = async () => {
    const tiers = getLocal(TIERS_KEY);

    // initialize
    if (!tiers) {
        setLocal(TIERS_KEY, TIERS_DEFAULT);
        return TIERS_DEFAULT;
    }

    return tiers;
};

export const setActiveTier = async (tier, value) => {
    const tiers = getLocal(TIERS_KEY);
    const newTiers = tiers ? { ...tiers } : {};
    newTiers[tier] = value;
    setLocal(TIERS_KEY, newTiers);
};

const COSTS_KEY = 'costs';
export const getCosts = async () => getLocal(COSTS_KEY) || {};
export const setCost = async (itemId, goldCost) => {
    const costs = getLocal(COSTS_KEY);
    const newCosts = costs ? { ...costs } : {};
    newCosts[itemId] = goldCost;
    setLocal(COSTS_KEY, newCosts);
};

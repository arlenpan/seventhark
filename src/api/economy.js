import { getLocal, setLocal } from './localStorage';

const TIERS_KEY = 'tiers';
export const getActiveTiers = async () => getLocal(TIERS_KEY) || {};
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

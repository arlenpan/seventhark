// imports from lost-ark-market

import { ALL_MATERIALS, CRYSTALS, ROYAL_CRYSTALS } from 'src/data/economy';
import { getCosts, setCost } from './economy';

const BASE_URL = 'https://www.lostarkmarket.online/api/export-market-live';

export const REGIONS = {
    EUW: {
        name: 'Europe West',
        id: 'europe-west',
    },
    EUC: {
        name: 'Europe Central',
        id: 'europe-central',
    },
    NAW: {
        name: 'North America West',
        id: 'north-america-west',
    },
    NAE: {
        name: 'North America East',
        id: 'north-america-east',
    },
    SA: {
        name: 'South America',
        id: 'south-america',
    },
};

// options: { [key]: [array of ids] }
export const fetchLostArkMarket = async ({ region, options }) => {
    if (!region.id) throw new Error('Invalid region!');
    const optionQuery =
        options &&
        Object.keys(options)
            .map((currKey) => {
                const joinedValues = options[currKey].join(',');
                return `${currKey}=${joinedValues}`;
            })
            .join('&');

    try {
        const data = await fetch(`${BASE_URL}/${region.name}${options ? `?${optionQuery}` : ''}`, {
            headers: { 'Cache-Control': 'no-cache' },
        });
        return data.json();
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const importLostArkMarket = async ({ region, options }) => {
    const enhancementMaterial = await fetchLostArkMarket({
        region,
        options: { categories: ['Enhancement Material'] },
    });

    enhancementMaterial.forEach((item) => {
        const storeItem = ALL_MATERIALS.find((i) => i.LAMID === item.id);
        if (storeItem) {
            setCost(storeItem.id, Math.floor(item.recentPrice));
        }
    });

    const currencyExchange = await fetchLostArkMarket({
        region,
        options: { categories: ['Currency Exchange'] },
    });

    currencyExchange.forEach((item) => {
        if (item.id === CRYSTALS.LAMID) {
            setCost(CRYSTALS.id, Math.floor(item.recentPrice * CRYSTALS.purchaseUnit));
        }
        if (item.id === ROYAL_CRYSTALS.LAMID) {
            setCost(ROYAL_CRYSTALS.id, Math.floor(item.recentPrice * ROYAL_CRYSTALS.purchaseUnit));
        }
    });

    return [...enhancementMaterial, ...currencyExchange];
};

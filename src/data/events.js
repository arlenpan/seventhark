import eventsDaily from './eventsDaily.json';
import eventsWeekly from './eventsWeekly.json';
import eventsAbyssal from './eventsAbyssal.json';

export const TYPE_DAILY = 'daily';
export const TYPE_WEEKLY = 'weekly';

export const DAILIES = Object.values(eventsDaily);
export const WEEKLIES = Object.values(eventsWeekly);
export const ABYSSALS = Object.values(eventsAbyssal);

// Custom Gold Generation events
const UNAS_GOLD_CHEST_LARGE = {
    id: 'unas_gold_chest_large',
    name: "Large Gold Chest - Una's Token",
    quantity: 3,
    rosterWide: true,
    gold: 1000,
};
const ADVENTURE_ISLAND_GOLD = {
    id: 'adventure_island_gold',
    name: 'Adventure Island (Gold Reward)',
    quantity: 3,
    rosterWide: true,
    gold: 600,
};

export const GOLD_GENERATION = [...ABYSSALS, UNAS_GOLD_CHEST_LARGE, ADVENTURE_ISLAND_GOLD];

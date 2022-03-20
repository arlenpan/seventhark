const DAILY_CHAOS_DUNGEON = { id: 'chaos_dungeon', name: 'Chaos Dungeon', quantity: 2 };
const DAILY_GUARDIAN_RAID = { id: 'guardian_raid', name: 'Guardian Raid', quantity: 2 };
const DAILY_GUILD_DONATION = { id: 'guild_donation', name: 'Guild Donation', quantity: 1 };
const DAILY_GUILD_SUPPORT = { id: 'guild_support', name: 'Guild Support', quantity: 1 };
const DAILY_UNAS_TASK = { id: 'unas_task', name: `Una's Task`, quantity: 3 };
const DAILY_WORLD_BOSS = { id: 'world_boss', name: 'World Boss', quantity: 1 };
const DAILY_CHAOS_GATE = { id: 'chaos_gate', name: 'Chaos Gate', quantity: 1 };
const DAILY_ADVENTURE_ISLAND = { id: 'adventure_island', name: 'Adventure Island', quantity: 1 };
const DAILY_ANGUISHED_ISLE = { id: 'anguished_isle', name: 'Anguished Isle', quantity: 1, tier: 3, ilvl: 1100 };

export const DAILIES = [
    DAILY_CHAOS_DUNGEON,
    DAILY_GUARDIAN_RAID,
    DAILY_GUILD_DONATION,
    DAILY_GUILD_SUPPORT,
    DAILY_UNAS_TASK,
    DAILY_WORLD_BOSS,
    DAILY_CHAOS_GATE,
    DAILY_ADVENTURE_ISLAND,
    DAILY_ANGUISHED_ISLE,
];

const WEEKLY_ABYSSAL_DUNGEON_340_1 = {
    id: 'abyssal_dungeon_340_1',
    name: 'Abyssal Dungeon 340 (Demon Beast Canyon)',
    quantity: 1,
    tier: 1,
    ilvl: 340,
};
const WEEKLY_ABYSSAL_DUNGEON_340_2 = {
    id: 'abyssal_dungeon_340_2',
    name: `Abyssal Dungeon 340 (Necromancer's Origin)`,
    quantity: 1,
    tier: 1,
    ilvl: 340,
};
const WEEKLY_ABYSSAL_DUNGEON_460_1 = {
    id: 'abyssal_dungeon_460_1',
    name: 'Abyssal Dungeon 460 (Hall of the Twisted Warlord)',
    quantity: 1,
    tier: 1,
    ilvl: 460,
};
const WEEKLY_ABYSSAL_DUNGEON_460_2 = {
    id: 'abyssal_dungeon_460_2',
    name: 'Abyssal Dungeon 460 (Hildebrandt Palace)',
    quantity: 1,
    tier: 1,
    ilvl: 460,
};
const WEEKLY_ABYSSAL_DUNGEON_840_1 = {
    id: 'abyssal_dungeon_840_1',
    name: 'Abyssal Dungeon 840 (Road of Lament)',
    quantity: 1,
    tier: 2,
    ilvl: 840,
};
const WEEKLY_ABYSSAL_DUNGEON_840_2 = {
    id: 'abyssal_dungeon_840_2',
    name: 'Abyssal Dungeon 840 (Forge of Fallen Pride)',
    quantity: 1,
    tier: 2,
    ilvl: 840,
};
const WEEKLY_ABYSSAL_DUNGEON_960_1 = {
    id: 'abyssal_dungeon_960_1',
    name: 'Abyssal Dungeon 960 (Sea of Indolence)',
    quantity: 1,
    tier: 2,
    ilvl: 960,
};
const WEEKLY_ABYSSAL_DUNGEON_960_2 = {
    id: 'abyssal_dungeon_960_2',
    name: 'Abyssal Dungeon 960 (Tranquil Karkosa)',
    quantity: 1,
    tier: 2,
    ilvl: 960,
};
const WEEKLY_ABYSSAL_DUNGEON_960_3 = {
    id: 'abyssal_dungeon_960_3',
    name: `Abyssal Dungeon 960 (Alaric's Sanctuary)`,
    quantity: 1,
    tier: 2,
    ilvl: 960,
};
const WEEKLY_ABYSSAL_DUNGEON_1325_1 = {
    id: 'abyssal_dungeon_1325_1',
    name: `Abyssal Dungeon 1325 (Aira's Oculus)`,
    quantity: 1,
    tier: 3,
    ilvl: 1340,
    hardMode: 1370,
};
const WEEKLY_ABYSSAL_DUNGEON_1340_1 = {
    id: 'abyssal_dungeon_1340_1',
    name: 'Abyssal Dungeon 1340 (Oreha Prevaza)',
    quantity: 1,
    tier: 3,
    ilvl: 1340,
    hardMode: 1370,
};
const WEEKLY_ABYSS_RAID_1370 = {
    id: 'abyss_raid_1370',
    name: 'Argos Phase 1',
    quantity: 1,
    tier: 3,
    ilvl: 1370,
};
const WEEKLY_ABYSS_RAID_1385 = {
    id: 'abyss_raid_1385',
    name: 'Argos Phase 2',
    quantity: 1,
    tier: 3,
    ilvl: 1385,
};
const WEEKLY_ABYSS_RAID_1400 = {
    id: 'abyss_raid_1400',
    name: 'Argos Phase 3',
    quantity: 1,
    tier: 3,
    ilvl: 1400,
};

export const ABYSSALS = [
    WEEKLY_ABYSSAL_DUNGEON_340_1,
    WEEKLY_ABYSSAL_DUNGEON_340_2,
    WEEKLY_ABYSSAL_DUNGEON_460_1,
    WEEKLY_ABYSSAL_DUNGEON_460_2,
    WEEKLY_ABYSSAL_DUNGEON_840_1,
    WEEKLY_ABYSSAL_DUNGEON_840_2,
    WEEKLY_ABYSSAL_DUNGEON_960_1,
    WEEKLY_ABYSSAL_DUNGEON_960_2,
    WEEKLY_ABYSSAL_DUNGEON_960_3,
    WEEKLY_ABYSSAL_DUNGEON_1325_1,
    WEEKLY_ABYSSAL_DUNGEON_1340_1,
    WEEKLY_ABYSS_RAID_1370,
    WEEKLY_ABYSS_RAID_1385,
    WEEKLY_ABYSS_RAID_1400,
];

const TRADE_SYLMAEL_BLOODSTONE = { id: 'trade_sylmael_bloodstone', name: 'Sylmael Bloodstone Exchange', quantity: 1 };
const TRADE_MERCHANT_SHIPS = { id: 'trade_merchant_ships', name: 'Traveling Merchant Ships', quantity: 1 };
const WEEKLY_GHOST_SHIP = { id: 'weekly_ghost_ship', name: 'Ghost Ship', quantity: 1 };
const WEEKLY_UNAS_TASK = { id: 'weekly_unas_task', name: `Una's Task (Weekly)`, quantity: 3 };
const WEEKLY_GUILD_TASKS = { id: 'weekly_guild_tasks', name: 'Guild Tasks (Weekly)', quantity: 1 };

export const WEEKLIES = [
    ...ABYSSALS,
    TRADE_SYLMAEL_BLOODSTONE,
    TRADE_MERCHANT_SHIPS,
    WEEKLY_GHOST_SHIP,
    WEEKLY_UNAS_TASK,
    WEEKLY_GUILD_TASKS,
];

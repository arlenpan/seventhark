const DESTRUCTION_STONE_FRAGMENT = {
    id: 'destruction_stone_fragment',
    name: 'Destruction Stone Fragment',
    tier: 1,
    bundle: 10,
    quantityMari: 15,
    gemCostMari: 60,
};
const GUARDIAN_STONE_FRAGMENT = {
    id: 'guardian_stone_fragment',
    name: 'Guardian Stone Fragment',
    tier: 1,
    bundle: 10,
    quantityMari: 40,
    gemCostMari: 36,
};
const HARMONY_LEAPSTONE = {
    id: 'harmony_leapstone',
    name: 'Harmony Leapstone',
    tier: 1,
    quantityMari: 15,
    gemCostMari: 15,
};
const HARMONY_SHARD_POUCH_S = {
    id: 'harmony_shard_pouch_s',
    name: 'Harmony Shard Pouch (S)',
    tier: 1,
    quantityMari: 5,
    gemCostMari: 23,
};
const STARS_BREATH = {
    id: 'stars_breath',
    name: "Star's Breath",
    tier: 1,
    quantityMari: 10,
    gemCostMari: 30,
};

const DESTRUCTION_STONE = {
    id: 'destruction_stone',
    name: 'Destruction Stone',
    tier: 2,
    bundle: 10,
    quantityMari: 15,
    gemCostMari: 84,
};
const GUARDIAN_STONE = {
    id: 'guardian_stone',
    name: 'Guardian Stone',
    tier: 2,
    bundle: 10,
    quantityMari: 40,
    gemCostMari: 80,
};
const LIFE_LEAPSTONE = {
    id: 'life_leapstone',
    name: 'Life Leapstone',
    tier: 2,
    quantityMari: 40,
    gemCostMari: 56,
};
const LIFE_SHARD_POUCH_S = {
    id: 'life_shard_pouch_s',
    name: 'Life Shard Pouch (S)',
    tier: 2,
    quantityMari: 5,
    gemCostMari: 19,
};
const MOONS_BREATH = {
    id: 'moons_breath',
    name: "Moon's Breath",
    tier: 2,
    quantityMari: 5,
    gemCostMari: 30,
};
const CALDARR_FUSION_MATERIAL = {
    id: 'caldarr_fusion_material',
    name: 'Caldarr Fusion Material',
    tier: 2,
};

const DESTRUCTION_STONE_CRYSTAL = {
    id: 'destruction_stone_crystal',
    name: 'Destruction Stone Crystal',
    tier: 3,
    bundle: 10,
    quantityMari: 30,
    gemCostMari: 240,
};
const GUARDIAN_STONE_CRYSTAL = {
    id: 'guardian_stone_crystal',
    name: 'Guardian Stone Crystal',
    tier: 3,
    bundle: 10,
    quantityMari: 80,
    gemCostMari: 240,
};
const HONOR_LEAPSTONE = {
    id: 'honor_leapstone',
    name: 'Honor Leapstone',
    tier: 3,
    quantityMari: 5,
    gemCostMari: 10,
};
const HONOR_SHARD_POUCH_S = {
    id: 'honor_shard_pouch_s',
    name: 'Honor Shard Pouch (S)',
    tier: 3,
    quantityMari: 10,
    gemCostMari: 56,
};
const SOLAR_GRACE = {
    id: 'solar_grace',
    name: 'Solar Grace',
    tier: 3,
    quantityMari: 20,
    gemCostMari: 80,
};
const SOLAR_BLESSING = {
    id: 'solar_blessing',
    name: 'Solar Blessing',
    tier: 3,
    quantityMari: 15,
    gemCostMari: 150,
};
const SOLAR_PROTECTION = {
    id: 'solar_protection',
    name: 'Solar Protection',
    tier: 3,
    quantityMari: 3,
    gemCostMari: 150,
};
const GREAT_HONOR_LEAPSTONE = {
    id: 'great_honor_leapstone',
    name: 'Great Honor Leapstone',
    tier: 3,
    quantityMari: 5,
    gemCostMari: 50,
};
const SIMPLE_OREHA_FUSION_MATERIAL = {
    id: 'simple_oreha_fusion_material',
    name: 'Simple Oreha Fusion Material',
    tier: 3,
    quantityMari: 10,
    gemCostMari: 30,
};
const BASIC_OREHA_FUSION_MATERIAL = {
    id: 'basic_oreha_fusion_material',
    name: 'Basic Oreha Fusion Material',
    tier: 3,
    quantityMari: 10,
    gemCostMari: 40,
};

export const CRYSTALS = {
    id: 'crystals',
    name: '95 Crystals',
};

export const T1_MATERIALS = [
    DESTRUCTION_STONE_FRAGMENT,
    GUARDIAN_STONE_FRAGMENT,
    HARMONY_LEAPSTONE,
    HARMONY_SHARD_POUCH_S,
    STARS_BREATH,
];

export const T2_MATERIALS = [
    DESTRUCTION_STONE,
    GUARDIAN_STONE,
    LIFE_LEAPSTONE,
    LIFE_SHARD_POUCH_S,
    MOONS_BREATH,
    CALDARR_FUSION_MATERIAL,
];

export const T3_MATERIALS = [
    DESTRUCTION_STONE_CRYSTAL,
    GUARDIAN_STONE_CRYSTAL,
    HONOR_LEAPSTONE,
    HONOR_SHARD_POUCH_S,
    SOLAR_GRACE,
    SOLAR_BLESSING,
    SOLAR_PROTECTION,
    SIMPLE_OREHA_FUSION_MATERIAL,
    GREAT_HONOR_LEAPSTONE,
    BASIC_OREHA_FUSION_MATERIAL,
];

export const HONING_MATERIALS = [...T1_MATERIALS, ...T2_MATERIALS, ...T3_MATERIALS];

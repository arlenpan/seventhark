const DESTRUCTION_STONE_FRAGMENT = {
    id: 'destruction_stone_fragment',
    name: 'Destruction Stone Fragment',
    imgUrl: '/icons/destruction_stone_fragment.webp',
    tier: 1,
    bundle: 10,
    mariQuantity: 60,
    mariGemCost: 120,
    pvpExchangeCost: 20,
    bloodstoneCost: 120,
    bloodstoneQuantity: 2,
};
const GUARDIAN_STONE_FRAGMENT = {
    id: 'guardian_stone_fragment',
    name: 'Guardian Stone Fragment',
    imgUrl: '/icons/guardian_stone_fragment.png',
    tier: 1,
    bundle: 10,
    mariQuantity: 100,
    mariGemCost: 75,
    pvpExchangeCost: 10,
    bloodstoneCost: 40,
    bloodstoneQuantity: 2,
};
const HARMONY_LEAPSTONE = {
    id: 'harmony_leapstone',
    name: 'Harmony Leapstone',
    imgUrl: '/icons/harmony_leapstone.png',
    tier: 1,
    mariQuantity: 50,
    mariGemCost: 50,
    pvpExchangeCost: 20,
    bloodstoneCost: 50,
};
const HARMONY_SHARD_POUCH_S = {
    id: 'harmony_shard_pouch_s',
    name: 'Harmony Shard Pouch (S)',
    imgUrl: '/icons/harmony_shard_pouch_s.png',
    tier: 1,
    mariQuantity: 5,
    mariGemCost: 23,
    bloodstoneCost: 80,
};
const HARMONY_SHARD_POUCH_M = {
    id: 'harmony_shard_pouch_m',
    name: 'Harmony Shard Pouch (M)',
    imgUrl: '/icons/harmony_shard_pouch_s.png',
    tier: 1,
    mariQuantity: 15,
    mariGemCost: 141,
};
const HARMONY_SHARD_POUCH_L = {
    id: 'harmony_shard_pouch_l',
    name: 'Harmony Shard Pouch (L)',
    tier: 1,
    pvpExchangeCost: 130,
    imgUrl: '/icons/harmony_shard_pouch_l.webp',
};
const STARS_BREATH = {
    id: 'stars_breath',
    name: "Star's Breath",
    tier: 1,
    mariQuantity: 10,
    mariGemCost: 30,
    imgUrl: '/icons/stars_breath.png',
};

const DESTRUCTION_STONE = {
    id: 'destruction_stone',
    name: 'Destruction Stone',
    tier: 2,
    bundle: 10,
    mariQuantity: 30,
    mariGemCost: 90,
    pvpExchangeCost: 40,
    imgUrl: '/icons/destruction_stone.webp',
    bloodstoneCost: 150,
    bloodstoneQuantity: 2,
};
const GUARDIAN_STONE = {
    id: 'guardian_stone',
    name: 'Guardian Stone',
    tier: 2,
    bundle: 10,
    mariQuantity: 100,
    mariGemCost: 150,
    pvpExchangeCost: 20,
    imgUrl: '/icons/guardian_stone.png',
    bloodstoneCost: 50,
    bloodstoneQuantity: 2,
};
const LIFE_LEAPSTONE = {
    id: 'life_leapstone',
    name: 'Life Leapstone',
    tier: 2,
    mariQuantity: 40,
    mariGemCost: 56,
    pvpExchangeCost: 30,
    imgUrl: '/icons/life_leapstone.png',
    bloodstoneCost: 60,
};
const LIFE_SHARD_POUCH_S = {
    id: 'life_shard_pouch_s',
    name: 'Life Shard Pouch (S)',
    tier: 2,
    mariQuantity: 20,
    mariGemCost: 75,
    imgUrl: '/icons/life_shard_pouch_s.png',
    bloodstoneCost: 480,
};
const LIFE_SHARD_POUCH_L = {
    id: 'life_shard_pouch_l',
    name: 'Life Shard Pouch (L)',
    tier: 2,
    pvpExchangeCost: 200,
    imgUrl: '/icons/life_shard_pouch_l.webp',
};
const MOONS_BREATH = {
    id: 'moons_breath',
    name: "Moon's Breath",
    tier: 2,
    mariQuantity: 10,
    mariGemCost: 30,
    imgUrl: '/icons/moons_breath.png',
};
const CALDARR_FUSION_MATERIAL = {
    id: 'caldarr_fusion_material',
    name: 'Caldarr Fusion Material',
    tier: 2,
    mariQuantity: 15,
    mariGemCost: 60,
    imgUrl: '/icons/caldarr_fusion_material.png',
};

const DESTRUCTION_STONE_CRYSTAL = {
    id: 'destruction_stone_crystal',
    name: 'Destruction Stone Crystal',
    tier: 3,
    bundle: 10,
    mariQuantity: 50,
    mariGemCost: 300,
    pvpExchangeCost: 60,
    chaosExchangeCost: [60, 90, 120, 140, 170, 200, 230, 260],
    imgUrl: '/icons/destruction_stone_crystal.webp',
    bloodstoneCost: 240,
    bloodstoneQuantity: 2,
};
const GUARDIAN_STONE_CRYSTAL = {
    id: 'guardian_stone_crystal',
    name: 'Guardian Stone Crystal',
    tier: 3,
    bundle: 10,
    mariQuantity: 100,
    mariGemCost: 270,
    pvpExchangeCost: 20,
    chaosExchangeCost: [10, 40, 60, 80, 100, 120, 140, 160, 190, 210, 230],
    imgUrl: '/icons/guardian_stone_crystal.png',
    bloodstoneCost: 80,
    bloodstoneQuantity: 2,
};
const HONOR_LEAPSTONE = {
    id: 'honor_leapstone',
    name: 'Honor Leapstone',
    tier: 3,
    mariQuantity: 20,
    mariGemCost: 40,
    pvpExchangeCost: 40,
    chaosExchangeCost: [100, 130, 170, 200, 230, 270],
    imgUrl: '/icons/honor_leapstone.png',
    bloodstoneCost: 80,
};
const HONOR_SHARD_POUCH_S = {
    id: 'honor_shard_pouch_s',
    name: 'Honor Shard Pouch (S)',
    tier: 3,
    mariQuantity: 20,
    mariGemCost: 112,
    imgUrl: '/icons/honor_shard_pouch_s.png',
    bloodstoneCost: 830,
};
const HONOR_SHARD_POUCH_L = {
    id: 'honor_shard_pouch_l',
    name: 'Honor Shard Pouch (L)',
    tier: 3,
    pvpExchangeCost: 670,
    chaosExchangeCost: [500, 570],
    imgUrl: '/icons/honor_shard_pouch_l.png',
};
const SOLAR_GRACE = {
    id: 'solar_grace',
    name: 'Solar Grace',
    tier: 3,
    mariQuantity: 40,
    mariGemCost: 160,
    chaosExchangeCost: [550, 630],
    chaosExchangeQuantity: 7,
    pvpExchangeCost: 80,
    imgUrl: '/icons/solar_grace.png',
};
const SOLAR_BLESSING = {
    id: 'solar_blessing',
    name: 'Solar Blessing',
    tier: 3,
    mariQuantity: 30,
    mariGemCost: 300,
    chaosExchangeCost: [570, 650],
    chaosExchangeQuantity: 2,
    pvpExchangeCost: 250,
    imgUrl: '/icons/solar_blessing.png',
};
const SOLAR_PROTECTION = {
    id: 'solar_protection',
    name: 'Solar Protection',
    tier: 3,
    mariQuantity: 8,
    mariGemCost: 360,
    pvpExchangeCost: 360,
    chaosExchangeCost: [590, 670],
    imgUrl: '/icons/solar_protection.png',
};
const GREAT_HONOR_LEAPSTONE = {
    id: 'great_honor_leapstone',
    name: 'Great Honor Leapstone',
    tier: 3.5,
    mariQuantity: 5,
    mariGemCost: 50,
    pvpExchangeCost: 40,
    chaosExchangeCost: [130, 170, 200, 240, 280, 310, 360],
    imgUrl: '/icons/great_honor_leapstone.webp',
    bloodstoneCost: 90,
};
const SIMPLE_OREHA_FUSION_MATERIAL = {
    id: 'simple_oreha_fusion_material',
    name: 'Simple Oreha Fusion Material',
    tier: 3,
    mariQuantity: 20,
    mariGemCost: 54,
    imgUrl: '/icons/simple_oreha_fusion_material.png',
};
const BASIC_OREHA_FUSION_MATERIAL = {
    id: 'basic_oreha_fusion_material',
    name: 'Basic Oreha Fusion Material',
    tier: 3.5,
    mariQuantity: 20,
    mariGemCost: 72,
    imgUrl: '/icons/basic_oreha_fusion_material.png',
};
const POWDER_OF_SAGE = {
    id: 'powder_of_sage',
    name: 'Powder of Sage',
    tier: 3.5,
    chaosExchangeCost: [1470],
    imgUrl: '/icons/powder_of_sage.png',
};

export const CRYSTALS = {
    id: 'crystals',
    name: 'Blue Crystals',
    imgUrl: '/icons/blue_crystals.png',
};

export const T1_MATERIALS = [
    HARMONY_LEAPSTONE,
    DESTRUCTION_STONE_FRAGMENT,
    GUARDIAN_STONE_FRAGMENT,
    HARMONY_SHARD_POUCH_S,
    HARMONY_SHARD_POUCH_M,
    HARMONY_SHARD_POUCH_L,
    STARS_BREATH,
];

export const T2_MATERIALS = [
    LIFE_LEAPSTONE,
    DESTRUCTION_STONE,
    GUARDIAN_STONE,
    LIFE_SHARD_POUCH_S,
    LIFE_SHARD_POUCH_L,
    MOONS_BREATH,
    CALDARR_FUSION_MATERIAL,
];

export const T3_MATERIALS = [
    HONOR_LEAPSTONE,
    DESTRUCTION_STONE_CRYSTAL,
    GUARDIAN_STONE_CRYSTAL,
    HONOR_SHARD_POUCH_S,
    HONOR_SHARD_POUCH_L,
    SOLAR_GRACE,
    SOLAR_BLESSING,
    SOLAR_PROTECTION,
    SIMPLE_OREHA_FUSION_MATERIAL,
    GREAT_HONOR_LEAPSTONE,
    BASIC_OREHA_FUSION_MATERIAL,
    POWDER_OF_SAGE,
];

export const ALL_MATERIALS = [...T1_MATERIALS, ...T2_MATERIALS, ...T3_MATERIALS];

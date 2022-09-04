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
    LAMID: 'destruction-stone-fragment-0',
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
    LAMID: 'guardian-stone-fragment-0',
};
const HARMONY_LEAPSTONE = {
    id: 'harmony_leapstone',
    name: 'Harmony Leapstone',
    imgUrl: '/icons/harmony_leapstone.png',
    tier: 1,
    mariQuantity: 30,
    mariGemCost: 30,
    pvpExchangeCost: 20,
    bloodstoneCost: 50,
    LAMID: 'harmony-leapstone-2',
};
const HARMONY_SHARD_POUCH_S = {
    id: 'harmony_shard_pouch_s',
    name: 'Harmony Shard Pouch (S)',
    imgUrl: '/icons/harmony_shard_pouch_s.png',
    tier: 1,
    mariQuantity: 5,
    mariGemCost: 23,
    bloodstoneCost: 80,
    LAMID: 'harmony-shard-pouch-s-1',
};
const HARMONY_SHARD_POUCH_M = {
    id: 'harmony_shard_pouch_m',
    name: 'Harmony Shard Pouch (M)',
    imgUrl: '/icons/harmony_shard_pouch_m.webp',
    tier: 1,
    mariQuantity: 15,
    mariGemCost: 141,
    LAMID: 'harmony-shard-pouch-m-2',
};
const HARMONY_SHARD_POUCH_L = {
    id: 'harmony_shard_pouch_l',
    name: 'Harmony Shard Pouch (L)',
    tier: 1,
    pvpExchangeCost: 130,
    imgUrl: '/icons/harmony_shard_pouch_l.webp',
    LAMID: 'harmony-shard-pouch-l-3',
};
const STARS_BREATH = {
    id: 'stars_breath',
    name: "Star's Breath",
    tier: 1,
    mariQuantity: 15,
    mariGemCost: 30,
    imgUrl: '/icons/stars_breath.png',
    LAMID: 'star-s-breath-3',
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
    LAMID: 'destruction-stone-0',
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
    LAMID: 'guardian-stone-0',
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
    LAMID: 'life-leapstone-2',
};
const LIFE_SHARD_POUCH_S = {
    id: 'life_shard_pouch_s',
    name: 'Life Shard Pouch (S)',
    tier: 2,
    mariQuantity: 20,
    mariGemCost: 75,
    imgUrl: '/icons/life_shard_pouch_s.png',
    bloodstoneCost: 480,
    LAMID: 'life-shard-pouch-s-1',
};
const LIFE_SHARD_POUCH_L = {
    id: 'life_shard_pouch_l',
    name: 'Life Shard Pouch (L)',
    tier: 2,
    pvpExchangeCost: 200,
    imgUrl: '/icons/life_shard_pouch_l.webp',
    LAMID: 'life-shard-pouch-l-3',
};
const MOONS_BREATH = {
    id: 'moons_breath',
    name: "Moon's Breath",
    tier: 2,
    mariQuantity: 10,
    mariGemCost: 30,
    imgUrl: '/icons/moons_breath.png',
    LAMID: 'moon-s-breath-3',
};
const CALDARR_FUSION_MATERIAL = {
    id: 'caldarr_fusion_material',
    name: 'Caldarr Fusion Material',
    tier: 2,
    mariQuantity: 15,
    mariGemCost: 60,
    imgUrl: '/icons/caldarr_fusion_material.png',
    LAMID: 'caldarr-fusion-material-2',
};

const DESTRUCTION_STONE_CRYSTAL = {
    id: 'destruction_stone_crystal',
    name: 'Crystallized Destruction Stone',
    tier: 3,
    bundle: 10,
    mariQuantity: 50,
    mariGemCost: 300,
    pvpExchangeCost: 60,
    chaosExchangeCost: [60, 90, 120, 140, 170, 200, 230, 260],
    imgUrl: '/icons/destruction_stone_crystal.webp',
    bloodstoneCost: 240,
    bloodstoneQuantity: 2,
    LAMID: 'crystallized-destruction-stone-0',
};
const GUARDIAN_STONE_CRYSTAL = {
    id: 'guardian_stone_crystal',
    name: 'Crystallized Guardian Stone',
    tier: 3,
    bundle: 10,
    mariQuantity: 100,
    mariGemCost: 150,
    pvpExchangeCost: 20,
    chaosExchangeCost: [10, 40, 60, 80, 100, 120, 140, 160, 190, 210, 230],
    imgUrl: '/icons/guardian_stone_crystal.png',
    bloodstoneCost: 80,
    bloodstoneQuantity: 2,
    LAMID: 'crystallized-guardian-stone-0',
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
    LAMID: 'honor-leapstone-2',
};
const HONOR_SHARD_POUCH_S = {
    id: 'honor_shard_pouch_s',
    name: 'Honor Shard Pouch (S)',
    tier: 3,
    mariQuantity: 20,
    mariGemCost: 112,
    imgUrl: '/icons/honor_shard_pouch_s.png',
    bloodstoneCost: 830,
    LAMID: 'honor-shard-pouch-s-1',
};
const HONOR_SHARD_POUCH_L = {
    id: 'honor_shard_pouch_l',
    name: 'Honor Shard Pouch (L)',
    tier: 3,
    pvpExchangeCost: 670,
    mariQuantity: 20,
    mariGemCost: 291,
    chaosExchangeCost: [500, 570],
    imgUrl: '/icons/honor_shard_pouch_l.png',
    LAMID: 'honor-shard-pouch-l-3',
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
    LAMID: 'solar-grace-1',
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
    LAMID: 'solar-blessing-2',
};
const SOLAR_PROTECTION = {
    id: 'solar_protection',
    name: 'Solar Protection',
    tier: 3,
    mariQuantity: 25,
    mariGemCost: 750,
    pvpExchangeCost: 360,
    chaosExchangeCost: [590, 670],
    imgUrl: '/icons/solar_protection.png',
    LAMID: 'solar-protection-3',
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
    LAMID: 'great-honor-leapstone-2',
};
const SIMPLE_OREHA_FUSION_MATERIAL = {
    id: 'simple_oreha_fusion_material',
    name: 'Simple Oreha Fusion Material',
    tier: 3,
    mariQuantity: 20,
    mariGemCost: 54,
    imgUrl: '/icons/simple_oreha_fusion_material.png',
    LAMID: 'simple-oreha-fusion-material-1',
};
const BASIC_OREHA_FUSION_MATERIAL = {
    id: 'basic_oreha_fusion_material',
    name: 'Basic Oreha Fusion Material',
    tier: 3.5,
    mariQuantity: 20,
    mariGemCost: 72,
    imgUrl: '/icons/basic_oreha_fusion_material.png',
    LAMID: 'basic-oreha-fusion-material-2',
};
const POWDER_OF_SAGE = {
    id: 'powder_of_sage',
    name: 'Powder of Sage',
    tier: 3.5,
    chaosExchangeCost: [1470],
    imgUrl: '/icons/powder_of_sage.png',
    LAMID: 'powder-of-sage-3',
};
const TAILORING_APPLIED_MENDING = {
    id: 'tailoring_applied_mending',
    name: 'Tailoring: Applied Mending',
    imgUrl: '/icons/tailoring_applied_mending.webp',
    tier: 3.5,
    mariQuantity: 4,
    mariGemCost: 260,
    LAMID: 'tailoring-applied-mending-4',
};
const METALLURGY_APPLIED_WELDING = {
    id: 'metallurgy_applied_welding',
    name: 'Metallurgy: Applied Welding',
    imgUrl: '/icons/metallurgy_applied_welding.webp',
    tier: 3.5,
    mariQuantity: 2,
    mariGemCost: 280,
    LAMID: 'metallurgy-applied-welding-4',
};

export const CRYSTALS = {
    id: 'crystals',
    name: 'Blue Crystals',
    imgUrl: '/icons/blue_crystals.png',
    purchaseUnit: 95,
    LAMID: 'blue-crystal-0',
};

export const ROYAL_CRYSTALS = {
    id: 'royal_crystals',
    name: 'Royal Crystals',
    imgUrl: '/icons/royal_crystals.png',
    purchaseUnit: 238,
    packPrice: 10,
    packAmount: 1000,
    LAMID: 'royal-crystal-0',
};

export const GOLD = {
    id: 'gold',
    name: 'Gold',
    imgUrl: '/icons/gold.png',
};
export const PHEONS = {
    id: 'pheons',
    name: 'Pheons',
    imgUrl: '/icons/pheon.webp',
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
    TAILORING_APPLIED_MENDING,
    METALLURGY_APPLIED_WELDING,
];

export const ALL_MATERIALS = [...T1_MATERIALS, ...T2_MATERIALS, ...T3_MATERIALS];

import { getLocal, setLocal } from './localStorage';

export const ENGRAVINGS_KEY = 'engravings';
const ENGRAVINGS_DEFAULT = [];

/**
 * Preset Data Structure:
 * {
 *  name: 'Preset Name' // functions as a key
 * }
 *
 * - engravings is an ordered array of presets
 */

export const getEngravingPresets = async () => getLocal(ENGRAVINGS_KEY) || ENGRAVINGS_DEFAULT;
export const updateEngravingPresets = async (presets) => {
    setLocal(ENGRAVINGS_KEY, presets);
};

export const createEngravingPreset = async (preset) => {
    const presets = getLocal(ENGRAVINGS_KEY);

    // check for existing preset
    if (presets && presets.find((p) => p.name === preset.name)) {
        throw new Error('Preset already exists');
    }

    const newPresets = presets ? [...presets, preset] : [preset];
    setLocal(ENGRAVINGS_KEY, newPresets);
};

export const deleteEngravingPreset = async (presetName) => {
    const presets = getLocal(ENGRAVINGS_KEY);
    const newPresets = presets.filter((preset) => preset.name !== presetName);
    setLocal(ENGRAVINGS_KEY, newPresets);
};

export const updateEngravingPreset = async (preset) => {
    const presets = getLocal(ENGRAVINGS_KEY);
    const newPresets = presets.map((p) => (p.name === preset.name ? preset : p));
    setLocal(ENGRAVINGS_KEY, newPresets);
};

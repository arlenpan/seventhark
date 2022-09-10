import { CHARACTER_KEY } from './character';
import { CHECKLIST_CUSTOM_EVENTS, CHECKLIST_HIDDEN_EVENTS, CHECKLIST_KEY } from './checklist';
import { COSTS_KEY, TIERS_KEY } from './economy';
import { ENGRAVINGS_KEY } from './engravings';
import { ISLAND_KEY } from './islands';
import { getLocal, setLocal } from './localStorage';
import { RAPPORT_KEY } from './rapport';

const FILENAME = 'seventharkdata';
const STORAGE_KEYS = [
    CHARACTER_KEY,
    CHECKLIST_KEY,
    CHECKLIST_CUSTOM_EVENTS,
    CHECKLIST_HIDDEN_EVENTS,
    TIERS_KEY,
    COSTS_KEY,
    ISLAND_KEY,
    RAPPORT_KEY,
    ENGRAVINGS_KEY
];

const downloadObjectAsJson = (exportObj, exportName) => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(exportObj))}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', `${exportName}.json`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

export const importLocalData = async (data) => {
    STORAGE_KEYS.forEach((key) => {
        setLocal(key, data[key]);
    });
};

export const exportLocalData = async () => {
    const allData = {};
    STORAGE_KEYS.forEach((key) => {
        const data = getLocal(key);
        allData[key] = data;
    });
    downloadObjectAsJson(allData, FILENAME);
};

export const resetAllData = async () => {
    localStorage.clear();
};

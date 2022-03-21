import { getLocal } from "./localStorage";

export const getChecklist = async () => {
    return getLocal("checklist") ?? {};
};

export const updateItem = ({ state, charName, eventKey }) => {};

export const resetItems = () => {};

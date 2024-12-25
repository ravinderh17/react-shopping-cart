import data from "./data.json";

export const getImageForItem = (name) => {
    const item = data.find(item => item.name === name); // Finds the item with the matching name
    if (item) {
        return item.image.thumbnail; // Returns the thumbnail URL if found
    }
    return null; // Returns null if no matching item is found
};

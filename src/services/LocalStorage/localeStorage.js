export const removeItem = (itemToRemove) => {
    window.localStorage.removeItem(itemToRemove);
}

export const getItem = (item) => {
    return window.localStorage.getItem(item);
}

export const addItem = (localStorageName, newItem) => {
    window.localStorage.setItem(localStorageName, newItem);
}
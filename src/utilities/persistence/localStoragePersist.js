// On every app load, save the current Redux state to localStorage API
export const saveToLocalStorage = (store) => {
  try {
    const serializedStore = JSON.stringify(store.getState());
    window.localStorage.setItem("store", serializedStore);
  } catch (error) {
    console.log({ errorMessage: error });
  }
};
// Load from localStorage API
export const loadFromLocalStorage = () => {
  try {
    const serializedStore = window.localStorage.getItem("store");
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (error) {
    console.log({ errorMessage: error });
    return undefined;
  }
};

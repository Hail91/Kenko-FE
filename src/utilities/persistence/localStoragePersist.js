export const saveToLocalStorage = (store) => {
  try {
    const serializedStore = JSON.stringify(store.getState());
    window.localStorage.setItem("store", serializedStore);
  } catch (error) {
    console.log({ errorMessage: error });
  }
};

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

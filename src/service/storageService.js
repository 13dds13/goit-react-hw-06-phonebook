import { storageKey } from "../data/initialData.json";

const getDataFromStorage = () => {
  let dataFromStorage = localStorage.getItem(storageKey);
  dataFromStorage = JSON.parse(dataFromStorage);
  if (!dataFromStorage || dataFromStorage.length === 0) {
    return;
  }
  return dataFromStorage;
};

export default getDataFromStorage;

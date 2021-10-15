import { checkIsDoublingContacts } from "../../service/contactsPrepations";
import { ADD_CONTACT } from "../contacts/actionTypes/actionTypes";
import dataUI from "../../data/dataUI.json";

const middlewarePreventContactsDuplication = (store) => (next) => (action) => {
  if (action.type !== ADD_CONTACT) {
    next(action);
    return;
  }
  const { items: contacts } = store.getState().contacts;
  const { name } = action.payload;
  const isAlreadyInContacts = checkIsDoublingContacts(contacts, name);

  if (isAlreadyInContacts) {
    alert(`${name} ${dataUI.alertMsg}`);
    return;
  }

  next(action);
};

export default middlewarePreventContactsDuplication;

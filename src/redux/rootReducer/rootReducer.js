import { combineReducers } from "redux";
import contactsReduser from "../contacts/contactsReduser/contactsReduser";

const rootReducer = combineReducers({
  contacts: contactsReduser,
});

export default rootReducer;
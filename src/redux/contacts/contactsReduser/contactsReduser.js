import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContact,
  removeContact,
  setFilter,
} from "../contactsActions/contactsActions";

const items = createReducer([], {
  [addContact]: (state = [], action) => [...state, action.payload],
  [removeContact]: (state = [], action) =>
    state.filter((contact) => contact.name !== action.payload),
});

const filter = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

const contacts = combineReducers({ items, filter });

export default contacts;

//===============Vanilla Redux===========================

// import { combineReducers } from "redux";
// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   SET_FILTER,
// } from "../actionTypes/actionTypes";

// const contactsItemReduser = (state = [], action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];

//     case REMOVE_CONTACT:
//       return state.filter((contact) => contact.name !== action.payload);

//     default:
//       return state;
//   }
// };

// const contactsFilterReduser = (state = "", action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: contactsItemReduser,
//   filter: contactsFilterReduser,
// });

// export default contactsReducer;

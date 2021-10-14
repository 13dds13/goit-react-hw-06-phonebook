import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContact,
  removeContact,
  setFilter,
} from "../contactsActions/contactsActions";

const items = createReducer([], {
  [addContact]: (state = [], { payload }) => [...state, payload],
  [removeContact]: (state = [], { payload }) =>
    state.filter((contact) => contact.name !== payload),
});

const filter = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const contactsReduser = combineReducers({ items, filter });

export default contactsReduser;

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

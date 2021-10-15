import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  SET_FILTER,
} from "../actionTypes/actionTypes";

const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: { id: nanoid(), number, name },
}));

const removeContact = createAction(REMOVE_CONTACT);

const setFilter = createAction(SET_FILTER);

export { addContact, removeContact, setFilter };

//===============Vanilla Redux===========================

// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   SET_FILTER,
// } from "../actionTypes/actionTypes";

// const addContact = (payload) => ({
//   type: ADD_CONTACT,
//   payload,
// });

// const removeContact = (payload) => ({
//   type: REMOVE_CONTACT,
//   payload,
// });

// const setFilter = (payload) => ({
//   type: SET_FILTER,
//   payload,
// });

// export { addContact, removeContact, setFilter };

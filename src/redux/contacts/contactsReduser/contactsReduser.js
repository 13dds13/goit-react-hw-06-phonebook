import { combineReducers } from "redux";
import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  SET_FILTER,
} from "../actionTypes/actionTypes";

const contactsItemReduser = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

const contactsFilterReduser = (state = "", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  item: contactsItemReduser,
  filter: contactsFilterReduser,
});

export default contactsReducer;

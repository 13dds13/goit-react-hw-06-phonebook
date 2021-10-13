import { configureStore } from "@reduxjs/toolkit";
import contacts from "./contacts/contactsReduser/contactsReduser";

const store = configureStore({
  reducer: { contacts },
});

export default store;

//===============Vanilla Redux===========================

// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer/rootReducer";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

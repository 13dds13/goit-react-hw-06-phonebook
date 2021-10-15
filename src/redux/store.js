import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReduser from "./contacts/contactsReduser/contactsReduser";
import middlewarePreventContactsDuplication from "./middlewares/middlewares";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: "items",
};

const store = configureStore({
  reducer: { contacts: persistReducer(persistConfig, contactsReduser) },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    middlewarePreventContactsDuplication,
  ],
});

const persistor = persistStore(store);

export { store, persistor };

//===============Vanilla Redux===========================

// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer/rootReducer";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contacts/contactsSlice";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { authReducer } from "./reducers/auth/auth";

const authConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
}

export const store = configureStore({
    reducer: {
        phonebook: contactsReducer,
        auth: persistReducer(authConfig, authReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === "development",
});

export const storePersist = persistStore(store);


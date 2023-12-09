import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contacts/contactsSlice";

export const store = configureStore({
    reducer: {
        phonebook: contactsReducer,
    }
})

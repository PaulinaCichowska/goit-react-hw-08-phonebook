import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./operations";

export const initialState = {
    contacts: [],
    filter: "",
    isLoading: false,
    error: null,

}

export const contactsSlice = createSlice({
    name: "phonebook",
    initialState,
    reducers: {
        filterContact: (state, action) => {
            state.filter = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
                state.error = null;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteContacts.fulfilled, (state, action) => {
                state.error = null;
                state.contacts = state.contacts.filter(
                    (item) => item.id !== action.payload.id
                );
            })
            .addCase(deleteContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContacts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(addContacts.fulfilled, (state, action) => {
                if (state.contacts.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())) {
                    return alert(`Name is already in contacts`);
                } else {
                    state.contacts = [...state.contacts, action.payload];
                }
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});
export const { filterContact } = contactsSlice.actions
export default contactsSlice.reducer;

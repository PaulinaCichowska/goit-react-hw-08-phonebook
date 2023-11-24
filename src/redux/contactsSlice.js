import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    contacts: [{ name: "xd", number: 12, id: 200 },
    { name: "xd", number: 12, id: 12, }],
    filter: "",
}

export const contactsSlice = createSlice({
    name: "phonebook",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter((user) => user.id !== action.payload)
        },
        filterContact: (state, action) => {
            state.filter = action.payload
        },
    }
});

export const { addContact, removeContact, filterContact } = contactsSlice.actions
export default contactsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    contacts: [],
    filter: "",
}

export const contactsSlice = createSlice({
    name: "phonebook",
    initialState,
    reducers: {
        addContact: (state, action) => {
            if (state.contacts.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())) {
                return alert(`Name is already in contacts`);
            } else {
                state.contacts = [...state.contacts, action.payload];
            }
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter((user) => user.id !== action.payload)
        },
        filterContact: (state, action) => {
            state.filter = action.payload
        },
        setContacts: (state, action) => {
            state.contacts = action.payload
        }
    }
});

export const { addContact, removeContact, filterContact, setContacts } = contactsSlice.actions
export default contactsSlice.reducer;

// if (state.contacts.name !== action.payload.name) {
//     console.log(state.contacts.name)
//     state.contacts.push(action.payload)
// } else {
//     console.error("This name is already on list");

// }
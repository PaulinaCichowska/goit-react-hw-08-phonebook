import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = [{
    contacts: [],
    filter: '',
}];
export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact(state, action) {
            state.forEach((contact) => {
                console.log(contact.name)
                if (contact.name === action.payload.name) {
                    alert(`${action.payload.name} is already in contacts`);
                } else {
                    state.push(action.payload)
                }
            })
        },
        removeContact(state, action) {
            return state.filter((user) => user.id !== action.payload)
        }
    }
});

export const { addContact, removeContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer;
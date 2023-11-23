import { createSlice, nanoid } from "@reduxjs/toolkit";



export const contactsSlice = createSlice({
    name: "contacts",
    initialState: [{ name: "xs", number: 1100101, }],
    reducers: {
        addContact(state, action) {
            state.filter((user) => {
                if (user.name === action.payload.name) {
                    return alert(`${action.payload.name} is already in contacts`);
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
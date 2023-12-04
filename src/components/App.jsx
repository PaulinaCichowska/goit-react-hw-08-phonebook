
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList/ContactsList"
import { Filter } from "./Filter/Filter";
import { ContactsForm } from "./ContactsForm/ContactsForm"
import css from "./App.module.css"
import { useSelector, useDispatch } from "react-redux";
import { addContact, setContacts } from '../redux/reducers/contactsSlice'
import { getContacts } from "redux/selectors";
import { addContacts, fetchContacts } from "redux/reducers/operations";

export const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    useEffect(() => {
        dispatch(fetchContacts())
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setNumber("");
        dispatch(addContacts({
            name: name,
            number: number,
            id: nanoid(),
        }));

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default:
                console.log(ErrorEvent)
        }
    }

    return (
        <div className={css.container}>
            <h1 className={css.header}>Phonebook</h1>
            <ContactsForm onSubmitForm={handleSubmit} onChangeForm={handleChange} inputName={name} inputNumber={number} />
            <h2 className={css.header}>Contacts</h2>
            <Filter />
            <ContactsList></ContactsList>
        </div >
    )
};



import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList/ContactsList"
import { Filter } from "./Filter/Filter";
import { ContactsForm } from "./ContactsForm/ContactsForm"
import css from "./App.module.css"
import { useSelector, useDispatch } from "react-redux";
import { addContact, setContacts } from '../redux/contactsSlice'
import { getContacts } from "redux/selectors";



export const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    useEffect(() => {
        const contactsFromLocalStorage = localStorage.getItem("contacts")
        if (contactsFromLocalStorage !== null) {
            try {
                const parseContacts = JSON.parse(contactsFromLocalStorage)
                dispatch(setContacts(parseContacts))

            }
            catch (error) {
                console.log(error.name)
            }
        }
    }, [dispatch]);


    useEffect(() => {
        const strContacts = JSON.stringify(contacts)

        localStorage.setItem("contacts", strContacts)
    }, [contacts])

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setNumber("");
        dispatch(addContact({
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


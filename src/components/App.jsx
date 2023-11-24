
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList/ContactsList"
import { Filter } from "./Filter/Filter";
import { ContactsForm } from "./ContactsForm/ContactsForm"
import css from "./App.module.css"
import { useSelector, useDispatch } from "react-redux";
import { addContact } from '../redux/contactsSlice'



export const App = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const [contacts, setContacts] = useState([])
    const [filter, setFilter] = useState('')



    // useEffect(() => {
    //     const contactsFromLocalStorage = localStorage.getItem("contacts")
    //     if (contactsFromLocalStorage !== null) {
    //         try {
    //             const parseContacts = JSON.parse(contactsFromLocalStorage)
    //             setContacts(parseContacts)
    //         }
    //         catch (error) {
    //             console.log(error.name)
    //         }
    //     }


    // }, []);


    // useEffect(() => {
    //     localStorage.setItem("contacts", JSON.stringify(contacts))
    // }, [contacts])




    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addContatcs();
    //     setName('')
    //     setNumber('')

    // }

    // const addContatcs = () => {

    //     const newName = name.toLowerCase();
    //     let nameOnList = false

    //     const newContact = { id: nanoid(), name: newName, number: number };
    //     dispatch(newContact);

    //     // contacts.forEach(contact => {
    //     //     if (contact.name.toLowerCase() === newName) {
    //     //         alert(`${contact.name} is already in contacts`);
    //     //         nameOnList = true
    //     //     }
    //     // });
    //     // if (nameOnList === false) {
    //     //     return setContacts(contacts.concat(newContact))
    //     // }
    // }









    const toFind = (evt) => {
        setFilter(evt.target.value.toLowerCase())
    }


    // const filteredContacts = () => {
    //     return contacts.filter(user => user.name.toLowerCase().includes(filter))
    // }


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
            <Filter value={filter} search={toFind} />
            <ContactsList></ContactsList>
        </div >
    )


};


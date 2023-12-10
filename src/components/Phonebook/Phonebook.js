import css from "../App.module.css"
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContacts, fetchContacts } from "redux/reducers/contacts/operations";
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { Filter } from "components/Filter/Filter";
import { ContactsList } from "components/ContactsList/ContactsList";



export const Phonebook = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])


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
}
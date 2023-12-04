
import css from "./ContactsList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { removeContact } from "redux/reducers/contactsSlice"
import { deleteContacts } from "redux/reducers/operations"
import { getContacts, getFilter } from "redux/selectors"

export const ContactsList = () => {
    const contactsList = useSelector(getContacts);
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    // const filteredContactsList = contactsList.filter(contact =>
    //     contact.name.toLowerCase().includes(filter)
    // );

    const removeUser = (id) => {
        dispatch(deleteContacts(id))
    }

    return (
        <ul className={css.list}>
            {contactsList.map((user) => {
                return <li className={css.listItem} key={user.id}> {user.name}: {user.number}<button className={css.removeBtn} onClick={() => removeUser(user.id)} type="button">REMOVE</button></li>
            })}
        </ul>)
}



import css from "./ContactsList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { removeContact } from "redux/contactsSlice"
import { getContacts, getFilter } from "redux/selectors"

const list = []

export const ContactsList = () => {
    const contactsList = useSelector(getContacts);
    const dispatch = useDispatch();

    const removeUser = (id) => {
        dispatch(removeContact(id))
    }

    return (
        <ul className={css.list}>
            {contactsList.map((user) => {
                return <li className={css.listItem} key={user.id}> {user.name}: {user.number}<button className={css.removeBtn} onClick={() => removeUser(user.id)} type="button">REMOVE</button></li>
            })}
        </ul>)
}


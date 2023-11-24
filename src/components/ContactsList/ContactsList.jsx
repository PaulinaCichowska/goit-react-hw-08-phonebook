import PropTypes from "prop-types"
import css from "./ContactsList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { removeContact } from "redux/contactsSlice"

export const ContactsList = () => {
    const contacts = useSelector((state) => state.contacts)
    const dispatch = useDispatch();

    const removeUser = (id) => {
        dispatch(removeContact(id))

    }
    return (
        <ul className={css.list}>
            {contacts.map((user) => (
                <li className={css.listItem} key={user.id}> {user.name}: {user.number}<button className={css.removeBtn} onClick={() => removeUser(user.id)} type="button">REMOVE</button></li>
            ))}
        </ul>)
}


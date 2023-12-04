
import css from "./ContactsList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteContacts } from "redux/reducers/operations"
import { selectContacts, selectFilter } from "redux/selectors"

export const ContactsList = () => {
    const contactsList = useSelector(selectContacts);
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const filteredContactsList = contactsList.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    const removeUser = (id) => {
        dispatch(deleteContacts(id))
    }

    return (
        <ul className={css.list}>
            {filteredContactsList.map((user) => {
                return <li className={css.listItem} key={user.id}> {user.name}: {user.number}<button className={css.removeBtn} onClick={() => removeUser(user.id)} type="button">REMOVE</button></li>
            })}
        </ul>)
}


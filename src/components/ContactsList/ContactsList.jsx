import PropTypes from "prop-types"
import css from "./ContactsList.module.css"

export const ContactsList = ({ contacts, removeEvt }) => (
    <ul className={css.list}>
        {contacts.map((user) => (

            <li className={css.listItem} key={user.id}> {user.name}: {user.number}<button className={css.removeBtn} onClick={() => removeEvt(user.name)} type="button">REMOVE</button></li>

        ))}
    </ul>)


ContactsList.prototype = {
    contacts: PropTypes.array,
    removeEvt: PropTypes.func
}

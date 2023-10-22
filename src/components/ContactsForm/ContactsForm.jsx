import PropTypes from "prop-types"
import { nanoid } from "nanoid";
import css from "./ContactsForm.module.css"


export const ContactsForm = ({ onSubmitForm, onChangeForm, inputName, inputNumber }) => {
    const inputIdName = nanoid();
    const inputIdNumber = nanoid();
    return (
        <form className={css.form} onSubmit={onSubmitForm}>
            <input
                className={css.input}
                onChange={onChangeForm}
                placeholder="Name"
                value={inputName}
                id={inputIdName}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
            <input
                className={css.input}
                onChange={onChangeForm}
                value={inputNumber}
                placeholder="Number"
                id={inputIdNumber}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={css.submit} type="submit" >
                Add contact
            </button>
        </form>
    )
}

ContactsForm.prototype = {
    onSubmitForm: PropTypes.func,
    onChangeForm: PropTypes.func,
    inputName: PropTypes.array,
    inputNumber: PropTypes.array,
}
import { nanoid } from "nanoid";
import css from "./Filter.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/selectors";
import { filterContact } from "redux/reducers/contacts/contactsSlice"



export const Filter = () => {
    const inputIdFilter = nanoid();
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch();

    const findContact = (evt) => {
        dispatch(filterContact(evt.target.value.toLowerCase()))
    }

    return (
        <div className={css.filter}>
            <label className={css.label} htmlFor={inputIdFilter} >Find contacts by name </label>
            <input className={css.input} id={inputIdFilter} type="text" value={filter} onChange={findContact}></input>
        </div>

    )
}

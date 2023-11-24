import PropTypes from "prop-types"
import { nanoid } from "nanoid";
import css from "./Filter.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selectors";
import { filterContact } from "redux/contactsSlice"



export const Filter = ({ value, search }) => {
    const inputIdFilter = nanoid();
    const filter = useSelector(getFilter)
    const dispatch = useDispatch();


    const findContact = (evt) => {
        dispatch(filterContact(evt.target.value.toLowerCase()))
    }


    return (
        <div className={css.filter}>
            <label className={css.label} htmlFor={inputIdFilter} >Find contacts by name </label>
            <input className={css.input} id={inputIdFilter} type="text" value={value} onChange={findContact}></input>
        </div>

    )
}
Filter.prototype = {
    value: PropTypes.string,
    search: PropTypes.func


}
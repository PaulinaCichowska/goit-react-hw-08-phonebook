import PropTypes from "prop-types"
import { nanoid } from "nanoid";
import css from "./Filter.module.css"


export const Filter = ({ value, search }) => {
    const inputIdFilter = nanoid();

    return (
        <div className={css.filter}>
            <label className={css.label} htmlFor={inputIdFilter} >Find contacts by name </label>
            <input className={css.input} id={inputIdFilter} type="text" value={value} onChange={search}></input>
        </div>

    )
}
Filter.prototype = {
    value: PropTypes.string,
    search: PropTypes.func


}
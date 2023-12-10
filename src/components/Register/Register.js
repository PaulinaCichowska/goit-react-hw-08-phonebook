import { useState } from "react"
import { useDispatch } from "react-redux";
import { register } from "redux/reducers/auth/operations";
import css from './Register.module.css'

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(
            register({
                name,
                email,
                password,
            })
        );

    }


    return (
        <div>
            <form className={css.form}>
                <input className={css.input} placeholder="name" name="name" value={name} type="text" onChange={(e) => setName(e.target.value)}></input>
                <input className={css.input} placeholder="email" name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <input className={css.input} placeholder="password" name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className={css.button} type="submit" onClick={handleClick}>register</button>
            </form>
        </div>

    )
}
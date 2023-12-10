import { useState } from 'react';
import css from './Login.module.css'
import { useDispatch } from 'react-redux';
import { login } from 'redux/reducers/auth/operations';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(
            login({
                email,
                password,
            })
        );

    }

    return (
        <form className={css.form} onSubmit={handleClick}>
            <input
                className={css.input}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                value={email}
                type="text"
                name="email"
                required />
            <input
                className={css.input}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="password"
                type="password"
                name="number"
                required
            />
            <button className={css.submit} type="submit" >
                Login
            </button>
        </form>
    )
}

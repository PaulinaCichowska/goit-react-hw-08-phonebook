import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { logout } from "redux/reducers/auth/operations"
import { selectIsLoggedIn } from "redux/reducers/auth/selectors"
import css from './Layout.module.css'

export const Layout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <div>
            <nav className={css.nav}>
                <Link className={css.tdNone} to="/">Home</Link>
                {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav />}
            </nav>
            <Outlet />
        </div>

    )
}
const AuthenticatedNav = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logout());
    };
    return (
        <>
            <Link className={css.tdNone} to="phonebook">Phonebook</Link>
            <button className={css.logout} onClick={handleClick}>Logout</button>
        </>
    );
};
const UnauthenticatedNav = () => (
    <>
        <Link className={css.tdNone} to="register">Register</Link>
        <Link className={css.tdNone} to="login">Login</Link>
    </>
);

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/reducers/auth/selectors";


export default function ProtectedRoute({ element: Component, redirect }) {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return !isLoggedIn ? Component : <Navigate to={redirect} />;
}
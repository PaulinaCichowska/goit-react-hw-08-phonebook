import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";

import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { Phonebook } from "./Phonebook/Phonebook";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { me } from "redux/reducers/auth/operations";
import { selectIsRefreshing } from "redux/reducers/auth/selectors";

export const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(() => {
        dispatch(me());
    }, [dispatch]);
    if (isRefreshing) return <p>loading...</p>;
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="login" element={<ProtectedRoute element={<Login />} redirect={"/phonebook"} />}></Route>
                <Route path="register" element={<ProtectedRoute element={<Register redirect={"/phonebook"} />} />}></Route>
                <Route path="phonebook" element={<PrivateRoute element={<Phonebook />} redirect="/login" />}></Route>
            </Route>
        </Routes>
    )
};


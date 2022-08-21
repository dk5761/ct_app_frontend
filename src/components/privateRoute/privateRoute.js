import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userSelector } from '../../features/auth/auth_slice';
import { useSelector } from "react-redux";


const PrivateRoute = () => {

    const { isAuthenticated } = useSelector(userSelector)

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute
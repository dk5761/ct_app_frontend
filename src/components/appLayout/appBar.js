import './layoutStyle.css'
import React from 'react'
import authService from '../../features/auth/service/authService'
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';
import { userSelector, logOut } from '../../features/auth/auth_slice';

const AppBar = () => {

    
    const {isAuthenticated} = useSelector(userSelector)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleOnLogoutClick = () => {
        dispatch(logOut())
        navigate('/login')
    }

    return <div className='app-bar-container'>
        <div className='app-bar-title-text'>
            CT-App
        </div>

        {
            isAuthenticated ?
                <button onClick={handleOnLogoutClick} className='app-bar-button'> Logout </button>:
                <div></div>
        }

    </div>
}

export default AppBar;
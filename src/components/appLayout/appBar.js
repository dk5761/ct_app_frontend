import './layoutStyle.css'
import React, { useState } from 'react'

const AppBar = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleOnLoginClick = () => {
        console.log("handleLoginClick clicked")
    }

    const handleOnLogoutClick = () => {
        console.log("handleOnLogoutClick clicked")
    }

    return <div className='app-bar-container'>
        <div className='app-bar-title-text'>
            CT-App
        </div>

        {
            isAuthenticated ?
                <button onClick={handleOnLoginClick} className='app-bar-button'> Login </button>
                :
                <button onClick={handleOnLogoutClick} className='app-bar-button'> Logout </button>
        }

    </div>
}

export default AppBar;
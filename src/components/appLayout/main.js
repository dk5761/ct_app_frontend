
import React from 'react'
import './layoutStyle.css'

const Main = ({ children }) => {
    return (
        <div className='main-container'>

            {children}

        </div>
    )
}

export default Main;
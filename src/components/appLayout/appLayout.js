import './layoutStyle.css'
import React from 'react'
import AppBar from './appBar'
import Main from './main'

const AppLayout = ({ children }) => {
    return <div className='appLayout-main'>
        <AppBar />
        <Main>
            {
                children
            }
        </Main>
    </div>
}

export default AppLayout;
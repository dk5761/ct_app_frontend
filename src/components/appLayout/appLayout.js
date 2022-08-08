import './layoutStyle.css'
import React from 'react'
import AppBar from './appBar'
import Main from './main'

const AppLayout = ({ children }) => {
    return <div>
        <AppBar>
            <Main>
                {children}
            </Main>
        </AppBar>
    </div>
}

export default AppLayout;
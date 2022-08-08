import './layoutStyle.css'
import React from 'react'
import AppBar from './appBar'
import Main from './main'

const AppLayout = ({ children }) => {



    return <div className='appLayout-main'>{
        console.log(children)
    }
        <AppBar />
        <Main>
            {
                children
            }
        </Main>
    </div>
}

export default AppLayout;
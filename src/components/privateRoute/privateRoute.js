import React from 'react'

import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {

    // Add your own authentication on the below line.
    const isLoggedIn = false

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    { children }
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default PrivateRoute
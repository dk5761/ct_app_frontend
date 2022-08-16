import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import './routeHolder.css'

const RouteHolder = () => {

    const navigate = useNavigate();

    const itemHandler = (path) => {

        navigate(path);

    }

    return <div className="analyst-container">
        <div className="route-item" onClick={() => itemHandler('analyst')}>
            Go to Analyst WOW page
        </div>
        <div className="route-item" onClick={() => itemHandler('fridayTask')}>
            Go to Friday Task page
        </div>
        <div className="route-item" onClick={() => itemHandler('dailyTask')}>
            Go to Daily Task page
        </div>
    </div>
}

export default RouteHolder
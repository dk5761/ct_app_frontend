import React from "react";
import { useNavigate, Link } from 'react-router-dom';

const RouteHolder = () => {

    const navigate = useNavigate();

    const itemHandler = (path) => {
       
        navigate(path);
        
    }

    return <div className="routeHolder-container">
        <div className="route-item" onClick={()=>itemHandler('excel/update')}>
            Update Excel
        </div>
        <div className="route-item" onClick={()=>itemHandler('excel/create  ')}>
            Create Excel
        </div>
    </div>
}

export default RouteHolder
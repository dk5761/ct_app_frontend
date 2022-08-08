import React, { useState } from "react";
import CustomTextField from "../../../../components/customTextField/customTextField";
import './login_page.css'

const LoginScreen = () => {

    const [csslId, setCsslId] = useState("");
    const [password, setPassword] = useState("");

    const handleOnSubmit = ()=>{
        console.log(csslId, password)
        // do the auth redux thing
    }

 
    return <div className="login-container">
        <CustomTextField labelText={"CsslId"} value={csslId} handleOnChange={setCsslId}/>
        <CustomTextField labelText={"Password"} value={password} handleOnChange={setPassword}/>
        <button className="btn-class" onClick={handleOnSubmit}>Submit</button>
    </div>
}

export default LoginScreen;
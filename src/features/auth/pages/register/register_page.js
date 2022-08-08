import React, { useState } from "react";
import CustomTextField from "../../../../components/customTextField/customTextField";
import './register_page.css'

const RegisterScreen = () => {

    const [csslId, setCsslId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const handleOnSubmit = ()=>{
        console.log(csslId, password)
        // do the auth redux thing
    }

 
    return <div className="register-container">
        <CustomTextField labelText={"CsslId"} value={csslId} handleOnChange={setCsslId}/>
        <CustomTextField labelText={"Password"} value={password} handleOnChange={setPassword}/>
        <CustomTextField labelText={"First Name"} value={firstName} handleOnChange={setFirstName}/>
        <CustomTextField labelText={"Last Name"} value={lastName} handleOnChange={setLastName}/>
        <button className="btn-class" onClick={handleOnSubmit}>Submit</button>
    </div>
}

export default RegisterScreen;
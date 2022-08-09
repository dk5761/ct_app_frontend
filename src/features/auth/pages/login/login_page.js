import React, { useEffect, useState } from "react";
import CustomTextField from "../../../../components/customTextField/customTextField";
import './login_page.css'
import { useDispatch, useSelector } from "react-redux";
import { clearState, loginUser, userSelector } from "../../auth_slice";
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [csslId, setCsslId] = useState("");
    const [password, setPassword] = useState("");
    const {  isSuccess, isError, } = useSelector(
        userSelector
      );

   

    const handleOnSubmit = ()=>{
        console.log(csslId, password)
        dispatch(loginUser({
            email: csslId,
            password: password
        }))
        // do the auth redux thing
    }

    useEffect(() => {
        if (isError) {
          dispatch(clearState());
        }
    
        if (isSuccess) {
          dispatch(clearState());
          console.log("sucess")
          navigate('/')
        }
      }, [isError, isSuccess]);

 
    return <div className="login-container">
        <CustomTextField labelText={"CsslId"} value={csslId} handleOnChange={setCsslId}/>
        <CustomTextField labelText={"Password"} value={password} handleOnChange={setPassword}/>
        <button className="btn-class" onClick={handleOnSubmit}>Submit</button>
    </div>
}

export default LoginScreen;
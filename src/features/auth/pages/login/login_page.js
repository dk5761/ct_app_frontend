import React, { useEffect, useState } from "react";
import CustomTextField from "../../../../components/customTextField/customTextField";
import './login_page.css'
import { useDispatch, useSelector } from "react-redux";
import { clearState, loginUser, userSelector } from "../../auth_slice";
import { useNavigate } from 'react-router-dom';
import CustomButton from "../../../../components/customButton/customButton";

const LoginScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [csslId, setCsslId] = useState("");
  const [password, setPassword] = useState("");
  const { isSuccess, isError, token, errorMessage } = useSelector(
    userSelector
  );



  const handleOnSubmit = () => {

    dispatch(loginUser({
      email: csslId.trim(),
      password: password
    }))
    // do the auth redux thing
  }

  useEffect(() => {
    // removes the error from the screen and reset the state to null
    if (isError) {
      setTimeout(() => {
        dispatch(clearState());
      }, 10000)
    }

    if (isSuccess) {
      // dispatch(clearState());
      navigate('/')
    }

    if (token !== null) {
      navigate("/")
    }


  }, [dispatch, isError, isSuccess, navigate, token]);

  return <div className="login-container">
    <CustomTextField labelText={"CsslId"} value={csslId} handleOnChange={(evt) => setCsslId(evt.target.value)} />
    <CustomTextField type="password" labelText={"Password"} value={password} handleOnChange={(evt) => setPassword(evt.target.value)} />
    <CustomButton value={"Submit"} onClick={handleOnSubmit} />
    {
      isError === true ? <div className="errorContainer" >
        Error: {
          errorMessage
        }
      </div>
        : null
    }
  </div>
}

export default LoginScreen;
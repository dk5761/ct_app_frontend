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
  const { isSuccess, isError, token } = useSelector(
    userSelector
  );



  const handleOnSubmit = () => {
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
      navigate('/')
    }

    if (token !== null) {
      navigate("/")
    }
  }, [dispatch, isError, isSuccess, navigate, token]);




  return <div className="login-container">
    <CustomTextField labelText={"CsslId"} value={csslId} handleOnChange={(evt) => setCsslId(evt.target.value)} />
    <CustomTextField labelText={"Password"} value={password} handleOnChange={(evt) => setPassword(evt.target.value)} />
    <CustomButton value={"Submit"} onClick={handleOnSubmit} />
  </div>
}

export default LoginScreen;
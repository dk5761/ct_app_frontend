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
  const [isShown, setIsShown] = useState(true);
  


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

    setIsShown(true)

  }, [dispatch, isError, isSuccess, navigate, token]);


  if(isError){
    setTimeout(() => {
      setIsShown(false);
    }, 3000);
  }


  return <div className="login-container">
    <CustomTextField labelText={"CsslId"} value={csslId} handleOnChange={(evt) => setCsslId(evt.target.value)} />
    <CustomTextField type="password" labelText={"Password"} value={password} handleOnChange={(evt) => setPassword(evt.target.value)}  />
    <CustomButton value={"Submit"} onClick={handleOnSubmit} />
    {
      isError !== null ? isShown ? <p>{errorMessage}</p> : null
     : null
    }
  </div>
}

export default LoginScreen;
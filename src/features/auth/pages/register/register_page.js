import React, { useState, useEffect } from "react";
import CustomTextField from "../../../../components/customTextField/customTextField";
import './register_page.css'
import { useDispatch, useSelector } from "react-redux";
import { clearState, loginUser, userSelector } from "../../auth_slice";
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [csslId, setCsslId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { isSuccess, isError, } = useSelector(
    userSelector
  );


  const handleOnSubmit = () => {
    if(password === password2){
      dispatch(loginUser({
        email: csslId,
        password: password
      }))
    }
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, dispatch]);



  return <div className="register-container">
    <CustomTextField labelText={"CsslId"} value={csslId} handleOnChange={setCsslId} />
    <CustomTextField type="password" labelText={"Password"} value={password} handleOnChange={setPassword} />
    <CustomTextField type="password2" labelText={"Re-Enter Password"} value={password2} handleOnChange={setPassword2} />
    <CustomTextField labelText={"First Name"} value={firstName} handleOnChange={setFirstName} />
    <CustomTextField labelText={"Last Name"} value={lastName} handleOnChange={setLastName} />
    <button className="btn-class" onClick={handleOnSubmit}>Submit</button>
  </div>
}

export default RegisterScreen;
import React, { useCallback, useEffect, useState } from "react";
import CustomTextField from "../../../components/customTextField/customTextField";
import './analyst_wow_style.css'
import { useDispatch, useSelector } from "react-redux";
// import { clearState, loginUser, userSelector } from "../../auth_slice";
import { useNavigate } from 'react-router-dom';
import { analystSelector, getAnalystTask, getAnalystWOW, updateAnalystTask, updateAnalystWOW } from "../analyst_wow_slice";

const AnalystUpdatePage = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { isError, isFetching, isSuccess, fridayTask } = useSelector(
    analystSelector
  );

  console.log(fridayTask)

  const [excelLink, setExcelLink] = useState("");
  const [editing, setEditing] = useState(false);

  const [range, setRange] = useState({
    csat: "",
    communication: "",
    surveyCount: "",
    closedCase: "",
    atrDays: "",
    ownedCases: "",
    adherance: "",
    timeoutsPhone: "",
    timeoutsChat: "",
    lateLogins: "",
    coverage: ""
  });

  const onChangeHandler = useCallback(
    ({ target: { name, value } }) => setRange(state => ({ ...state, [name]: value }), []), []

  );






  const handleOnSubmit = () => {

    const data = {
      excelLink,
      range
    }

    dispatch(updateAnalystWOW(
      data
    ))

  }


  useEffect(() => {

    if (fridayTask === null) {
      dispatch(getAnalystWOW())
    } else {

      setExcelLink(fridayTask.excelLink)
      setRange(fridayTask.range)

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, fridayTask]);


  return fridayTask === null ? <div>
    Loading
  </div> :
    <div className="analyst-container">
      <CustomTextField labelText={"Excel Script Link"} value={excelLink} handleOnChange={setExcelLink} disabled={true} />
      <div className="info-container">
        <img src="" className="info-image" alt="" />
        Please enter the link to Analyst WOW Excel.
      </div>

      <input type={"button"} value={editing ? "Disable Editing Ranges" : "Enable Editing Ranges"} onClick={() => setEditing(!editing)} />


      <div className="info-container">
        <img src="" className="info-image" alt="" />
        Please enter the ranges for parameters in the mentioned format: A:Z, AA:AZ, etc.
      </div>
      <CustomTextField labelText={"CSAT"} value={range.csat} handleOnChange={onChangeHandler} name="csat" disabled={editing ? false : true} />

      <CustomTextField labelText={"Communication"} value={range.communication} handleOnChange={onChangeHandler} name={"communication"} disabled={editing ? false : true} />
      <CustomTextField labelText={"Survey Count"} value={range.surveyCount} handleOnChange={onChangeHandler} name={"surveyCount"} disabled={editing ? false : true} />
      <CustomTextField labelText={"Closed Cases"} value={range.closedCase} handleOnChange={onChangeHandler} name={"closedCase"} disabled={editing ? false : true} />
      <CustomTextField labelText={"Atr Days"} value={range.atrDays} handleOnChange={onChangeHandler} name={"atrDays"} disabled={editing ? false : true} />
      <CustomTextField labelText={"Owned Cases"} value={range.ownedCases} handleOnChange={onChangeHandler} name={"ownedCases"} disabled={editing ? false : true} />
      <CustomTextField labelText={"Adherance"} value={range.adherance} handleOnChange={onChangeHandler} name={"adherance"} disabled={editing ? false : true} />
      <CustomTextField labelText={"Timeout Phone"} value={range.timeoutsPhone} handleOnChange={onChangeHandler} name={"timeoutsPhone"} disabled={editing ? false : true} />
      <CustomTextField labelText={"Timeout Chat"} value={range.timeoutsChat} handleOnChange={onChangeHandler} name={"timeoutsChat"} disabled={editing ? false : true} />
      <CustomTextField labelText={"Late Login"} value={range.lateLogins} handleOnChange={onChangeHandler} name={"lateLogins"} disabled={editing ? false : true} />
      <CustomTextField labelText={"Coverage"} value={range.coverage} handleOnChange={onChangeHandler} name={"coverage"} disabled={editing ? false : true} />

      <button className="btn-class" onClick={handleOnSubmit}>Submit</button>


    </div>
}

export default AnalystUpdatePage;
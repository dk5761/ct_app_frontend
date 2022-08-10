import React, { useEffect, useState } from "react";
import CustomTextField from "../../../components/customTextField/customTextField";
import './analyst_wow_style.css'
import { useDispatch, useSelector } from "react-redux";
// import { clearState, loginUser, userSelector } from "../../auth_slice";
import { useNavigate } from 'react-router-dom';
import { analystSelector,  getAnalystTask } from "../analyst_wow_slice";

const AnalystUpdatePage = () => {

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const {isError, isFetching, isSuccess, fridayTask} = useSelector(
        analystSelector
      );

    console.log(fridayTask)

    const [excelLink, setExcelLink] = useState(fridayTask.excelLink);

    const [csat, setCsat] = useState(fridayTask.range["csat"]);
    const [communication, setCommunication] = useState(fridayTask.range["communication"]);
    const [surveyCount, setSurveyCount] = useState(fridayTask.range["surveyCount"]);
    const [closedCase, setClosedCase] = useState(fridayTask.range["closedCase"]);
    const [atrDays, setAtrDays] = useState(fridayTask.range["atrDays"]);
    const [ownedCases, setOwnedCases] = useState(fridayTask.range["ownedCases"]);
    const [adherance, setAdherance] = useState(fridayTask.range["adherance"]);
    const [timeoutsPhone, setTimeoutsPhone] = useState(fridayTask.range["timeoutsPhone"]);
    const [timeoutsChat, setTimeoutsChat] = useState(fridayTask.range["timeoutsChat"]);
    const [lateLogins, setLateLogins] = useState(fridayTask.range["lateLogins"]);
    const [coverage, setCoverage] = useState(fridayTask.range["coverage"]);


    

    const handleOnSubmit = ()=>{
        console.log(csat, communication)
        const range = {
            csat,
            communication,
            surveyCount,
            closedCase,
            atrDays,
            ownedCases,
            adherance,
            timeoutsPhone,
            timeoutsChat,
            lateLogins,
            coverage
        }

        console.log(range)
    }
   

    // const handleOnSubmit = ()=>{
    //     console.log(csslId, password)
    //     dispatch(loginUser({
    //         email: csslId,
    //         password: password
    //     }))
    //     // do the auth redux thing
    // }

    useEffect(() => {
        dispatch(getAnalystTask())
      }, []);

 
    return <div className="analyst-container">
       <CustomTextField labelText={"Excel Link"} value={excelLink} handleOnChange={setExcelLink} />
       <div className="info-container">
        <img src="" className="info-image"/>
        Please enter the link to Analyst WOW Excel.
       </div>
       <hr></hr>

       <div className="info-container">
        <img src="" className="info-image"/>
        Please enter the ranges for parameters in the mentioned format: A:Z, AA:AZ, etc.
       </div>
       <CustomTextField labelText={"CSAT"} value={csat}  handleOnChange={setCsat}/>
       <CustomTextField labelText={"Communication"} value={communication} handleOnChange={setCommunication} />
       <CustomTextField labelText={"Survey Count"} value={surveyCount} handleOnChange={setSurveyCount}/>
       <CustomTextField labelText={"Closed Cases"} value={closedCase} handleOnChange={setClosedCase}/>
       <CustomTextField labelText={"Atr Days"} value={atrDays} handleOnChange={setAtrDays}/>
       <CustomTextField labelText={"Owned Cases"} value={ownedCases} handleOnChange={setOwnedCases}/>
       <CustomTextField labelText={"Adherance"} value={adherance} handleOnChange={setAdherance}/>
       <CustomTextField labelText={"Timeout Phone"}value={timeoutsPhone} handleOnChange={setTimeoutsPhone} />
       <CustomTextField labelText={"Timeout Chat"}value={timeoutsChat} handleOnChange={setTimeoutsChat} />
       <CustomTextField labelText={"Late Login"}value={lateLogins} handleOnChange={setLateLogins} />
       <CustomTextField labelText={"Coverage"}value={coverage} handleOnChange={setCoverage} />

       <button className="btn-class" onClick={handleOnSubmit}>Submit</button>


    </div>
}

export default AnalystUpdatePage;
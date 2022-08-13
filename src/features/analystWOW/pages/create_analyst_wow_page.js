// import React, { useEffect, useState } from "react";
// import CustomTextField from "../../../components/customTextField/customTextField";
// import './analyst_wow_style.css'
// import { useDispatch, useSelector } from "react-redux";
// // import { clearState, loginUser, userSelector } from "../../auth_slice";
// import { useNavigate } from 'react-router-dom';
// import { analystSelector, createAnalystTask } from "../analyst_wow_slice";

// const AnalystCreatePage = () => {

//     const dispatch = useDispatch();
//     // const navigate = useNavigate();
//     const [excelLink, setExcelLink] = useState("");

//     const [csat, setCsat] = useState("");
//     const [communication, setCommunication] = useState("");
//     const [surveyCount, setSurveyCount] = useState("");
//     const [closedCase, setClosedCase] = useState("");
//     const [atrDays, setAtrDays] = useState("");
//     const [ownedCases, setOwnedCases] = useState("");
//     const [adherance, setAdherance] = useState("");
//     const [timeoutsPhone, setTimeoutsPhone] = useState("");
//     const [timeoutsChat, setTimeoutsChat] = useState("");
//     const [lateLogins, setLateLogins] = useState("");
//     const [coverage, setCoverage] = useState("");

//     const { isSuccess, isError, } = useSelector(
//         analystSelector
//     );

//     const handleOnSubmit = () => {
//         console.log(csat, communication)
//         const range = {
//             csat,
//             communication,
//             surveyCount,
//             closedCase,
//             atrDays,
//             ownedCases,
//             adherance,
//             timeoutsPhone,
//             timeoutsChat,
//             lateLogins,
//             coverage
//         }

//         dispatch(createAnalystTask(excelLink, range));


//     }


//     // const handleOnSubmit = ()=>{
//     //     console.log(csslId, password)
//     //     dispatch(loginUser({
//     //         email: csslId,
//     //         password: password
//     //     }))
//     //     // do the auth redux thing
//     // }

//     // useEffect(() => {
//     //     if (isError) {
//     //       dispatch(clearState());
//     //     }

//     //     if (isSuccess) {
//     //       dispatch(clearState());
//     //       console.log("sucess")
//     //       navigate('/')
//     //     }
//     //   }, [isError, isSuccess]);


//     return <div className="analyst-container">
//         <CustomTextField labelText={"Excel Link"} value={excelLink} handleOnChange={setExcelLink} />
//         <div className="info-container">
//             <img src="" className="info-image" />
//             Please enter the link to Analyst WOW Excel.
//         </div>
//         <hr></hr>

//         <div className="info-container">
//             <img src="" className="info-image" />
//             Please enter the ranges for parameters in the mentioned format: A:Z, AA:AZ, etc.
//         </div>
//         <CustomTextField labelText={"CSAT"} value={csat} handleOnChange={setCsat} />
//         <CustomTextField labelText={"Communication"} value={communication} handleOnChange={setCommunication} />
//         <CustomTextField labelText={"Survey Count"} value={surveyCount} handleOnChange={setSurveyCount} />
//         <CustomTextField labelText={"Closed Cases"} value={closedCase} handleOnChange={setClosedCase} />
//         <CustomTextField labelText={"Atr Days"} value={atrDays} handleOnChange={setAtrDays} />
//         <CustomTextField labelText={"Owned Cases"} value={ownedCases} handleOnChange={setOwnedCases} />
//         <CustomTextField labelText={"Adherance"} value={adherance} handleOnChange={setAdherance} />
//         <CustomTextField labelText={"Timeout Phone"} value={timeoutsPhone} handleOnChange={setTimeoutsPhone} />
//         <CustomTextField labelText={"Timeout Chat"} value={timeoutsChat} handleOnChange={setTimeoutsChat} />
//         <CustomTextField labelText={"Late Login"} value={lateLogins} handleOnChange={setLateLogins} />
//         <CustomTextField labelText={"Coverage"} value={coverage} handleOnChange={setCoverage} />

//         <button className="btn-class" onClick={handleOnSubmit}>Submit</button>


//     </div>
// }

// export default AnalystCreatePage;
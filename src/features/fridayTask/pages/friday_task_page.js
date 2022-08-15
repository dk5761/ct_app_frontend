import React, { useCallback, useEffect, useState } from "react";
import CustomTextField from "../../../components/customTextField/customTextField";
import './fridayTask_style.css'
import { useDispatch, useSelector } from "react-redux";
// import { clearState, loginUser, userSelector } from "../../auth_slice";
import { fridayTaskSelector, getFridayTask, updateFridayTask } from "../friday_task_slice";

const FridayTaskPage = () => {

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const { isSuccess, fridayTask } = useSelector(
        fridayTaskSelector
    );

    const [editing, setEditing] = useState(false);

    const [data, setData] = useState({
        recording: "",
        presentation: "",
        agedCases: ""
    });

    const onChangeHandler = useCallback(
        ({ target: { name, value } }) => setData(state => ({ ...state, [name]: value }), []), []

    );
    const handleOnSubmit = () => {
        dispatch(updateFridayTask(
            data
        ))
    }


    useEffect(() => {
        if (fridayTask === null) {
            dispatch(getFridayTask())
        } else {
            setData(fridayTask)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fridayTask]);


    return fridayTask === null ? <div>
        Loading
    </div> :
        <div className="fridayTask-container">


            <input type={"button"} value={editing ? "Disable Editing Ranges" : "Enable Editing Ranges"} onClick={() => setEditing(!editing)} />


            <div className="info-container">
                <img src="" className="info-image" alt="" />
                Please enter the ranges for parameters in the mentioned format: A:Z, AA:AZ, etc.
            </div>
            <CustomTextField labelText={"Recording"} value={data.recording} handleOnChange={onChangeHandler} name="recording" disabled={editing ? false : true} />
            <CustomTextField labelText={"Presentation"} value={data.presentation} handleOnChange={onChangeHandler} name={"presentation"} disabled={editing ? false : true} />
            <CustomTextField labelText={"agedCases"} value={data.agedCases} handleOnChange={onChangeHandler} name={"agedCases"} disabled={editing ? false : true} />

            <button className="btn-class" onClick={handleOnSubmit}>Submit</button>


        </div>
}

export default FridayTaskPage;
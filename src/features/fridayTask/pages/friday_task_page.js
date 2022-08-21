import React, { useCallback, useEffect, useState } from "react";
import CustomTextField from "../../../components/customTextField/customTextField";
import './fridayTask_style.css'
import { useDispatch, useSelector } from "react-redux";
// import { clearState, loginUser, userSelector } from "../../auth_slice";
import { fridayTaskSelector, getFridayTask, updateFridayTask, clearState } from "../friday_task_slice";
import CustomButton from "../../../components/customButton/customButton";

const FridayTaskPage = () => {

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const { fridayTask, isError, errorMessage } = useSelector(
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
        if (isError) {
            setTimeout(() => {
                dispatch(clearState());
            }, 10000)
        }


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



            <CustomButton value={editing ? "Disable Editing" : "Enable Editing"} onClick={() => setEditing(!editing)} />

            <div className="information-header">
                Please Enable editing to update the previous records:
            </div>
            <CustomTextField labelText={"Recording"} value={data.recording} handleOnChange={onChangeHandler} name="recording" disabled={editing ? false : true} />
            <CustomTextField labelText={"Presentation"} value={data.presentation} handleOnChange={onChangeHandler} name={"presentation"} disabled={editing ? false : true} />
            <CustomTextField labelText={"agedCases"} value={data.agedCases} handleOnChange={onChangeHandler} name={"agedCases"} disabled={editing ? false : true} />

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

export default FridayTaskPage;
import React, { useCallback, useState } from "react";
import CustomTextField from "../../../components/customTextField/customTextField";
import './dailyTask_style.css'
import { useDispatch } from "react-redux";
import { updateDailyTask } from "../daily_task_slice";
import { useLocation, useNavigate } from 'react-router-dom';

const DailyTaskPage = () => {

    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const { state } = useLocation()
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: state.title,
        imageUrl: state.imageUrl,
        url: state.url
    });

    const onChangeHandler = useCallback(
        ({ target: { name, value } }) => setData(state => ({ ...state, [name]: value }), []), []

    );
    const handleOnSubmit = () => {

        try {
            dispatch(updateDailyTask(
                {
                    id: state.id,
                    data
                }
            ))
            navigate(-1)
        } catch (error) {

        }
    }





    return <div className="dailyTask-container">
        {
            console.log(state)
        }

        <input type={"button"} value={editing ? "Disable Editing Ranges" : "Enable Editing Ranges"} onClick={() => setEditing(!editing)} />


        <div className="info-container">
            <img src="" className="info-image" alt="" />
            Please enter the ranges for parameters in the mentioned format: A:Z, AA:AZ, etc.
        </div>
        <CustomTextField labelText={"title"} value={data.title} handleOnChange={onChangeHandler} name="title" disabled={editing ? false : true} />
        <CustomTextField labelText={"imageUrl"} value={data.imageUrl} handleOnChange={onChangeHandler} name={"imageUrl"} disabled={editing ? false : true} />
        <CustomTextField labelText={"url"} value={data.url} handleOnChange={onChangeHandler} name={"url"} disabled={editing ? false : true} />

        <button className="btn-class" onClick={handleOnSubmit}>Submit</button>


    </div>
}

export default DailyTaskPage;
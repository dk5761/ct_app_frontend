import React, { useCallback, useState } from "react";
import CustomTextField from "../../../components/customTextField/customTextField";
import './dailyTask_style.css'
import { useDispatch } from "react-redux";
import { createDailyTask } from "../daily_task_slice";
import { useNavigate } from 'react-router-dom';

const CreateDailyTaskPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        imageUrl: "",
        url: ""
    });

    const onChangeHandler = useCallback(
        ({ target: { name, value } }) => setData(state => ({ ...state, [name]: value }), []), []

    );
    const handleOnSubmit = () => {

        try {
            dispatch(createDailyTask(data))
            navigate(-1)
        } catch (error) {

        }
    }





    return <div className="dailyTask-container">

        <div className="info-container">
            <img src="" className="info-image" alt="" />
            Enter the title, image url, url for the dailyTask
        </div>
        <CustomTextField labelText={"title"} value={data.title} handleOnChange={onChangeHandler} name="title" />
        <CustomTextField labelText={"imageUrl"} value={data.imageUrl} handleOnChange={onChangeHandler} name={"imageUrl"} />
        <CustomTextField labelText={"url"} value={data.url} handleOnChange={onChangeHandler} name={"url"} />

        <button className="btn-class" onClick={handleOnSubmit}>Submit</button>


    </div>
}

export default CreateDailyTaskPage;
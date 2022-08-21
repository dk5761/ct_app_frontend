import React, { useCallback, useState, useEffect } from "react";
import CustomTextField from "../../../components/customTextField/customTextField";
import './dailyTask_style.css'
import { useDispatch, useSelector } from "react-redux";
import { dailyTaskSelector, updateDailyTask, clearState } from "../daily_task_slice";
import { useLocation, useNavigate } from 'react-router-dom';
import CustomButton from "../../../components/customButton/customButton";

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


    const { isError, errorMessage } = useSelector(dailyTaskSelector);



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

    useEffect(() => {

        if (isError) {
            setTimeout(() => {
                dispatch(clearState());
            }, 10000)
        }

    }, [dispatch, isError])



    return <div className="dailyTask-container">

        <CustomButton value={editing ? "Disable Editing " : "Enable Editing "} onClick={() => setEditing(!editing)} />

        <CustomTextField labelText={"title"} value={data.title} handleOnChange={onChangeHandler} name="title" disabled={editing ? false : true} />
        <CustomTextField labelText={"imageUrl"} value={data.imageUrl} handleOnChange={onChangeHandler} name={"imageUrl"} disabled={editing ? false : true} />
        <CustomTextField labelText={"url"} value={data.url} handleOnChange={onChangeHandler} name={"url"} disabled={editing ? false : true} />
        <CustomButton value={"Submit"} onClick={handleOnSubmit} style={{ "justify-self": "center" }} />

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

export default DailyTaskPage;
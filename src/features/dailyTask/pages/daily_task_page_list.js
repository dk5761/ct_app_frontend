import React, { useEffect } from "react";
import './dailyTask_style.css'
import { useDispatch, useSelector } from "react-redux";
import { dailyTaskSelector, getDailyTask } from "../daily_task_slice";
import { useNavigate } from 'react-router-dom';


const DailyTaskPageList = () => {

    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const navigate = useNavigate();

    const { dailyTaskList } = useSelector(
        dailyTaskSelector
    );

    const itemHandler = (path, state) => {

        navigate(path, { state });

    }

    useEffect(() => {
        if (dailyTaskList === null) {
            dispatch(getDailyTask())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dailyTaskList]);


    return dailyTaskList === null ? <div>
        Loading
    </div> :
        <div className="dailyTask-container">

            {
                dailyTaskList.map((item) => {

                    return <div className="route-item" onClick={() => itemHandler(`/dailyTask/${item.id}`, item)} key={item.id}>
                        {item.title}
                    </div>



                })
            }



        </div>
}

export default DailyTaskPageList;
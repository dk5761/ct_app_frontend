import React, { useEffect } from "react";
import './dailyTask_style.css'
import { useDispatch, useSelector } from "react-redux";
import { dailyTaskSelector, getDailyTask } from "../daily_task_slice";
import { useNavigate } from 'react-router-dom';
import { userSelector } from "../../auth/auth_slice";

const DailyTaskPageList = () => {

    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const navigate = useNavigate();

    const { dailyTaskList } = useSelector(
        dailyTaskSelector
    );

    const {position} = useSelector(userSelector)

    const itemHandler = (path, state) => {

        navigate(path, { state });

    }

    useEffect(() => {
        if (dailyTaskList === null) {
            dispatch(getDailyTask())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dailyTaskList, dispatch]);

    const handleOnDelete = (id) => {

    }


    return dailyTaskList === null ? <div>
        Loading
    </div> :
        <div className="dailyTask-container">{
            console.log(dailyTaskList)
        }

        {    position < 2 ? null:
            <>
              <div className="dt-item-container" onClick={() => navigate('/dailyTask/create')} >
                        Create daily task
              </div><br />
            </>
        }
            
            <div className="information-header">
                Following are the Existing Daily Tasks:
            </div>

            {
                dailyTaskList.map((item) => {

                    return <div style={{ display: "flex", alignItems: 'center', paddingLeft: "12px" }}  key={item.id}>
                        <div className="dt-item-container" onClick={() => itemHandler(`/dailyTask/${item.id}`, item)}>
                            <div className="item-text">{item.title}</div>

                        </div>
                        <img src={require("../../../assets/images/delete.png")} alt="delete" className="img-delete-route" onClick={handleOnDelete} /></div>



                })
            }



        </div>
}

export default DailyTaskPageList;
import axios from "axios";

const API_URL = "http://localhost:3001/dtask/";


const getDailyTask = async (token) => {
    try {

        return await axios({
            method: 'GET',
            url: API_URL + "getAllTask",
            headers: {
                Authorization: token
            }
        })

    } catch (error) {
        console.log(error); 
        throw error.response.data
    }
};

const createDailyTask = async ({ title, imageUrl, url }, token) => {
    try {
        return await axios({
            method: 'POST',
            url: API_URL + "createDTask",
            data: { title, imageUrl, url },
            headers: {
                Authorization: token
            }
        })


    } catch (error) {
        console.log(error);
        throw error.response.data
    }
};

const updateDailyTask = async ({ id, data }, token) => {
    try {
        return await axios({
            method: 'PUT',
            url: API_URL + "updateDTask",
            data: { id, data },
            headers: {
                Authorization: token
            }
        })

    } catch (error) {
        console.log(error);
        throw error.response.data
    }

};





const dailyTaskService = {
    getDailyTask,
    createDailyTask,
    updateDailyTask,
};

export default dailyTaskService;
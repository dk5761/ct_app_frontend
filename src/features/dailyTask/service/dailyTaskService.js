import axios from "axios";

const API_URL = "http://localhost:8081/dtask/";


const getDailyTask = async () => {
    try {
        return await axios.getUri(API_URL + "getAllTask").data;

    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const createDailyTask = async (title, imageUrl, url) => {
    try {
        return await axios.post(API_URL + "createDTask", {
            title, imageUrl, url
        }).data;
    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const updateDailyTask = async (id, data) => {
    try {
        return await axios
            .put(API_URL + "updateDTask", {
                id,
                data,
            }).data;

    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }

};





const dailyTaskService = {
    getDailyTask,
    createDailyTask,
    updateDailyTask,
};

export default dailyTaskService;
import axios from "axios";

const API_URL = "http://localhost:8081/ftask/";


const getFridayTask = async () => {
    try {
        return await axios.getUri(API_URL + "getFTask").data;

    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const createFridayTask = async (recording, presentation, agedCases) => {
    try {
        return await axios.post(API_URL + "createFTask", {
            recording, presentation, agedCases
        }).data;
    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const updateFridayTask = async (data) => {
    try {
        return await axios
            .put(API_URL + "updateFTask", {

                data,
            }).data;

    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }

};





const fridayTaskService = {
    getFridayTask,
    createFridayTask,
    updateFridayTask,
};

export default fridayTaskService;
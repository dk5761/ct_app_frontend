import axios from "axios";

const API_URL = "http://localhost:3001/ftask/";


const getFridayTask = async (token) => {
    try {

        return await axios({
            method: 'GET',
            url: API_URL + "getFTask",
            headers: {
                Authorization: token
            }
        })

    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const createFridayTask = async (recording, presentation, agedCases) => {
    try {
        return await axios.post(API_URL + "createFTask", {
            recording, presentation, agedCases
        });
    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const updateFridayTask = async (data, token) => {
    try {
        return await axios
            .put(API_URL + "updateFTask", {

                data,
            }, {
                headers: {
                    Authorization: token
                }
            });

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
import axios from "axios";

const API_URL = "http://localhost:8081/excel/";

// set headers for the service usage.


const getFridayTask = async () => {
    try { 
        return await axios.getUri(API_URL + "getAnalystData").data;

    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const createFridayTask = async (excelLink, range) => {
    try {
        return await axios.post(API_URL + "createExcel", {
            excelLink, range
        }).data;
    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const updateFridayTask = async (id, data) => {
    try {
        return await axios
            .put(API_URL + "updateExcel", {
                id, data
            }).data;

    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }

};





const analystWowService = {
    getFridayTask,
    createFridayTask,
    updateFridayTask,
};

export default analystWowService;
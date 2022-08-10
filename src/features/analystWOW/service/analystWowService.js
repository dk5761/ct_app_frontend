import axios from "axios";

const API_URL = "http://localhost:3001/excel/";

// set headers for the service usage.
const getAnalystTask = async (token) => {
    try { 

        console.log("this is token : ",token)
        return await axios.get(API_URL + "getExcel", {
            headers: {
                Authorization : token
            }
        });
        

    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const createAnalystTask = async (excelLink, range) => {
    try {
        return await axios.post(API_URL + "createExcel", {
            excelLink, range
        }).data;
    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};

const updateAnalystTask = async (id, data) => {
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
    getAnalystTask,
    createAnalystTask,
    updateAnalystTask,
};

export default analystWowService;
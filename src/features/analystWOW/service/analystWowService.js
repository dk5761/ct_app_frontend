import axios from "axios";

const API_URL = "http://localhost:3001/excel/";

// set headers for the service usage.
const getAnalystWOW = async (token) => {
    try {

        return await axios.get(API_URL + "getExcel", {
            headers: {
                Authorization: token
            }
        });


    } catch (error) {
        
        throw error.response.data
    }
};

const createAnalystWOW = async (excelLink, range) => {
    try {
        return await axios.post(API_URL + "createExcel", {
            excelLink, range
        }).data;
    } catch (error) {
        console.log(error);
        throw error.response.data
    }
};

const updateAnalystWOW = async (data, token) => {

    try {
        return await axios
            .put(API_URL + "updateExcel", {
                data
            }, {
                headers: {
                    Authorization: token
                }
            });

    } catch (error) {
        console.log(error);
        throw error.response.data
    }

};





const analystWowService = {
    getAnalystWOW,
    createAnalystWOW,
    updateAnalystWOW,
};

export default analystWowService;
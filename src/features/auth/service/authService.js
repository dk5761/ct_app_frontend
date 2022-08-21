import axios from "axios";

const API_URL = "http://localhost:3001/user/";

// Also check if its admin or not. if not admin return an error


const register = (csslId, password, firstName, lastName, position) => {
    try {
        return axios.post(API_URL + "register", {
            csslId,
            password,
            firstName,
            lastName,
            position
        }).then((response) => {
            if (response.data.token) {
                localStorage.setItem("token", JSON.stringify(response.data.token));
            }

            return response.data;
        });
    } catch (error) {
        throw error.response.data
    }
};

const login = async (csslId, password) => {
    try {
        const response = await axios
            .post(API_URL + "adminLogin", {
                csslId,
                password,
            })

        if (response) {
            if (response.data.token) {
                localStorage.setItem("token", JSON.stringify(response.data.token));
            }
        }

        return response
    } catch (error) {
        throw error.response.data
    }
};

const logout = () => {
    localStorage.removeItem("token");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;
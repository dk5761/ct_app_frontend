import axios from "axios";

const API_URL = "http://localhost:8081/user/";

// Also check if its admin or not. if not admin return an error


const register = (csslId, password, firstName, lastName, position) => {
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
};

const login = (csslId, password) => {
    return axios
        .post(API_URL + "login", {
            csslId,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("token", JSON.stringify(response.data.token));
            }

            return response.data;
        });
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
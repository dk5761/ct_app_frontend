import axios from "axios";

const API_URL = "http://localhost:3001/user/";

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

const login = async(csslId, password) => {
    try {
        const response = await axios
        .post(API_URL + "login", {
            csslId,
            password,
        })
        
        if(response){
            if (response.data.token) {
                localStorage.setItem("token", JSON.stringify(response.data.token));
            }
        }
        console.log(response)

    return response
    } catch (error) {
        console.log(error)
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
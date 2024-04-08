import axios from "axios";
import { BASE_URL } from "../../config";



export const login = async (logindata) => {
    try {
        const axiosRes = await axios({
          method: "POST",
          url: `${BASE_URL}/api/users/login`,
          data: logindata,
        });
        console.log("login [SUCCESS]",axiosRes.data);
        return axiosRes?.data;
    } catch (err) {
        console.log("login [ERROR]", err);
        return err;
    }
}

export const register = async (signupData) => {
    try {
        const axiosRes = await axios({
          method: "POST",
          url: `${BASE_URL}/api/users/signup`,
          data: signupData,
        });
        console.log("register [SUCCESS]",axiosRes.data);
        return axiosRes?.data;
    } catch (err) {
        console.log("login [ERROR]", err);
        return err;
    }
}



export const logout = async () => {
    try {
        console.log("logout")
        localStorage.removeItem('token');
    } catch (err) {
        console.log("logout [ERROR]", err)
    }
}
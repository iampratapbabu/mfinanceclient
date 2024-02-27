import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../../config";



export const login = async (logindata) => {
    try {
        const axiosRes = await axios({
          method: "POST",
          url: `${BASE_URL}/app/login`,
          data: logindata,
        });
        console.log("login [SUCCESS]",axiosRes.data);
        return axiosRes?.data;
    } catch (err) {
        console.log("login [ERROR]", err);
        return err;
    }
}



export const logout = async () => {
    try {
        localStorage.removeItem('token');
    } catch (err) {
        console.log("logout [ERROR]", err)
    }
}
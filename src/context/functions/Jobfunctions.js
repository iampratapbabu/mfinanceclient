import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from "../../config";



export const loadJobCategories = async (logindata) => {
    try {
        const axiosRes = await axios({
            method: "GET",
            url: `${BASE_URL}/edukaam/web/home/jobCategories`,
        });
        console.log("loadJobCategories [SUCCESS]", axiosRes.data);
        return axiosRes.data;

    } catch (err) {
        console.log("loadJobCategories [ERROR]", err);
        return err;

    }
}
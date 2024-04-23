import { BASE_URL } from "../config";
import axios from 'axios';

export const createPortfolio = (portfolioData) =>{
    return new Promise((resolve,reject)=>{
        console.log("button clicked");
        setTimeout(()=>{
            if(portfolioData == 1){
                resolve("method resolved");

            }else{
                reject("method rejected");
            }
        },2000)
    })
};


export const addPortfolio = async (portfolio) => {
    try {
        const axiosRes = await axios({
          method: "POST",
          headers: { 'x-access-token': localStorage.getItem('token') },
          url: `${BASE_URL}/api/portfolio`,
          data: portfolio,
        });
        console.log("addPortfolio [SUCCESS]",axiosRes.data);
        return axiosRes?.data;
    } catch (err) {
        console.log("addPortfolio [ERROR]", err);
        return err;
    }
}

export const editPortfolio = async (portfolio) => {
    try {
        const axiosRes = await axios({
          method: "PATCH",
          headers: { 'x-access-token': localStorage.getItem('token') },
          url: `${BASE_URL}/api/portfolio/edit-portfolio`,
          data: portfolio,
        });
        console.log("editPortfolio [SUCCESS]",axiosRes.data);
        return axiosRes?.data;
    } catch (err) {
        console.log("editPortfolio [ERROR]", err);
        return err;
    }
}
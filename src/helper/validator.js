export const formValidation = (formData) =>{
    let errObj = {
        haveError:false,
    };
    //console.log("form validation start",Object.keys(formData));
    let totalKeys = Object.keys(formData);
    let formdataMap = formData;
    // console.log(totalKeys);
    let tempVal;
    for(let i = 0;i<totalKeys.length;i++){
        //console.log(totalKeys[i],formdataMap[`${totalKeys[i]}`]);
        tempVal = formdataMap[`${totalKeys[i]}`];
        if(tempVal?.length == 0 || tempVal == "" || tempVal == null || tempVal == "null" || tempVal == undefined || tempVal == "undefined"){
            errObj.haveError = true;
            //console.log(totalKeys[i],"is required");
            errObj[`${totalKeys[i]}`] = totalKeys[i] + " is Required";
            //errObj.totalKeys[i] = totalKeys[i]+ " * Is Required";
        }

    }
    //key and their value
    //console.log(Object.keys(formData)[0],formData.mobile);
    return errObj;
    
}

export const isValidEmail = (payload) =>{
    
}
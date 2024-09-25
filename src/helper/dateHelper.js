import moment from 'moment';

export const ddMMMYYYY = (inputDate) =>{
    return moment(inputDate).format('DD MMMM YYYY');
}

export const ddMMYYYY = (inputDate) =>{
    return moment(inputDate).format('DD MMM YYYY');
}

export const YYYYMMDD = (inputDate) =>{
    return moment(inputDate).format('YYYY-MM-DD');
}

export const dateWithTime = (inputDate) =>{
    return moment(inputDate).format('DD-MMM-YY HH:mm');
}

export const dateWithTimeInSecond = (inputDate) =>{
    return moment(inputDate).format('DD-MMM-YY HH:mm:ss');
}

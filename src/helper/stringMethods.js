export const titleCase =(str) => {
    var splitStr = str.toLowerCase().split(" ");
  
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr.length[i] < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase();
      }
  
      str = splitStr.join(" ");
    }
  
    console.log(str);
    return str;
}


export const currencyFmt =(str) => {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
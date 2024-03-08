// 46. Convert array string to upper case
const array =['yes','no'];
function convertToUppercase(arr) {
    return arr.map(str => str.toUpperCase()); 
  }console.log(convertToUppercase(array));
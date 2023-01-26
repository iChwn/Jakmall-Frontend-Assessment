import { colors } from "constant";

const convert3Digit = (num) => {
  return num.toLocaleString();
}

const handdleValidateFieldStyle = (props) => {
  const { isError, hasValue } = props
  if(!isError && hasValue) {
    return colors.green
  } else if(!isError) {
    return colors.grayUltraLight
  } else if(isError) {
    return colors.orange
  } 
}

const generateRandomString = (n) => {
  let result = '';
  let characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  for (let i = 0; i < n; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export {convert3Digit, handdleValidateFieldStyle, generateRandomString}
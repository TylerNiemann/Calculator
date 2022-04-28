//global variables
let inputOne = 0;
let inputTwo = 0;
const display = document.getElementById('display');

//math functions
let add = (inputOne,inputTwo) => inputOne + inputTwo;

let subtract = (inputOne,inputTwo) => inputOne - inputTwo;

let multiply= (inputOne,inputTwo) => inputOne * inputTwo;

let divide = (inputOne,inputTwo) => {
    if(inputTwo === 0) alert("Stop, can't divide by 0");
    else inputOne / inputTwo;
}

let operate = (inputOne, inputTwo, operator) => {
    if(operator == '+') return add(inputOne,inputTwo);
    else if(operator == '-') return subtract(inputOne,inputTwo);
    else if(operator == '*')return multiply(inputOne,inputTwo);
    else return divide(inputOne,inputTwo);
}
//Takes clicked input and saves && displays it
let clickedInput = (num) => {
   if (inputOne === 0) inputOne = num;
   else inputOne = inputOne + num;
   return display.textContent = `${inputOne}`;
}
let deleteOne = () => {
    if(inputOne.length === 1) return display.textContent = '0';
    else {
        inputOne = inputOne.substring(0,inputOne.length -1)
        return display.textContent = `${inputOne}`;
    }
}
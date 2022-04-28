//global variables
let inputOne = 0;
let inputTwo = 0;
let operator;
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
   inputOne === 0 ? inputOne = num : inputOne = inputOne + num;
   inputTwo !== 0 ? display.textContent =`${inputTwo} ${operator} ${inputOne}` : display.textContent = `${inputOne}`;
}
//Deletes last inputted element
let deleteOne = () => {
    if (inputTwo !== 0){
        if(inputOne.length === 1) return display.textContent = `${inputTwo} ${operator}`;
        inputOne = inputOne.substring(0,inputOne.length -1)
        return display.textContent =`${inputTwo} ${operator} ${inputOne}`
    }
    else {
        if(inputOne.length === 1) return display.textContent = '0';
        inputOne = inputOne.substring(0,inputOne.length -1)
        return display.textContent = `${inputOne}`;
    }
}

let clickedOperator = (sign) => {
    inputTwo = parseInt(inputOne);
    inputOne = 0;
    operator = sign;
    return display.textContent = `${inputTwo} ${operator}`;
}
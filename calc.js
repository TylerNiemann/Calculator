let inputOne = 0;
let inputTwo = 0;
const display = document.getElementById('display');
let add = (inputOne,inputTwo) => inputOne + inputTwo;

let subtract = (inputOne,inputTwo) => inputOne - inputTwo;

let multiply= (inputOne,inputTwo) => inputOne * inputTwo;

let divide = (inputOne,inputTwo) => inputOne / inputTwo;

let operate = (inputOne, inputTwo, operator) => {
    if(operator == '+') return add(inputOne,inputTwo);
    else if(operator == '-') return subtract(inputOne,inputTwo);
    else if(operator == '*')return multiply(inputOne,inputTwo);
    else return divide(inputOne,inputTwo);
}

let clickedInput = (num) => {
   if (inputOne === 0) inputOne = num;
   else inputOne = inputOne + num;
   console.log(inputOne);
   return display.textContent = `${inputOne}`;
}

//let clicked = Array.from(document.querySelectorAll('displayable'));
//clicked.forEach(button => button.addEventListener('click', clickedInput));

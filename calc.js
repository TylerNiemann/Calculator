//global variables
let inputOne = 0;
let inputTwo = 0;
let operator;
let newOperator;
const display = document.getElementById('display');
window.addEventListener('keydown', handleKeyboardInput)

//Adds ability to see what button mouse is hovering
let hover = (e) => e.target.style.backgroundColor = 'grey';

let hoverExit = (e) => e.target.style.backgroundColor = '';

const btn = Array.from(document.querySelectorAll('button'));
btn.forEach(button => button.addEventListener('mouseover', hover));
btn.forEach(button => button.addEventListener('mouseleave', hoverExit));

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) clickedInput(e.key)
    if (e.key === '.') clickedInput('.')
    if (e.key === '=' || e.key === 'Enter') clickedEqualTo()
    if (e.key === 'Backspace') deleteOne()
    if (e.key === 'Escape') return window.location.reload(true);
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')clickedOperator(e.key);
  }

//math functions
let add = (inputOne,inputTwo) => inputOne + inputTwo;

let subtract = (inputOne,inputTwo) => inputTwo- inputOne;

let multiply= (inputOne,inputTwo) => inputOne * inputTwo;

let divide = (inputOne,inputTwo) => inputOne === 0 ? evilZero() : inputTwo / inputOne;


let operate = (inputOne, inputTwo, operator) => {
    if(operator == '+') return add(inputOne,inputTwo);
    else if(operator == '-') return subtract(inputOne,inputTwo);
    else if(operator == '*')return multiply(inputOne,inputTwo);
    else if (operator == '/') return divide(inputOne,inputTwo);
}
//Takes clicked input and saves && displays it
let clickedInput = (num) => {
   inputOne === 0 ? inputOne = num : inputOne = inputOne + num;
   if(inputTwo !== 0){
        if(operator != undefined) display.textContent =`${inputTwo} ${operator} ${inputOne}`
        else return window.location.reload(true);
   } 
   else display.textContent = `${inputOne}`;
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
    //Adds ability to continue calculating without having to press '='
    if (operator !=  undefined){
        newOperator = operator;
        operator = sign;
        inputTwo = operate(parseFloat(inputOne),inputTwo,newOperator);
        inputOne = 0;
        return display.textContent = `${inputTwo} ${operator}`;
    }
    if (inputTwo === 0)inputTwo = parseFloat(inputOne);
    inputOne = 0;
    operator = sign;
    return display.textContent = `${inputTwo} ${operator}`;
}

let clickedEqualTo = () => {
    if(inputTwo == 0)return window.location.reload(true);
    inputOne = parseFloat(inputOne);
    inputTwo = operate(inputOne,inputTwo,operator);
    operator = undefined;
    return display.textContent = `${inputTwo}`;    
}

let evilZero = () => {
    alert("Stop, can't divide by 0")
    window.location.reload(true);
}

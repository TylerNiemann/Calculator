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

console.log(operate(3,4,'/'));
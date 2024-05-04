// Variable declarations
// Event Listeners
// 
const zeroDigit = document.querySelector("#zero-key");
const oneDigit = document.querySelector("#one-key");

// Math operations
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(add(5,3));
function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    if (numberTwo === 0){
        return "ERROR: Calculator bursts into flames";
    }
    return numberOne / numberTwo;
}

function operate (numberOne, numberTwo, operator) {
    let result;
    if (operator === "add") {
        result = add(numberOne, numberTwo);
    }
    if (operator === "subtract") {
        result = subtract(numberOne, numberTwo);
    }
    if (operator === "multiply") {
        result = multiply(numberOne, numberTwo);
    }
    if (operator === "divide") {
        result = divide(numberOne, numberTwo);
    }

}



// Exports for testing
export = {add, subtract, multiply, divide};
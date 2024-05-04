// Math operations
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

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


// Exports for testing
module.exports = {add, subtract, multiply, divide};
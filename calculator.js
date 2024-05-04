// Variable declarations
let numberOne = "";
let numberTwo = "";
let operator = "";

// Event Listeners
// Declarations
const zeroDigit = document.querySelector("#zero-key");
const oneDigit = document.querySelector("#one-key");
const twoDigit = document.querySelector("#two-key");
const threeDigit = document.querySelector("#three-key");
const fourDigit = document.querySelector("#four-key");
const fiveDigit = document.querySelector("#five-key");
const sixDigit = document.querySelector("#six-key");
const sevenDigit = document.querySelector("#seven-key");
const eightDigit = document.querySelector("#eight-key");
const nineDigit = document.querySelector("#nine-key");
const decimalKey = document.querySelector("#decimal-key");
const plusMinusKey = document.querySelector("#plus-minus-key");

// TODO: prevent leading 0 unless second character is a "."
zeroDigit.addEventListener("click", function (e) {
    if (operator == "" && numberOne !== "0") {
        numberOne = String(numberOne) + "0";
        console.log(numberOne);
    }
});
oneDigit.addEventListener("click", function (e) {
    if (operator == "") {
        numberOne = String(numberOne) + "1";
        console.log(numberOne);
    }
});


console.log(add(5,3));
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
//export const {add, subtract, multiply, divide};
//const module.exports = add(numberOne, numberTwo;
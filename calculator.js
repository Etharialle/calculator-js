// Variable declarations
let numberOne = "";
let numberTwo = "";
let operator = "";
let result = "";

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
const addKey = document.querySelector("#add-key");
const subtractKey = document.querySelector("#subtract-key");
const multiplyKey = document.querySelector("#multiply-key");
const divideKey = document.querySelector("#divide-key");
const equalsKey = document.querySelector("#equals-key");

const clearKey = document.querySelector("#clear-key");

// display
const currentOperations = document.querySelector("#current-operations");
const currentResult = document.querySelector("#current-result");
const currentEqualsSign = document.querySelector("#current-equals-sign");



// clear result display if button clicked and result is not blank


zeroDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "" && numberOne != "0") {
        numberOne = String(numberOne) + "0";
    } else if (operator != "" && numberTwo != "0") {
        numberTwo = String(numberTwo) + "0";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});
oneDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        numberOne = String(numberOne) + "1";
    } else {
        numberTwo = String(numberTwo) + "1";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

twoDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        numberOne = String(numberOne) + "2";
    } else {
        numberTwo = String(numberTwo) + "2";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

threeDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        numberOne = String(numberOne) + "3";
    } else {
        numberTwo = String(numberTwo) + "3";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

fourDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        numberOne = String(numberOne) + "4";
    } else {
        numberTwo = String(numberTwo) + "4";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

fiveDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        numberOne = String(numberOne) + "5";
    } else {
        numberTwo = String(numberTwo) + "5";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

sixDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        numberOne = String(numberOne) + "6";
    } else {
        numberTwo = String(numberTwo) + "6";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

sevenDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        numberOne = String(numberOne) + "7";
    } else {
        numberTwo = String(numberTwo) + "7";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

eightDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        numberOne = String(numberOne) + "8";
    } else {
        numberTwo = String(numberTwo) + "8";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

nineDigit.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        numberOne = String(numberOne) + "9";
    } else {
        numberTwo = String(numberTwo) + "9";
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

decimalKey.addEventListener("click", function (e) {
    if (result != "") {
        currentResult.textContent = "";
        currentEqualsSign.setAttribute("style", "visibility: hidden");
    }
    if (operator == "") {
        if (numberOne.includes(".") === true) {
            console.log(". already in number");
        }
        if (numberOne.includes(".") === false && numberOne == "") {
            numberOne = "0.";
        }
        if (numberOne.includes(".") === false && numberOne != "") {
            numberOne = String(numberOne) + ".";
        }
    }
    if (operator != "") {
        if (numberTwo.includes(".") === true) {
            console.log(". already in number");
        }
        if (numberTwo.includes(".") === false && numberTwo == "") {
            numberTwo = "0.";
        }
        if (numberTwo.includes(".") === false && numberTwo != "") {
            numberTwo = String(numberTwo) + ".";
        }
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

// operations keys
addKey.addEventListener("click", function (e) {
    if (operator == "" && numberOne != "") {
        operator = "+";
    } else {
        console.log("invalid input");
        // possible remove this and just have it change the operator as long as numberOne is not ""
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

subtractKey.addEventListener("click", function (e) {
    if (operator == "" && numberOne != "") {
        operator = "-";
    } else {
        console.log("invalid input");
        // possible remove this and just have it change the operator as long as numberOne is not ""
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

multiplyKey.addEventListener("click", function (e) {
    if (operator == "" && numberOne != "") {
        operator = "×";
    } else {
        console.log("invalid input");
        // possible remove this and just have it change the operator as long as numberOne is not ""
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

divideKey.addEventListener("click", function (e) {
    if (operator == "" && numberOne != "") {
        operator = "÷";
    } else {
        console.log("invalid input");
        // possible remove this and just have it change the operator as long as numberOne is not ""
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
});

equalsKey.addEventListener("click", function (e) {
    if (operator != "" && numberOne != "" && numberTwo != "") {
        [numberOne, numberTwo, operator, result] = operate(parseFloat(numberOne), parseFloat(numberTwo), operator);
    } else {
        console.log("invalid input");
        //possibly set numberTwo = numberOne if numberTwo ==""
    }
});

clearKey.addEventListener("click", function (e) {
    numberOne = "";
    numberTwo = "";
    operator = "";
    result = "";
    currentResult.textContent = result;
    currentOperations.textContent = "0";
    currentEqualsSign.setAttribute("style", "visibility: hidden");
});

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
    if (operator === "+") {
        result = add(numberOne, numberTwo);
    }
    if (operator === "-") {
        result = subtract(numberOne, numberTwo);
    }
    if (operator === "×") {
        result = multiply(numberOne, numberTwo);
    }
    if (operator === "÷") {
        result = divide(numberOne, numberTwo);
    }
    currentOperations.textContent = numberOne + " " + operator + " " + numberTwo;
    currentEqualsSign.setAttribute("style", "visibility: visible");
    currentResult.textContent = result;
    numberOne = "";
    numberTwo = "";
    operator = "";
    return [numberOne, numberTwo, operator, result];
}



// Exports for testing
//export const {add, subtract, multiply, divide};
//const module.exports = add(numberOne, numberTwo;
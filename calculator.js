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
const addKey = document.querySelector("#add-key");
const subtractKey = document.querySelector("#subtract-key");
const multiplyKey = document.querySelector("#multiply-key");
const divideKey = document.querySelector("#divide-key");
const equalsKey = document.querySelector("#equals-key");


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
    } else {
        numberTwo = String(numberTwo) + "1";
    }
    console.log(numberOne);
    console.log(numberTwo);
});

twoDigit.addEventListener("click", function (e) {
    if (operator == "") {
        numberOne = String(numberOne) + "2";
    } else {
        numberTwo = String(numberTwo) + "2";
    }
    console.log(numberOne);
    console.log(numberTwo);
});

threeDigit.addEventListener("click", function (e) {
    if (operator == "") {
        numberOne = String(numberOne) + "3";
    } else {
        numberTwo = String(numberTwo) + "3";
    }
    console.log(numberOne);
    console.log(numberTwo);
});

fourDigit.addEventListener("click", function (e) {
    if (operator == "") {
        numberOne = String(numberOne) + "4";
    } else {
        numberTwo = String(numberTwo) + "4";
    }
    console.log(numberOne);
    console.log(numberTwo);
});

fiveDigit.addEventListener("click", function (e) {
    if (operator == "") {
        numberOne = String(numberOne) + "5";
    } else {
        numberTwo = String(numberTwo) + "5";
    }
    console.log(numberOne);
    console.log(numberTwo);
});

sixDigit.addEventListener("click", function (e) {
    if (operator == "") {
        numberOne = String(numberOne) + "6";
    } else {
        numberTwo = String(numberTwo) + "6";
    }
    console.log(numberOne);
    console.log(numberTwo);
});

sevenDigit.addEventListener("click", function (e) {
    if (operator == "") {
        numberOne = String(numberOne) + "7";
    } else {
        numberTwo = String(numberTwo) + "7";
    }
    console.log(numberOne);
    console.log(numberTwo);
});

eightDigit.addEventListener("click", function (e) {
    if (operator == "") {
        numberOne = String(numberOne) + "8";
    } else {
        numberTwo = String(numberTwo) + "8";
    }
    console.log(numberOne);
    console.log(numberTwo);
});

nineDigit.addEventListener("click", function (e) {
    if (operator == "") {
        numberOne = String(numberOne) + "9";
    } else {
        numberTwo = String(numberTwo) + "9";
    }
    console.log(numberOne);
    console.log(numberTwo);
});

// operations keys



addKey.addEventListener("click", function (e) {
    if (operator == "") {
        operator = "add";
    } else {
        console.log("invalid input");
        // possible remove this and just have it change the operator as long as numberOne is not ""
    }
    console.log(numberOne);
    console.log(operator);
    console.log(numberTwo);
});

equalsKey.addEventListener("click", function (e) {
    if (operator != "" && numberOne != "" && numberTwo != "") {
        [numberOne, numberTwo, operator] = operate(parseFloat(numberOne), parseFloat(numberTwo), operator);
    } else {
        console.log("invalid input");
        //possibly set numberTwo = numberOne if numberTwo ==""
    }
    
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
    console.log(result);
    numberOne = "";
    numberTwo = "";
    operator = "";
    return [numberOne, numberTwo, operator];
}



// Exports for testing
//export const {add, subtract, multiply, divide};
//const module.exports = add(numberOne, numberTwo;
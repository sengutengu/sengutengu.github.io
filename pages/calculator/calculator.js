// keep previous string of numbers
let buffer = '0';
let runningTotal = 0;
let previousOperator;

const screen = document.querySelector(".number-display");
const operator = document.querySelector(".operator");
const firstOperand = document.querySelector(".first-operand");

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(number) {
    if (buffer == 0) {
        buffer = number; // start off with 0
    } else {
        buffer += number;
    }
}

function handleSymbol(symbol) {
    console.log("symbol");
    switch (symbol) {
        case "C":
            buffer = "0";
            runningTotal = 0;
            previousOperator = undefined;
            break;
        case "←":
            if (buffer.length > 1) {
                buffer = buffer.slice(0, -1);
            } else {
                buffer = "0";
            }
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseFloat(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            rerender();
            
            break;
        case "÷":
        case "×":
        case "+":
        case "–":
            handleMath(symbol);
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        // do nothing
        return;
    }
    const floatBuffer = parseFloat(buffer);
    if (runningTotal === 0) {
        runningTotal = floatBuffer;
    } else {
        flushOperation(floatBuffer);
    }
    previousOperator = symbol;
    buffer = "0";
}

function rerender() {
    screen.innerText = buffer;
    firstOperand.innerText = runningTotal;
    if (previousOperator != undefined) {
        operator.innerText = previousOperator;
    } else {
        operator.innerText = "";
        firstOperand.innerText = "";
    }

}

function flushOperation (floatBuffer) {
    if (previousOperator === "+") {
        runningTotal += floatBuffer;
    } else if (previousOperator === "–") {
        runningTotal -= floatBuffer;
    } else if (previousOperator === "÷") {
        runningTotal /= floatBuffer;
    } else if (previousOperator === "×") {
        runningTotal *= floatBuffer;
    }


}

function divide(a, b) {
    return (Number(a)/Number(b));
}

function multiply(a, b){
    return (Number(a)*Number(b));
}

function add(a, b) {
    return (Number(a)+Number(b));
}

function subtract(a, b){
    return (Number(a)-Number(b));
}

// init() is called when the page loads

function init() {
    // wait for DOM to load
    // allows script in <head>
    document.addEventListener("DOMContentLoaded", () => {
        console.log(screen);
        document
            // select NOT each button, but the wrapper buttons div
            .querySelector(".calculator-buttons")
            .addEventListener("click", function(event) {
                buttonClick(event.target.innerText);
            });
    });
}

init();
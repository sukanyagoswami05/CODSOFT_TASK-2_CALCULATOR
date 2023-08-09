const display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let prevInput = "";

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", handleClick);
});

function handleClick(event) {
    const value = event.target.textContent;

    if (value >= "0" && value <= "9") {
        currentInput += value;
        updateDisplay(currentInput);
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
        currentOperator = value;
        prevInput = currentInput;
        currentInput = "";
    } else if (value === "=") {
        if (currentOperator && prevInput && currentInput) {
            const result = calculate(parseFloat(prevInput), parseFloat(currentInput), currentOperator);
            updateDisplay(result);
            currentInput = result.toString();
            currentOperator = "";
            prevInput = "";
        }
    } else if (value === "C") {
        currentInput = "";
        currentOperator = "";
        prevInput = "";
        updateDisplay("0");
    }
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return NaN;
    }
}

function updateDisplay(content) {
    display.textContent = content;
}

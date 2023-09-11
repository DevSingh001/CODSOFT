let resultDisplay = document.getElementById('result');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    resultDisplay.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    resultDisplay.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        resultDisplay.value = currentInput;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}


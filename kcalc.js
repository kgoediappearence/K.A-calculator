let memory = 0;
let lastAnswer = 0;
let currentFunction = ''; // Track the current trigonometric function

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearAll() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression);
        document.getElementById('display').value = result;
        lastAnswer = result;
    } catch(error) {
        document.getElementById('display').value = 'Error';
    }
}

// Functions to handle button clicks

function pressNumber(number) {
    if (currentFunction !== '') {
        appendToDisplay(number);
    } else {
        document.getElementById('display').value = 'Error: Enter trigonometric function first';
    }
}

function calculateSin() {
    currentFunction = 'Math.sin';
    appendToDisplay('Math.sin(');
}

function calculateCos() {
    currentFunction = 'Math.cos';
    appendToDisplay('Math.cos(');
}

function calculateTan() {
    currentFunction = 'Math.tan';
    appendToDisplay('Math.tan(');
}

function calculateSqrt() {
    let value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value) && value >= 0) {
        document.getElementById('display').value = Math.sqrt(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function calculatePow() {
    let value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(value, 2);
}

function calculateCube() {
    let value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(value, 3);
}

function calculateMod() {
    let value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        if (value !== 0) {
            document.getElementById('display').value = value % 2;
        } else {
            document.getElementById('display').value = 'Error: Division by zero';
        }
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function storeMemory() {
    let value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        memory += value;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function recallMemory() {
    document.getElementById('display').value = memory;
}

function clearMemory() {
    memory = 0;
}

function useAns() {
    document.getElementById('display').value += lastAnswer;
}
function openManual() {
    window.location.href = "C:\Users\User\Desktop\MANUAL.html";
}

function openCalculator() {
    window.location.href = "C:\Users\User\Desktop\MANUAL.html";
}
function goToManual() {
    window.location.href = "C:\Users\User\Desktop\MANUAL.html";
}
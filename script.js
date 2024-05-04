let displayValue = '';

const name = prompt("1st project of vikram:");

const nameSpan = document.getElementById("nameSpan");
if (nameSpan) {
    nameSpan.textContent = name;
} else {
    console.error("Element with ID 'nameSpan' not found.");
}

function appendValue(val) {
    displayValue += val;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

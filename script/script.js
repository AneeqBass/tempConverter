document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convert);
});

function convert() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputTemp = document.getElementById('outputTemp');

    if (inputTemp === '') {
        outputTemp.textContent = 'Please enter a temperature';
        return;
    }

    const tempValue = parseFloat(inputTemp);
    let convertedTemp;
    let outputUnit;

    if (inputUnit === 'Celsius') {
        convertedTemp = (tempValue * 9/5) + 32;
        outputUnit = 'Fahrenheit';
    } else {
        convertedTemp = (tempValue - 32) * 5/9;
        outputUnit = 'Celsius';
    }

    outputTemp.textContent = `${tempValue}° ${inputUnit} is ${convertedTemp.toFixed(2)}° ${outputUnit}`;
}

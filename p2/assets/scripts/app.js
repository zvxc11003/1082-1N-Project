// Get input from input field
function getUserNumberInput() {
  return parseFloat(userInput.value);
}

function calculatedResult(calculationType) {
  const enteredNumber = getUserNumberInput().toFixed(2);
  let t1, t2;
  if (calculationType === 'C2F') {
    currentResult = ((enteredNumber * 9) / 5.0 + 32).toFixed(2);
    t1 = 'C';
    t2 = 'F';
  } else if (calculationType === 'F2C') {
    currentResult = (((enteredNumber - 32) * 5) / 9.0).toFixed(2);
    t1 = 'F';
    t2 = 'C';
  }
  const calcDescription = `${enteredNumber} ${t1}  = ${currentResult} ${t2}`;
  currentCalculationOutput.textContent = calcDescription;
}

function c2f() {
  calculatedResult('C2F');
}

function f2c() {
  calculatedResult('F2C');
}

cBtn.addEventListener('click', c2f);
fBtn.addEventListener('click', f2c);

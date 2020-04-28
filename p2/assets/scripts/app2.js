// Get input from input field
function getUserNumberInput() {
  return parseFloat(userInput.value);
}

cBtn.addEventListener('click', () => {
  const enteredNumber = getUserNumberInput().toFixed(2);
  let currentResult = ((enteredNumber * 9) / 5.0 + 32).toFixed(2);
  const calcDescription = `${enteredNumber} C  = ${currentResult} F`;
  currentCalculationOutput.textContent = calcDescription;
});

fBtn.addEventListener('click', () => {
  const enteredNumber = getUserNumberInput().toFixed(2);
  let currentResult = (((enteredNumber - 32) * 5) / 9.0).toFixed(2);
  const calcDescription = `${enteredNumber} F  = ${currentResult} C`;
  currentCalculationOutput.textContent = calcDescription;
});

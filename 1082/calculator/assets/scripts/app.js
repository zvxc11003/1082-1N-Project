const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calcDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

function substract() {
  const calcDescription = `${currentResult} - ${userInput.value}`;
  currentResult = currentResult - parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

function multiply() {
  const calcDescription = `${currentResult} * ${userInput.value}`;
  currentResult = currentResult * parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

function divide() {
  const calcDescription = `${currentResult} / ${userInput.value}`;
  currentResult = currentResult / parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

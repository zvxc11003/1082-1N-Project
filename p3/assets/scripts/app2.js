// For Config

const configModal = document.getElementById('config-modal');
const setBtn = configModal.querySelector('.btn--success');
const cancelBtn = configModal.querySelector('.btn--passive');
const configBtn = document.getElementById('config-btn');
const backdrop = document.getElementById('backdrop');

const userInputs = configModal.querySelectorAll('input');

let chosenMaxLife = 100;
let monsterAttackValue = 14;
let playerAttackValue = 10;
let playerStrongAttackValue = 17;
let playerHealValue = 20;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleConfigModal = () => {
  configModal.classList.toggle('visible');
};

const cancelHandler = () => {
  toggleConfigModal();
  toggleBackdrop();
};

const outConfigConsole = () => {
  console.log('Max Life', chosenMaxLife);
  console.log('Monster Attack Value', monsterAttackValue);
  console.log('Player Attack Value', playerAttackValue);
  console.log('Player Strong Attack Value', playerStrongAttackValue);
  console.log('Player Heal Value', playerHealValue);
};

const setHandler = () => {
  chosenMaxLife = userInputs[0].value;
  monsterAttackValue = userInputs[1].value;
  playerAttackValue = userInputs[2].value;
  playerStrongAttackValue = userInputs[3].value;
  playerHealValue = userInputs[4].value;

  if (
    chosenMaxLife.trim() === '' ||
    monsterAttackValue === '' ||
    playerAttackValue === '' ||
    playerStrongAttackValue === '' ||
    playerHealValue === ''
  ) {
    alert('Please enter valid value');
    return;
  }
  toggleConfigModal();
  toggleBackdrop();
  outConfigConsole();
  adjustHealthBars(chosenMaxLife);
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
};

const closeConfigModal = () => {
  configModal.classList.remove('visible');
};

const configHandler = () => {
  toggleConfigModal();
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeConfigModal();
  toggleBackdrop();
  // closeMovieDeletionModal();
};

configBtn.addEventListener('click', configHandler);
backdrop.addEventListener('click', backdropClickHandler);
setBtn.addEventListener('click', setHandler);
cancelBtn.addEventListener('click', cancelHandler);

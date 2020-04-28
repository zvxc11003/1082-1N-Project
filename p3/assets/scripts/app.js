const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const LOG_EVENT_PLAYER_ATTACK = 'ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

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

let logEvent;
let battleLog = [];

// Begin Config
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

// End Config

// Begin ORIGINAL
const backdropClickHandler = () => {
  closeConfigModal();
  toggleBackdrop();
  // closeMovieDeletionModal();
};

// function getMaxLifeValues() {
//   const enteredValue = prompt('Maximum life for you and monster: ', '100');
//   const parseValue = parseInt(enteredValue);
//   if (isNaN(parseValue) || parseValue <= 0) {
//     throw {
//       message: 'Invalid user input, not a number.',
//     };
//   }
//   return parseValue;
// }

// try {
//   chosenMaxLife = getMaxLifeValues();
// } catch (error) {
//   console.log(error);
//   chosenMaxLife = 100;
//   console.log('max', chosenMaxLife);
// }

// if (isNaN(chosenMaxLife || chosenMaxLife <= 0)) {
//   chosenMaxLife = 100;
// }

// let currentMonsterHealth = chosenMaxLife;
// let currentPlayerHealth = chosenMaxLife;
// let hasBonusLife = true;

// adjustHealthBars(chosenMaxLife);

function reset() {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER';
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = 'MONSTER';
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = 'PLAYER';
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = 'PLAYER';
      break;
    case LOG_EVENT_GAME_OVER:
      break;
    default:
      logEntry = {};
  }

  battleLog.push(logEntry);
  console.log(battleLog);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life save you once.');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('player won');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'PLAYER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('monster won');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('It is a draw');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'A DRAW',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = playerAttackValue;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = playerStrongAttackValue;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - playerHealValue) {
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = playerHealValue;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

function printLogHandler() {
  for (let i = 0; i < battleLog.length; i++) {
    console.log(battleLog[i]);
  }
}

function printLogHandler2() {
  for (const logEntry of battleLog) {
    console.log(logEntry);
  }
}

function printLogHandler3() {
  let i = 0;
  while (i < battleLog.length) {
    console.log(battleLog[i]);
    i++;
  }
}

function printLogHandler4() {
  let i = 0;
  for (const logEntry of battleLog) {
    // console.log(logEntry);
    for (const key in logEntry) {
      console.log(`${i}: ${key} => ${logEntry[key]}`);
    }
    i++;
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler4);

// for Config
configBtn.addEventListener('click', configHandler);
backdrop.addEventListener('click', backdropClickHandler);
setBtn.addEventListener('click', setHandler);
cancelBtn.addEventListener('click', cancelHandler);

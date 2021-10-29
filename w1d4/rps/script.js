var playerImage = document.querySelector('#playerImage')
var computerImage = document.querySelector('#computerImage')
var result = document.querySelector('#result')

function playGame(select) {
  var playerChoice = select.value;
  setImage(playerImage, playerChoice, 'l');
  var computerChoice = randomChoice();
  var winner = whoWon(playerChoice, computerChoice);
  if (winner !== 'tie'){
    result.innerHTML = `<h1 class="text-center">${winner} won!</h1>`
  } else {
    result.innerHTML = `<h1 class="text-center">TIE GAME!</h1>`
  }
}

function randomChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      setImage(computerImage, 'rock', 'r');
      return 'rock';
    case 1:
      setImage(computerImage, 'paper', 'r');
      return 'paper';
    case 2:
      setImage(computerImage, 'scissors', 'r');
      return 'scissors';
  }
}

function setImage(element, choice, side) {
  switch (choice) {
    case 'rock':
      element.innerHTML = `<img class="img-fluid" src="./img/${side}-rock.png" />`;
      break;
    case 'paper':
      element.innerHTML = `<img class="img-fluid" src="./img/${side}-paper.png" />`;
      break;
    case 'scissors':
      element.innerHTML = `<img class="img-fluid" src="./img/${side}-scissors.png" />`;
      break;
  }
}

function whoWon(player, computer) {
  if (player === 'rock') {
    switch (computer) {
      case 'rock':
        return 'tie';
      case 'paper':
        return 'The computer';
      case 'scissors':
        return 'You';
    }
  } else if (player === 'paper') {
    switch (computer) {
      case 'rock':
        return 'You';
      case 'paper':
        return 'tie';
      case 'scissors':
        return 'The computer';
    }
  } else {
    switch (computer) {
      case 'rock':
        return 'The computer';
      case 'paper':
        return 'You';
      case 'scissors':
        return 'tie';
    }
  }
}
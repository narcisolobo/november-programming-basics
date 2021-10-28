var toribio = ['s', 's', 's', 's', 's', 's', 'r', 'r', 'r', 'p']
var ryanVon = ['r', 'r', 'p', 'p', 'p', 'p', 's', 's', 's', 's']

function playGame(p1Array, p2Array) {
  var p1Wins = 0;
  var p2Wins = 0;
  for (let i = 0; i < 10; i++) {
    console.log(`Game ${i+1}:`);
    var winner = whoWon(p1Array[i], p2Array[i]);
    if (winner === 1) {
      p1Wins++
    } else {
      p2Wins++
    }
  }
  if(p1Wins > p2Wins) {
    console.log(`Player 1 wins with ${p1Wins} games to ${p2Wins}!`);
  } else {
    console.log(`Player 2 wins with ${p2Wins} games to ${p1Wins}!`);
  }
}

function whoWon(p1, p2) {
  if (p1 === 'r') {
    switch (p2) {
      case 'p':
        console.log('Player 1: Rock,', 'Player 2: Paper');
        console.log('Player 2 wins.\n');
        return 2;
      case 's':
        console.log('Player 1: Rock,', 'Player 2: Scissors');
        console.log('Player 1 wins.\n');
        return 1;
    }
  } else if (p1 === 'p') {
    switch (p2) {
      case ('r'):
        console.log('Player 1: Paper,', 'Player 2: Rock');
        console.log('Player 1 wins.\n');
        return 1;
      case ('s'):
        console.log('Player 1: Paper,', 'Player 2: Scissors');
        console.log('Player 2 wins.\n');
        return 2;
    }
  } else {
    switch (p2) {
      case ('r'):
        console.log('Player 1: Scissors,', 'Player 2: Rock');
        console.log('Player 2 wins.\n');
        return 2;
      case ('p'):
        console.log('Player 1: Scissors,', 'Player 2: Paper');
        console.log('Player 1 wins.\n');
        return 1;
    }
  }
}


playGame(toribio, ryanVon);
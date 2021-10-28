// What do we have to keep track of? Wins for each player.
var toribio = ['s', 's', 's', 's', 's', 's', 'r', 'r', 'r', 'p']
var ryanVon = ['r', 'r', 'p', 'p', 'p', 'p', 's', 's', 's', 's']

var toribioWins = 0
var ryanVonWins = 0
for (var i = 0; i < 10; i++) {

}

function checkWinner(playerOne, playerTwo) {
  var tally = []
  if (playerOne == 's' && playerTwo == 'r') {
    playerTwo++
  } else if (playerOne == 's' && playerTwo == 'p') {
    playerOne++
  }
  tally.push(playerOne)
  tally.push(playerTwo)
  return tally
}
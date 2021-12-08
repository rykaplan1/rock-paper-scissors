const chooseWinner = (humanChoice, computerChoice) => {
  let winner;
  if (humanChoice === computerChoice) {
    winner = 'tie';
  } else {
    switch (humanChoice) {
      case 'Rock':
        if (computerChoice === 'Scissors') {
          winner = 'human';
        } else {
          winner = 'computer';
        }
      case 'Paper':
        if (computerChoice === 'Rock') {
          winner = 'human';
        } else {
          winner = 'computer';
        }
      case 'Scissors':
        if (computerChoice === 'Paper') {
          winner = 'human';
        } else {
          winner = 'computer';
        }
    }
  }
  return winner;
}

const playGame = () => {
  let keepPlaying = false;
  do {
    const humanWins = 0;
    const computerWins = 0;
    const ties = 0;
    console.log("Welcome to Rock-Paper-Scissors!");
    const humanInput = prompt("Input 'R' for rock, 'P' for paper, or 'S' for scissors");
    let humanChoice = '';
    switch (humanInput) {
      case 'R':
        humanChoice = 'Rock';
      case 'P':
        humanChoice = 'Paper';
      case 'S':
        humanChoice = 'Scissors';
    }
    const computerNumber = Math.floor(Math.random() * 3);
    let computerChoice = '';
    switch (computerNumber) {
      case 0:
        computerChoice = 'Rock';
      case 1:
        computerChoice = 'Paper';
      case 2:
        computerChoice = 'Scissors';
    }

    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);

    const winner = chooseWinner(humanChoice, computerChoice);

    if (winner === 'human') {
      humanWins++;
      alert('You win!');
    } else if (winner === 'computer') {
      computerWins++;
      alert('Computer wins!');
    } else {
      alert('Tie!');
      ties++;
    }

    console.log('Score');
    console.log(`You: ${humanWins} | Computer: ${computerWins} | Ties: ${ties}`);

    keepPlaying = confirm("Would you like to play again?");
    
  } while (keepPlaying);
}

playGame();


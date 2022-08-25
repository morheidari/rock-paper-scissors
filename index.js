function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    switch (i){
        case 0:
            return 'rock';

        case 1:
            return 'paper';

        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    pSelection = playerSelection.toLowerCase();
    cSelectoin = computerSelection.toLowerCase();
    if (pSelection == cSelectoin){
        return "draw.\n";
    } 
    else if ((pSelection == 'rock' && cSelectoin == 'scissors') || (pSelection == 'paper' && cSelectoin == 'rock') || (pSelection == 'scissors' && cSelectoin == 'paper')){
        return `you win, ${pSelection} beats ${cSelectoin}.\n`;
    }
    else {
        return `computer win, ${cSelectoin} beats ${pSelection}.\n`;
    }
}

function game() {
    for (let i = 1; i <= 5; i++){
        let playerSelection = prompt("rock, paper, scissors ? ..."); 
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}

game()

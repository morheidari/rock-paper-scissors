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
        return `Draw, ${pSelection} ${cSelectoin}\n`;
    } 
    else if ((pSelection == 'rock' && cSelectoin == 'scissors') || (pSelection == 'paper' && cSelectoin == 'rock') || (pSelection == 'scissors' && cSelectoin == 'paper')){
        playerScore += 1;
        return `You win, ${pSelection} beats ${cSelectoin}.\n`;
    }
    else {
        computerScore += 1; 
        return `Computer win, ${cSelectoin} beats ${pSelection}.\n`;
    }
}

function game() {
    for (let i = 1; i <= 5; i++){
        let playerSelection = prompt("rock, paper, scissors ? ..."); 
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}

let buttons = document.querySelectorAll("button");

computerScore = 0;
playerScore = 0;
function reportResult(e){
    let report = document.querySelector(".report");
    let score = document.querySelector(".score");
    report.textContent = playRound(e.target.id, getComputerChoice());
    score.textContent = `Computer - Player |  ${computerScore} - ${playerScore}`
}
Array.from(buttons).forEach(button => button.addEventListener('click', (e) => reportResult(e)));


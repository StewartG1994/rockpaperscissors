let playerSelection = null;
let buttons = document.querySelectorAll('button');
let content = document.getElementById('content');
let pScore = document.getElementById('playerScoreText').textContent;
let sScore = document.getElementById('computerScoreText').textContent;

document.getElementById('computerScoreText').innerHTML = 0;
document.getElementById('playerScoreText').innerHTML = 0;

let playerCounter = 0;
let computerCounter = 0;


function computerPlay() 
{
    const computerSelection = ["rock", "paper", "scissors"];
    const random = computerSelection[Math.floor(Math.random() * computerSelection.length)] ;
    return random;
}

function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        return(content.innerHTML =`Its a draw ${playerSelection} matches ${computerSelection} `)}

    else if ((playerSelection.toLowerCase() == "rock"  && computerSelection =="scissors")  ||
    (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")    ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"))
    {

        document.getElementById('playerScoreText').innerHTML++
        playerCounter++
        return  (content.innerHTML = `You win against the computer ${playerSelection} beats the computers choice - ${computerSelection}`   ) }

    else {

        document.getElementById('computerScoreText').innerHTML++ ;
        computerCounter++
        return (content.innerHTML = `You lost - the computer drew ${computerSelection} which beats ${playerSelection} ` )}  
}

function game(){
   
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        playRound(button.innerHTML, computerPlay())
       });
      });
    }

game()


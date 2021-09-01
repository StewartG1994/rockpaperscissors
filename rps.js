let playerSelection = null;
let buttons = document.querySelectorAll('button');

let computerScore = 0 ;
let playerScore   = 0 ;



function computerPlay() 
{
    const computerSelection = ["rock", "paper", "scissors"];
    const random = computerSelection[Math.floor(Math.random() * computerSelection.length)] ;
    return random;
}


function playRound(playerSelection, computerSelection){

    console.log(computerScore,playerScore)
    document.getElementById('computerScoreText').innerHTML = computerScore;
document.getElementById('playerScoreText').innerHTML = playerScore;
    let content = document.getElementById('content');





    if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        return(content.innerHTML =`Its a draw ${playerSelection} matches ${computerSelection} `)}

    else if ((playerSelection.toLowerCase() == "rock"  && computerSelection =="scissors")  ||
    (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")    ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"))
    {

        playerScore++
        return  (content.innerHTML = `You win against the computer ${playerSelection} beats ${computerSelection}`   ) }

    else {

        computerScore++
        return (content.innerHTML = `You lost against a computer.. ${computerSelection} beats ${playerSelection} ` )}


}


function game(){
    
    console.log(computerPlay())
    buttons.forEach((button) => {

        button.addEventListener('click', () => {
        console.log(playRound(button.innerHTML, computerPlay()))
        });
      });
    


}

game()


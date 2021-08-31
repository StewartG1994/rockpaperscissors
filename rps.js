let playerSelection = null;
let buttons = document.querySelectorAll('button');
let computerScore = document.getElementById('computerScoreText').innerHTML;
let playerScore = document.getElementById('playerScoreText').innerHTML;







function computerPlay() 
{
    const computerSelection = ["rock", "paper", "scissors"];
    const random = computerSelection[Math.floor(Math.random() * computerSelection.length)] ;
    return random;
}


function playRound(playerSelection, computerSelection){


    if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {return(`Its a draw ${playerSelection} matches ${computerSelection} `)}

    else if ((playerSelection.toLowerCase() == "rock"  && computerSelection =="scissors")  ||
    (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")    ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"))
    {return  (`You win against the computer ${playerSelection} beats ${computerSelection}`   ) }

    else {return (`You lost against a computer.. ${computerSelection} beats ${playerSelection} `)}

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


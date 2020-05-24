
function computerAction()
{
    const actions = ['Rock', 'Paper', 'Scissors'];
    let actionResult = actions[Math.floor(Math.random()*actions.length)];
    console.log(actionResult)
    return actionResult;   
}


function playerRound()
{
const computerPlay = computerAction().toLowerCase();
const playerChoice = prompt("Type Rock, Paper or Scissors").toLowerCase();

if (computerPlay == playerChoice)
{
    return ("Its a draw " + playerChoice + " Matches " + computerPlay);
}

if ((computerPlay == "rock"  && playerChoice =="scissors")  ||
(computerPlay == "scissors" && playerChoice == "paper")    ||
(computerPlay == "paper" && playerChoice == "rock"))
{
    computerScore++
    return ("You lose " + computerPlay + " beats " + playerChoice)}

else {
    playerScore++
    return ("You win " + playerChoice + " beats " + computerPlay); 
}
}

playerRound()

function playGame()
{
    for ( i = 0 ; i < 5; i++)
{
    playerRound()
    [i];
}}

console.log(playGame())

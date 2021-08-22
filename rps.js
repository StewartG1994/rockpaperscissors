function computerPlay() 
{
    const computerSelection = ["rock", "paper", "scissors"];
    const random = computerSelection[Math.floor(Math.random() * computerSelection.length)] ;
    console.log(random)
    return random;
}


function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection)
    {return("Its a draw")}

    else if ((playerSelection.toLowerCase() == "rock"  && computerSelection =="scissors")  ||
    (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")    ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"))
    {return ("You win against the computer ")}

    else {return ("You lost against a computer...")}

}


function game(){

//let playerChoice = prompt('Rock, Paper or Scissors?')
console.log(playRound(playerChoice, computerPlay()))



}

game()
game()
game()
game()
game()


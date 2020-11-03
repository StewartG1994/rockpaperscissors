function computerPlay() 
{
    const computerSelection = ["rock", "paper", "scissors"];
    const random = computerSelection[Math.floor(Math.random() * computerSelection.length)] ;
    console.log(random)
    return random;
}

function playRound (playerSelection, computerSelection){
    if (playerSelection == computerSelection)
    {return("Its a draw")}

    else if ((playerSelection == "rock"  && computerSelection =="scissors")  ||
    (playerSelection == "scissors" && computerSelection == "paper")    ||
    (playerSelection == "paper" && computerSelection == "rock"))
    {return ("You win")}

    else {return ("You lose")}
}


function game(){
    for ( i = 0; i < 5; i++)
    {
        const playerSelection = (prompt("Type Rock, Paper or Scissors".toLowerCase()))
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        
        [i];
    }
}

const buttons = document.querySelector('button')
buttons.forEach(button => {
button.addEventListener('click', () => {
    playRound()
})    
});

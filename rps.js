function computerPlay() 
{
    const computerSelection = ["rock", "paper", "scissors"];
    const random = computerSelection[Math.floor(Math.random() * computerSelection.length)] ;
    return random;
}
computerPlay()

function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection)
    {return("Its a draw")}

    else if ((playerSelection == "rock"  && computerSelection =="scissors")  ||
    (playerSelection == "scissors" && computerSelection == "paper")    ||
    (playerSelection == "paper" && computerSelection == "rock"))
    {return ("You win")}

    else {return ("You lose")}
}

const button = document.querySelectorAll('button');
    button.forEach((button) => {
    button.addEventListener('click', event => {
        for (i = 0; i < 5; i++);
        const playerSelection = event.target.id;
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection));  
        console.log(playerSelection)
        console.log(computerSelection);
        [i];
    })
    })


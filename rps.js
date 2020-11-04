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
   // for ( i = 0; i < 5; i++)
    {       
        playerSelection = 'x'; 
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        
       // [i];
    }
}
game()

const rockbtn = document.querySelector('.rock');
rockbtn.addEventListener('click', () => {
  const playerSelection = 'rock';
  console.log(playerSelection);
});

const paperbtn = document.querySelector('.paper');
paperbtn.addEventListener('click', () => {
  const playerSelection = 'paper';
  
  console.log(playerSelection)
});

const scissorsbtn = document.querySelector('.scissors');
scissorsbtn.addEventListener('click', () => {
  const playerSelection = 'scissors';
  console.log(playerSelection)
})


  
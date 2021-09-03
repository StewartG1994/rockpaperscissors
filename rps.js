const actions = document.querySelector('.actions')
const buttons = document.querySelectorAll('button');

function computerPlay() 
{
    const computerSelection = ["rock", "paper", "scissors"];
    const random = computerSelection[Math.floor(Math.random() * computerSelection.length)] ;
    return random;
}

function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        const pOne = document.createElement('p')
        pOne.textContent = `Its a draw ${playerSelection} matches ${computerSelection} `;
        actions.appendChild(pOne)
    }

    else if ((playerSelection.toLowerCase() == "rock"  && computerSelection =="scissors")  ||
    (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")    ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"))
    {

        document.getElementById('playerScoreText').innerHTML++
 
        const p = document.createElement('p');
        p.textContent = `You win against the computer ${playerSelection} beats the computers choice - ${computerSelection}`;
        actions.appendChild(p);}

    else {

        document.getElementById('computerScoreText').innerHTML++ ;
        const ptwo = document.createElement('p');
        ptwo.textContent = `You lost - the computer drew ${computerSelection} which beats ${playerSelection}`;
        actions.appendChild(ptwo);}       
}

function game(){
   
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        playRound(button.innerHTML, computerPlay())
       });
      });
    }

game()

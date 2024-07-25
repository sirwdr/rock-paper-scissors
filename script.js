let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    computerOption = Math.floor(Math.random() * 3) + 1;
    if(computerOption === 1){
        return "rock";
    } else if(computerOption === 2){
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Choose rock, paper, scissors").toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
        
    } else{
        alert("Invalid option");
        return getHumanChoice;
    }
    
}

function playRound(){

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if(humanChoice === computerChoice){
        alert("it's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore = humanScore + 1;
        alert(`You win this round! Score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        computerScore = computerScore + 1;
        alert(`Computer win this round! Score: You ${humanScore} - Computer ${computerScore}`);
    }

}

for(let i = 0;i < 10; i++){
    if(humanScore === 5){
        alert(`Congratulations! You won the game!`);
        break;
    } else if(computerScore === 5){
        alert(`Sorry, you lost the game.`);
        break;
    }
    playRound();
}


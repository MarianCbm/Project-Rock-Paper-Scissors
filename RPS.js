function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*4)]
}

let userInput;

const rbtn=document.querySelector("#rock")
const pbtn=document.querySelector("#paper")
const sbtn=document.querySelector("#scissors")

rbtn.addEventListener('click',()=>{
    userInput="rock";
    computerInput=getComputerChoice();
    playRound(userInput,computerInput)
})

pbtn.addEventListener('click',()=>{
    userInput="paper";
    computerInput=getComputerChoice();
    playRound(userInput,computerInput);
})

sbtn.addEventListener('click',()=>{
    userInput="scissors";
    computerInput=getComputerChoice();
    playRound(userInput,computerInput);
})



function playRound(playerSelection, computerSelection){
    if (playerSelection==="rock"){
        if (computerSelection==="paper"){
            console.log("You Lost! Paper beats rock!");
            return ("You Lost! Paper beats rock!");
        }
        else if (computerSelection=="scissors"){
            console.log("You Won! Rock beats scissors!");
            return ("You Won! Rock beats scissors!");
        }
        else {
            console.log("Draw");
            return ("Draw");
        }
    }
    else if (playerSelection==="paper"){
        if (computerSelection==="scissors"){
            console.log("You Lost! Scissors beats paper!");
            return ("You Lost! Scissors beats paper!");
        }
        else if (computerSelection=="rock"){
            console.log("You Won! Paper beats rock!");
            return ("You Won! Rock beats scissors!");
        }
        else {
            console.log("Draw");
            return ("Draw"); 
        }
    }
    else if (playerSelection==="scissors"){
        if (computerSelection==="rock"){
            console.log("You Lost! Rock beats scissors!");
            return ("You Lost! Rock beats scissors!");
        }
        else if (computerSelection=="paper"){
            console.log("You Won! Scissors beats paper!");
            return ("You Won! Scissors beats paper!");
        }
        else {
            console.log("Draw");
            return ("Draw"); 
        }
    }
    
}

    function game () {
        let round = 0;
        let lostRounds=0;
        let drawRounds=0;
        while (round<5) {
            result= playRound(y=takeInput(),x=getComputerChoice());
            if (result =="You Lose! Paper beats Rock"|| result == "You Lose! Scissors beats Paper" || result == "You Lose! Rock beats Scissors"  ) {
                lostRounds = lostRounds+1;
            }
            else if (result =="Draw!" ) {
                drawRounds= drawRounds++;
            }
            round=round+1 ;
            console.log(`Round ${ round } elapsed `)
        }
        if (lostRounds>=3) {
            console.log ("You lost this game!")
        }
        else if (lostRounds==2 || drawRounds==2){
            console.log ("You lost this game!")
    
        }
        else if (lostRounds==1 || drawRounds==4) {
            console.log ("You lost this game!")
    
        }
        else {
            console.log("You won this game!")
        }
    
    
    }
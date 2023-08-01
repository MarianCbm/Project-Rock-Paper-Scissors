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


const container = document.querySelector('#result');
const result = document.createElement("p");
result.style.fontSize="30px";
container.appendChild(result);





function playRound(playerSelection, computerSelection){
    if (playerSelection==="rock"){
        if (computerSelection==="paper"){
            console.log("You Lost! Paper beats rock!");
            result.textContent="You Lost! Paper beats rock!";
            result.style.color="red";
            return ("You Lost! Paper beats rock!");
        }
        else if (computerSelection=="scissors"){
            console.log("You Won! Rock beats scissors!");
            result.textContent="You Won! Rock beats scissors!";
            result.style.color="blue";
            return ("You Won! Rock beats scissors!");
        }
        else {
            console.log("Draw");
            result.textContent="DRAW!";
            result.style.color="green";
            return ("Draw");
        }
    }
    else if (playerSelection==="paper"){
        if (computerSelection==="scissors"){
            console.log("You Lost! Scissors beats paper!");
            result.textContent="You Lost! Scissors beats paper!";
            result.style.color="red";
            return ("You Lost! Scissors beats paper!");
        }
        else if (computerSelection=="rock"){
            console.log("You Won! Paper beats rock!");
            result.textContent="You Won! Paper beats rock!";
            result.style.color="blue";
            return ("You Won! Rock beats scissors!");
        }
        else {
            console.log("Draw");
            result.textContent="DRAW!";
            result.style.color="green";
            return ("Draw"); 
        }
    }
    else if (playerSelection==="scissors"){
        if (computerSelection==="rock"){
            console.log("You Lost! Rock beats scissors!");
            result.textContent="You Lost! Rock beats scissors!";
            result.style.color="red";
            return ("You Lost! Rock beats scissors!");
        }
        else if (computerSelection=="paper"){
            console.log("You Won! Scissors beats paper!");
            result.textContent="You Won! Scissors beats paper!";
            result.style.color="blue";
            return ("You Won! Scissors beats paper!");
        }
        else {
            console.log("Draw");
            result.textContent="DRAW!";
            result.style.color="green";
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
            else if (result =="Draw!" ) {margin:auto;
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
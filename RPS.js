//variable declaration
let userInput;
let roundsPlayed=0;
let lostRounds=0;
let drawRouns=0;
let wonRounds=0;


//page selectors
const rbtn=document.querySelector("#rock");
const pbtn=document.querySelector("#paper");
const sbtn=document.querySelector("#scissors");
const container = document.querySelector('#result');
const heading=document.querySelector("#first");

//adding elements and text in page
const result = document.createElement("p");
result.style.fontSize="30px";
container.appendChild(result);
const round =document.createElement("h1");
round.style.fontSize="30px";
heading.appendChild(round);
round.textContent="Let's Play!"






//get computer choice
function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*4)]
}


//event listeners for buttons
rbtn.addEventListener('click',()=>{
    roundsPlayed++;
    userInput="rock";
    computerInput=getComputerChoice();
    playRound(userInput,computerInput);
    if (roundsPlayed===5){
        if(lostRounds>wonRounds){
            round.textContent="You lost! Let's play again!";
        }
        else if(lostRounds<wonRounds) {
            round.textContent="You Won! Let's play again!"; 
        }
        else {
            round.textContent="Draw! Let's play again!";
        } 
        roundsPlayed=0;
    }
})

pbtn.addEventListener('click',()=>{
    roundsPlayed++;
    userInput="paper";
    computerInput=getComputerChoice();
    playRound(userInput,computerInput);
    if (roundsPlayed===5){
        if(lostRounds>wonRounds){
            round.textContent="You lost! Let's play again!";
        }
        else if(lostRounds<wonRounds) {
            round.textContent="You Won! Let's play again!"; 
        }
        else {
            round.textContent="Draw! Let's play again!";
        } 
        roundsPlayed=0;
    }
    
})

sbtn.addEventListener('click',()=>{
    roundsPlayed++;
    userInput="scissors";
    computerInput=getComputerChoice();
    playRound(userInput,computerInput);
    if (roundsPlayed===5){
        if(lostRounds>wonRounds){
            round.textContent="You lost! Let's play again!";
        }
        else if(lostRounds<wonRounds) {
            round.textContent="You Won! Let's play again!"; 
        }
        else {
            round.textContent="Draw! Let's play again!";
        } 
        roundsPlayed=0;
    }
})







// function that plays one round
function playRound(playerSelection, computerSelection){
        round.textContent=`Rounds played ${roundsPlayed}`;
    if (playerSelection==="rock"){
        if (computerSelection==="paper"){
            console.log("You Lost! Paper beats rock!");
            result.textContent="Last round result: You Lost! Paper beats rock!";
            result.style.color="red";
            lostRounds++;
            return ("L");
        }
        else if (computerSelection=="scissors"){
            console.log("You Won! Rock beats scissors!");
            result.textContent="Last round result: You Won! Rock beats scissors!";
            result.style.color="blue";
            wonRounds++;
            return ("W");
        }
        else {
            console.log("Draw");
            result.textContent="Last round result: DRAW!";
            result.style.color="green";
            drawRouns++;
            return ("D");
        }
    }
    else if (playerSelection==="paper"){
        if (computerSelection==="scissors"){
            console.log("You Lost! Scissors beats paper!");
            result.textContent="Last round result: You Lost! Scissors beats paper!";
            result.style.color="red";
            lostRounds++;
            return ("L");
        }
        else if (computerSelection=="rock"){
            console.log("You Won! Paper beats rock!");
            result.textContent="Last round result: You Won! Paper beats rock!";
            result.style.color="blue";
            wonRounds++;
            return ("W");
        }
        else {
            console.log("Draw");
            result.textContent="Last round result: DRAW!";
            result.style.color="green";
            drawRouns++;
            return ("D"); 
        }
    }
    else if (playerSelection==="scissors"){
        if (computerSelection==="rock"){
            console.log("You Lost! Rock beats scissors!");
            result.textContent="Last round result: You Lost! Rock beats scissors!";
            result.style.color="red";
            lostRounds++;
            return ("L");
        }
        else if (computerSelection=="paper"){
            console.log("You Won! Scissors beats paper!");
            result.textContent="Last round result: You Won! Scissors beats paper!";
            result.style.color="blue";
            wonRounds++;
            return ("W");
        }
        else {
            console.log("Draw");
            result.textContent="Last round result: DRAW!";
            result.style.color="green";
            drawRouns++
            return ("D"); 
        }
    }
 
}
   
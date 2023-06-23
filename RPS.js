function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*4)]
}

function takeInput () {
    userInput=prompt("Rock, Paper or Scissors");
    userInput=userInput.toLocaleLowerCase();
    return userInput;
}

function checkInput(){
    if (userInput=="rock" || userInput=="paper" || userInput=="scissors") {
        return true;
    }
    else {
        return false;
    }

}




function playRound(playerSelection, computerSelection){

    if(checkInput()){

        if (playerSelection=="rock"){
            if(computerSelection=="paper") {
                return ("You Lose! Paper beats Rock")
             }
            else if(computerSelection="scissors") {
                return ("You Won! Rock beats Scissors")
                }    
            }
    
        if (playerSelection=="paper") {
            if(computerSelection=="scissors"){
                return("You Lose! Scissors beats Paper")
                }
             else if(computerSelection=="rock"){
                 return("You Won! Paper beats Rock")
                }
            }
    
        if(playerSelection=="scissors"){
            if(computerSelection=="rock") {
                return ("You Lose! Rock beats Scissors")
                }
            else if(computerSelection=="paper") {
                return("You Won! Scissors beats Paper")
                } 
            }
        else {
                return("Draw!")
            }
    
        }

        else {
            console.log("Wrong input, Try again")
            playRound(y=takeInput(),x=getComputerChoice())
            
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

game(); 






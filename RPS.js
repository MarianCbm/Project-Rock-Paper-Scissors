function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*4)]
}


function checkInput(){
    if (userInput=="rock" || userInput=="paper" || userInput=="scissors") {
        return true;
    }
    else {
        return false;
    }

}

function takeInput () {
    userInput=prompt("Rock, Paper or Scissors");
    userInput=userInput.toLocaleLowerCase();
    return userInput;
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
            console.log("Wrong input")
        }


    }







result= playRound(y=takeInput(),x=getComputerChoice());
console.log(result)


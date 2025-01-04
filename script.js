function getComputerChoice(){
    let choice = Math.random()*3;
    if (choice>=2){
        return "rock";
    }
    else if (choice>=1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let pick = prompt("Hey there, choose rock paper or sizurs.");
    if (!(pick== "rock" || pick== "paper" || pick== "scissors")){
        console.log("Invalid prompt, commencing termination protocol.");
    }
}

getHumanChoice();

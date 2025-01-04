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

function playRound(hpick, cpick){

    if ((cpick == "rock" && hpick == "paper")||(cpick == "scissors" && hpick == "rock")||(cpick == "paper" && hpick == "scissors")){
        humanScore++;
        console.log("Ya win: " + hpick + " beats " + cpick);
    }
    else if((cpick == "paper" && hpick == "rock")||(cpick == "scissors" && hpick == "paper")||(cpick == "rock" && hpick == "scissors")){
        computerScore++;
        console.log("Ya loooose: " + cpick + " beats " + hpick);
    }
    else{
        console.log("Draw, either that or you fudged the code.");
    }
}

function getHumanChoice(){
    let pick = (prompt("Hey there, choose rock paper or sizurs.")).toLowerCase();
    if (!(pick== "rock" || pick== "paper" || pick== "scissors")){
        console.log("Invalid prompt, commencing termination protocol.");
    }
    return pick;
}

function playGame(){
    for(let i=1;i<=5;i++){
        cpick=getComputerChoice();
        hpick=getHumanChoice();
        playRound(hpick,cpick);
    }
    console.log("Final Score: you " + humanScore + ", cpu " + computerScore + ".");
}

let humanScore = 0;
let computerScore = 0;
let cpick="";
let hpick="";
playGame(hpick,cpick);

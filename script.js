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
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

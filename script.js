var userChoice = document.getElementById("userChoice");
var computerChoice = ["Rock","Paper","Scissors"];
var answer = document.getElementById("answer");
var companswer = document.getElementById("computerChoice");

var userScore = document.getElementById("userScore");
var compsScore = document.getElementById("compsScore");

var win = 1;
var meScore = 0;
var cpScore = 0;

function go(){
var choice1 = userChoice.value;
var choice2 = computerChoice[Math.floor(Math.random()*3)];
    companswer.innerHTML = "The computer chooses " + choice2;
if(choice1===choice2){
    answer.innerHTML = "The result is a tie!";}
else if(choice1==="Rock"){
    if(choice2==="Paper"){
    cpScore += win;

    answer.innerHTML = "Paper wins!";}
else {
    meScore += win; 
    answer.innerHTML = "Rock wins!";}
}
else if(choice1==="Paper"){
    if(choice2==="Rock"){
    meScore += win; 
    answer.innerHTML = "Paper wins!";}
else {
    cpScore += win; 
    answer.innerHTML = "Scissors wins!";}
}
else if(choice1==="Scissors"){
    if(choice2==="Paper"){
    meScore += win; 
    answer.innerHTML = "Scissors wins!";}
else {
    cpScore += win; 
    answer.innerHTML = "Rock wins!";}}
else {
    alert("Sorry, that's not an option. Please choose Rock, Paper or Scissors")
}
userScore.innerHTML = meScore;
compsScore.innerHTML = cpScore;
}


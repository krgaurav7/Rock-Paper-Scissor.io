// let gam = document.querySelector(".game");
  
let userScore = 0;
let botScore = 0;
// select all choice div
const choices = document.querySelectorAll(".choice");
const c = document.querySelector("#msg");
userScorep = document.querySelector("#user-score");
botScorep = document.querySelector("#bot-score");

// generate bot choice 
const genbotChoice=()=>{
let options=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options [randIdx];
};

// user choice
const playGame =(userchoice)=>{
console.log("user choice = ",userchoice);
const botChoice = genbotChoice();
console.log("Bot Choice = ",botChoice);

// print draw game
const drawGame =()=>{
   console.log("Game was Draw !!");
   msg.innerText ="GAME WAS DRAW! Lets Try Again !";
   msg.style.backgroundcolor = "red";
};

// define userwin 
let userwin = true;
// show winner winner of game 
const showwinner = () =>{
   if (userwin){
      userScore++;
      userScorep.innerText= userScore;
   msg.innerText ="You WON the GAME";
   console.log("User win !!"); 
} else {
   botScore++;
   botScorep.innerText=botScore;
   msg.innerText ="You LOSE the GAME";
   console.log("Bot wins !!")
}
};

if (userchoice === botChoice){
   drawGame();

} else {
  
  if (userchoice === "rock") {
   userwin = botChoice === "paper" ? false : true;
  } else if (userchoice === "paper"){
   userwin = botChoice === "scissors" ? false : true;
  } else {
   userwin = botChoice === "rock" ? false :true;
  }
  showwinner(userwin);
}
};

choices.forEach((choice)=>{
// console.log(choice);
choice.addEventListener("click",() => {
   const userchoice= choice.getAttribute("id");
// console.log(`User was Clicked`,userchoice);
 playGame(userchoice)
   }) ;
});


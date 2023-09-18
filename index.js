//your code here
let turns = 0;
let roundsLeft = 0;
let userPoints = 0;
let computerPoints = 0;
let roundResult = "";
let computerChoice = "";
let gameResult = "turns required";
const options = ["ROCK", "PAPER", "SCISSORS"];

const handlePlay = function () {
  turns = Number(document.getElementById("game-number").value);
  roundsLeft = turns;
  userPoints = 0;
  computerPoints = 0;
  roundResult = "please choose your option";
  computerChoice = "waiting for you :)";
  gameResult = "in-progress";
  document.getElementById("rounds-left").innerHTML = roundsLeft;
  document.getElementById("user-points").innerHTML = userPoints;
  document.getElementById("computer-points").innerHTML = computerPoints;
  document.getElementById("round-result").innerHTML = roundResult;
  document.getElementById("computer-choose").innerHTML = computerChoice;
  document.getElementById("game-result").innerHTML = gameResult;
};

const generateComputerChoice = function () {
  const optionIndex = Math.floor(Math.random() * 3);
  return options[optionIndex];
};

const evaluateRound = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "TIE";
  } else if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    userPoints++;
    return "WON";
  } else {
    computerPoints++;
    return "LOSE";
  }
};

const handleChoice = function (e) {
  if (roundsLeft == 0) {
    window.alert("Please start a new game by clicking 'play'");
    return null;
  }
  let userChoice = e.target.getAttribute("data-ns-test");
  roundsLeft = roundsLeft - 1;
  computerChoice = generateComputerChoice();
  roundResult = evaluateRound(userChoice.toUpperCase(), computerChoice);
  if (userPoints > computerPoints + roundsLeft) {
    gameResult = "You won the game!";
    roundsLeft = 0;
  } else if (computerPoints > userPoints + roundsLeft) {
    gameResult = "Computer won the game, try again!";
  } else {
    gameResult = roundsLeft == 0 ? "TIE" : "in-progress";
  }
  document.getElementById("game-result").innerHTML = gameResult;
  document.getElementById("rounds-left").innerHTML = roundsLeft;
  document.getElementById("user-points").innerHTML = userPoints;
  document.getElementById("computer-points").innerHTML = computerPoints;
  document.getElementById("round-result").innerHTML = roundResult;
  document.getElementById("computer-choose").innerHTML = computerChoice;
};

window.onload = () => {
  const playButton = document.getElementById("play-game");
  playButton.addEventListener("click", handlePlay);
  const buttons = document.getElementsByClassName("btn");
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", handleChoice);
  }
};

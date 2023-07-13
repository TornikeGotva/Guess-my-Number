"use strict";

const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const body = document.getElementsByTagName("body");
let inputNumber = document.querySelector(".guess");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When input number is correct

  if (!guess) {
    displayMessage("No Number");
  }
  console.log(secretNumber);

  // When input number is correct

  if (secretNumber === guess) {
    displayMessage("Correct Number");
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
  }

  // When input number is wrong

  if (guess != secretNumber) {
    document.querySelector(".score").textContent = score;
    score--;

    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
    }
  }

  // Highscore

  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }
});

btnAgain.addEventListener("click", function () {
  displayMessage("Start Guessing...");
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  inputNumber.value = 0;
});

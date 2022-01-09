"use strict";

const buttons = document.querySelectorAll("#buttons button");
const infoText = document.querySelector("div#info-screen p")
const playerScoreInfo = document.querySelector("div#score p:first-child")
const computerScoreInfo = document.querySelector("div#score p:last-child")

let playerScore = 0;
let computerScore = 0;
let gameOver = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, computerChoice())
        checkWinCondition();
        resetGame();
    });
});

function computerChoice() {
    const answers = [
        "aard",
        "axii",
        "igni"
    ];
    const randomElement = Math.floor(Math.random() * answers.length);
    return answers[randomElement];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        infoText.textContent = `Its a draw! Both have ${playerSelection}!`;
    } else if (
        playerSelection == "aard" && computerSelection == "axii" ||
        playerSelection == "axii" && computerSelection == "igni" ||
        playerSelection == "igni" && computerSelection == "aard") {
            playerScore += 1;
            playerScoreInfo.textContent = playerScore;
            infoText.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        computerScore += 1;
        computerScoreInfo.textContent = computerScore;
        infoText.textContent = `You loose! ${computerSelection} beats ${playerSelection}!`;
    }
};

function checkWinCondition () {
    if (playerScore == 5) {
        infoText.textContent = "You are worthy to enter! Please come in and take an elixier!"
        gameOver = 1;
    } else if (computerScore == 5) {
        infoText.textContent = "You are not worthy! Go, get some practice!"
        gameOver = 1;
    }
};

function resetGame () {
    if (gameOver) {
        const button = document.querySelectorAll("button");
        const buttonParent = document.querySelector("div#buttons");
        button.forEach((button) => {
            button.parentNode.removeChild(button);
        })
        let createButton = document.createElement("button");
        createButton.setAttribute("class", "buttons");
        createButton.setAttribute("id", "newGame")
        createButton.textContent = "Let's play again!";
        createButton = buttonParent.appendChild(createButton);
        console.log(buttons);
    }
};
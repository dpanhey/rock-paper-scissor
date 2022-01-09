"use strict";

const buttons = document.querySelectorAll("#buttons button");
const buttonParent = document.querySelector("div#buttons");
const infoText = document.querySelector("div#info-screen p")
const playerScoreInfo = document.querySelector("div#score p:first-child")
const computerScoreInfo = document.querySelector("div#score p:last-child")

let playerScore = 0;
let computerScore = 0;
let gameOver = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "reset-button") {
            infoText.textContent = "Welcome Back! Show me you're worthy!"
        } else {
            playRound(button.id, computerChoice())
            checkWinCondition();
            resetGame();
        }
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
        const hideButton = document.querySelectorAll("div#buttons button:nth-child(odd)");
        const resetButton = document.querySelector("div#buttons button:nth-child(2)")
        hideButton.forEach((button) => {
            button.setAttribute("class", "hide");
        })
        resetButton.setAttribute("onclick", "newGame()")
        resetButton.setAttribute("id", "reset-button")
        resetButton.textContent = "Let's play again!";
    }
};

function newGame () {
    playerScore = 0;
    computerScore = 0;
    gameOver = 0;
    playerScoreInfo.textContent = playerScore;
    computerScoreInfo.textContent = computerScore;
    const showButton = document.querySelectorAll("div#buttons button:nth-child(odd)");
    const resetButton = document.querySelector("div#buttons button:nth-child(2)")
    showButton.forEach((button) => {
        button.setAttribute("class", "buttons");
    })
    resetButton.removeAttribute("onclick");
    resetButton.setAttribute("id", "axii")
    resetButton.textContent = "Axii - Water";
}
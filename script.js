"use strict";

function computerPlay() {
    const answers = [
        "rock",
        "paper",
        "scissor"
    ];
    const randomElement = Math.floor(Math.random() * answers.length);
    return answers[randomElement];
}

const computerSelection = computerPlay();
const playerSelection = "";

function checkWinCondition(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Its a draw! Both have ${playerSelection}!`
    } else if (
        playerSelection == "rock" && computerSelection == "scissor" ||
        playerSelection == "scissor" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You loose! ${computerSelection} beats ${playerSelection}!`
    }
}
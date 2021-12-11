"use strict";

// This Game is about beating the opponent with the right choice:
// Rock, Paper or Scissor.
// Rock beats scissor, scissor beats paper and paper beats rock.

// First function: the computer should randomly return "Rock", "Paper" or "Scissor".

function computerPlay() {
    const answers = [
        "rock",
        "paper",
        "scissor"
    ];
    const randomElement = Math.floor(Math.random() * answers.length);
    return answers[randomElement];
}

// declare a const playerSelection, so that the player is prompted for rock, paper or scissor
// declare a const computerSelection wich takes the output from computerPlay

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerPlay());

// Second function: A function that plays a single round of Rock Paper Scissor

// Third function: A function that returns a string that declares the winner of this round
// the function declareWinner should return a string like "You Lose! Paper beats Rock!"


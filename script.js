"use strict";

// This Game is about beating the opponent with the right choice:
// Rock, Paper or Scissor.
// Rock beats scissor, scissor beats paper and paper beats rock.

// First function: the computer should randomly return "Rock", "Paper" or "Scissor".

// declare a const playerSelection, so that the player is prompted for rock, paper or scissor
// declare a const computerSelection wich takes the output from computerPlay

// console.log(playerSelection);
// console.log(computerPlay());


// Second function: A function that plays a single round of Rock Paper Scissor
// Third function: A function that returns a string that declares the winner of this round
// the function declareWinner should return a string like "You Lose! Paper beats Rock!"

// Write a function called game() which have the previos functions and consts inside of it
// make this function play the game 5 times

function game() {
    function computerPlay() {
        const answers = [
            "rock",
            "paper",
            "scissor"
        ];
        const randomElement = Math.floor(Math.random() * answers.length);
        return answers[randomElement];
    }

    function playerInput () {
        const input = prompt("Take a choice!").toLowerCase();
        return input;
    }

    const computerSelection = computerPlay();
    const playerSelection = playerInput();

    console.log(playerSelection);
    console.log(computerSelection);

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "rock") {
            return "Its a draw! Both have Rock!"
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            return "You loose! Paper beats Rock!"
        } else if (playerSelection == "rock" && computerSelection == "scissor") {
            return "You win! Rock beats Scissor!"
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return "Its a draw! Both have Paper!"
        } else if (playerSelection == "paper" && computerSelection == "scissor") {
            return "You loose! Scissor beats Paper!"
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return "You win! Paper beats Rock!"
        } else if (playerSelection == "scissor" && computerSelection == "scissor") {
            return "Its a draw! Both have Scissor!"
        } else if (playerSelection == "scissor" && computerSelection == "rock") {
            return "You loose! Rock beats Scissor!"
        } else if (playerSelection == "scissor" && computerSelection == "paper") {
            return "You win! Scissor beats Paper!"
        }
    }
    console.log(playRound(playerSelection, computerSelection))
}

game();
game();
game();
game();
game();
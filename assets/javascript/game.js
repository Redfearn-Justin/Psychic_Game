
$(document).ready(function() {

    //Variables
    //====================================
    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessRemain = 10;
    var lettersGuessed = [];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Functions
    //===================================
    document.onkeyup = function (event) {

        var guessCurrent = event.key;

        if (lettersGuessed.indexOf(guessCurrent) < 0 && choices.indexOf(guessCurrent) >= 0) {
            lettersGuessed[lettersGuessed.length] = guessCurrent;
            guessRemain--;

        }

        if (computerLetter == guessCurrent) {
            wins++;
            lettersGuessed = [];
            computerLetter = choices[Math.floor(Math.random() * choices.length)];
            document.getElementById("Wins").textContent = "Wins: " + +wins;
        }

        if (guessRemain == 0) {
            losses++;
            guessRemain = 10;
            lettersGuessed = [];
            computerLetter = choices[Math.floor(Math.random() * choices.length)];
            document.getElementById("Losses").textContent = "Losses: " + +losses;
        }


        document.getElementById("Guesses").textContent = "Guesses Left: " + +guessRemain;
        document.getElementById("lettersGuessed").textContent = lettersGuessed;
    }
    console.log(computerChoice)
});
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];


//Had to find this online as well because when I would run it with my
//code, I didn't get an error but it did say that it took too long?
window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	
}

document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
    


    if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
    }

    else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft-1;
    }

    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
    }
    //This was new to me - I tried using text info from R,P,S but it
    //wasn't flowing over - need to learn more
    var html = "<p>Guess what letter I'm thinking of!</p>" +
              "<p>Wins: " + wins + "</p>" +
              "<p>Losses: " + losses + "</p>" +
              "<p>Guesses left: " + guessesLeft + "</p>" +
              "<p>Your guesses so far: " + lettersGuessed + "</p>";
     //I read the innerHTML isn't a good flow but couldn't find
     //and other way to do it - found this online
    document.querySelector("#game").innerHTML = html;
    
    }




















var guesses = 0;
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var hangmanChoice;
var userGuess;
var emptyArr = [];
var guessArr = [];
var winString = "";

  var currentWins = document.getElementById("wins");
      var currentLoss = document.getElementById("losses");
      currentLoss.textContent = losses;
      currentWins.textContent = wins;
  alert("Press OK to start hangman!!");
      
     
      var hangmanWords = ["sun", "beach", "surfing", "hawaii", "tropical", "ocean", "waves", "sandals", "coral", "lagoon", "shark"]

      hangmanChoice = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

      for (i=0;i<hangmanChoice.length;i++){
          emptyArr.push("-");
      }
      var guessLeft = document.getElementById("guess-left")
      guessLeft.textContent = guessesLeft;
      var lastGuess = document.getElementById("allGuesses");
      var currentlyGuessing = document.getElementById("guessed");
      currentlyGuessing.textContent = emptyArr.join(" ");
      console.log(hangmanChoice)
      console.log(emptyArr)
      
          document.onkeyup = function(event) {
              // Determines which key was pressed.
              userGuess = event.key.toLowerCase();
              
              if (hangmanChoice.indexOf(userGuess) > -1){
                  for (i=0;i<hangmanChoice.length;i++){
                      if (userGuess == hangmanChoice[i]){
                      emptyArr[i] = userGuess;

                       }

                  }  
                  currentlyGuessing.textContent = emptyArr.join(" ");
                  winString = emptyArr.join("");
                  console.log(winString)
              } 
              else if (guessArr.includes(userGuess)==false && hangmanChoice.includes(userGuess) == false){

              
                  guessArr.push(userGuess);
                  lastGuess.textContent = guessArr.join(" ");
                  guessesLeft--;
                  guessLeft.textContent = guessesLeft;
              }
              if (winString == hangmanChoice){
                  alert("You Win!! The answer was " + winString);
                  guessesLeft = 10;
                  wins++
                  winString = "";
                  currentWins.textContent = wins;
                  guessLeft.textContent = guessesLeft;
                  emptyArr = [];
                  guessArr = [];
                  hangmanChoice = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
                  for (i=0;i<hangmanChoice.length;i++){
                       emptyArr.push("-");
                  } 
                  currentlyGuessing.textContent = emptyArr.join(" ");
                  lastGuess.textContent = "";
                  console.log(hangmanChoice)      
              }
              
              if(guessesLeft < 1){
                  alert("You lose :( The answer was " + hangmanChoice);
                  guessesLeft = 10;
                  losses++
                  winString = "";
                  currentLoss.textContent = losses;
                  guessLeft.textContent = guessesLeft;
                  emptyArr = [];
                  guessArr = [];
                  hangmanChoice = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
                  for (i=0;i<hangmanChoice.length;i++){
                       emptyArr.push("-");
                  } 
                  currentlyGuessing.textContent = emptyArr.join(" ");
                  lastGuess.textContent = guessArr.join(" ");
                  console.log(hangmanChoice) 

              }
}
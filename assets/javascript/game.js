// javascipt file

//the very first thing I want to create is my word bank and hints

var hangmanGame = {
    words: [
        {
            word: "dumbledore",
            hint: "the only wizard Voldemort has ever been afraid of"
        },
        {
            word: "hermione",
            hint: "the brightest wicth of her age"
        },
        {
            word: "hedwig",
            hint: "the snowy owl"
        },
        {
            word: "malfoy",
            hint: "draco"
        },
        {
            word: "slytherin",
            hint: "house of the most ambitious wizards"
        }
        
    ]};
//randomize the word bank
var randomNum;
var randomWord;
var randomWordHint;


console.log("randomWord: ", randomWord);
console.log("randomWordHint: ", randomWordHint);


//empty array to store the current word (word the user is trying to guess to win)
var curWordArray = [];
//empty array for letters already guessed
var lettersGuessedArray = [];
//s for string 
var s; 




//the variables that contain numbers

var wins = 0;
var numberOfGuessesLeft = 15;
var lettersRemaining= 0;

//boolean 
var hasAlreadyBeenGuessed = false;


//here is where the game begins
function getStarted () {
 randomNum = Math.floor(Math.random() * hangmanGame.words.length); //this variable was seperated for simplicity
 randomWord = hangmanGame.words[randomNum].word;
 randomWordHint = hangmanGame.words[randomNum].hint;

lettersRemaining = randomWord.length; 

        
        curWordArray= [];
//this section is to get the dashes for the user to guess
    for (var i = 0; i < randomWord.length; i++) {
        // console.log("randomWord[i]", randomWord[i]);
        curWordArray[i] = "_";
        
    }
    s= curWordArray.join(" ");
    document.getElementById("curWord").innerHTML = s;

document.getElementById("wins").innerHTML = wins;

document.getElementById("hint").innerHTML = randomWordHint;

document.getElementById("numberOfGuessesLeft").innerHTML = numberOfGuessesLeft;

};
//the next step to is to include user input
      
document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
   hasAlreadyBeenGuessed=false;
for( var i= 0; i< lettersGuessedArray.length; i++) {
    if(lettersGuessedArray[i] == letter) {
        hasAlreadyBeenGuessed = true;
    }
}
    if(hasAlreadyBeenGuessed === false) {
        for(var i=0; i < randomWord.length; i++) {
            if(randomWord[i] === letter) {
                curWordArray[i] = letter;
                lettersRemaining--;
                console.log("letterpressed: ", curWordArray[i]);
                    s= curWordArray.join(" ");
                    document.getElementById("curWord").innerHTML = s;
        
            }if (randomWord.indexOf(letter) == -1) {
                lettersGuessedArray.push(letter);
                console.log("letterpressed: ", lettersGuessedArray[i]);
                s= lettersGuessedArray.join(" ");
                    document.getElementById("lettersGuessed").innerHTML = s;
                    numberOfGuessesLeft--;
                    break;


            }
        }
    }
    console.log(lettersRemaining);
    if (lettersRemaining < 1) {
        getStarted();
        wins++;
        document.getElementById("wins").innerHTML = wins;
        console.log("wins: ", wins);
        numberOfGuessesLeft = 15;
        lettersGuessedArray = [];
    }
        
        document.getElementById("numberOfGuessesLeft").innerHTML = numberOfGuessesLeft; 
        
        if (numberOfGuessesLeft <1) {
        getStarted();
        numberOfGuessesLeft = 15;
        lettersGuessedArray = [];
        
    }
};          
//calling this function so it can perform 
getStarted();



 








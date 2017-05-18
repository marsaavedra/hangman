// javascipt file

//the very first thing I want to create is my word bank and hints
<<<<<<< HEAD

=======
>>>>>>> 628c1024ffb744f85a2b7e180abd0888c2862e02
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
<<<<<<< HEAD
var randomNum = Math.floor(Math.random() * hangmanGame.words.length); //this variable was seperated for simplicity
var randomWord = hangmanGame.words[randomNum].word;
var randomWordHint = hangmanGame.words[randomNum].hint;
=======
var randNum = Math.floor(Math.random()* hangmanGame.words.length);
var randomWord = hangmanGame.words[randNum].word;
>>>>>>> 628c1024ffb744f85a2b7e180abd0888c2862e02
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

//putting the correct actions in the correct places in the HTML file
document.getElementById("wins").innerHTML = wins;

document.getElementById("hint").innerHTML = randomWordHint;

<<<<<<< HEAD
document.getElementById("numberOfGuessesLeft").innerHTML = numberOfGuessesLeft;

document.getElementById("curWord").innerHTML = curWordArray;
//this section is to get the dashes for the user to guess
    for (var i = 0; i < randomWord.length; i++) {
        // console.log("randomWord[i]", randomWord[i]);
        curWordArray[i] = "_";
        
    }
    s= curWordArray.join(" ");
    document.getElementById("curWord").innerHTML = s;

//the next step to is to include user input
document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
   
    for(var i=0; i < randomWord.length; i++) {
        if(randomWord[i] === letter) {
            curWordArray[i] = letter;
            console.log("letterpressed: ", curWordArray[i]);
                s= curWordArray.join(" ");
                document.getElementById("curWord").innerHTML = s;
       
        }if (randomWord[i] !== letter) {
            lettersGuessedArray[i] === letter;
            console.log("letterpressed: ", lettersGuessedArray[i]);
            s= lettersGuessedArray.join(" ");
                document.getElementById("lettersGuessed").innerHTML = s;
        }
        } 
};
        //money shot right here..if the random word contains the letter the user typed in..
        // if (randomWord[i] === letter) {
        //     //BOOM! Assign it to the dang letter
        //     curWordArray[i] = letter;
        //     console.log("right letter:", letter);
        // }
        // else {
        //     console.log("wrongLetter:", letter);
        //     guessedArray[i] = letter;
        //     // document.getElementById("lettersGuessed").innerHTML = guessedArray;
        //     guessedArray.push[letter];
        // }
//     }
// };


=======
console.log ("randomWord");
>>>>>>> 628c1024ffb744f85a2b7e180abd0888c2862e02


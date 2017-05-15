// javascipt file

//the very first thing I want to create is my word bank and hints
// function wordBank () {
//     var varWords = {
//         words: [
//             {
//                 word: "dumbledore",
//                 hint: "the only wizard Voldemort has ever been afraid of"
//             },
//             {
//                 word: "lumos",
//                 hint: "Spell to produce light from your wand"
//             },
//             {
//                 word: "hermione",
//                 hint: "the brightest witch of her age"
//             },
//             {
//                 word: "hedwig",
//                 hint: "Snowy Owl"
//             },
//             {
//                 word: "malfoy",
//                 hint: "Snowy Owl"
//             },
//             {
//                 word: "slytherin",
//                 hint: "house of the most ambitious wizards"
//             }

//         ]

//     };
//     return varWords;
// }  

var wordBankArr = ["dumbledore", "lumos", "hermione", "hedwig", "malfoy", "slytherin"];
//end of word bank code 

//randomize the word bank
var randomWord = wordBankArr[Math.floor(Math.random()* wordBankArr.length)];

//lets define some empty globals
var s; //s for string
var count = 0; 

//empty array to store the guesses
var answerArray = [];

//here we fill the answer array with underscores 
//the number of underscores mathches the letters in randomly chosen word
function startUp () {
    for(var i=0; i < randomWord.length; i++) {
        answerArray[i]= "_";
        console.log(answerArray[i]= "_");
    }
    //now lets put them in a string (lets grab that s from line 45)
    s= answerArray.join(" ");
    document.getElementById("answer").innerHTML= s; 
    console.log("answerArray");
}
//end of startUp function

//in this next funciton we will go by the first letter the user pressed
document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter > 0) {
        for (var i=0; i < randomWord.length; i++) {
            //if the random word contains the letter the user typed in..
            if(randomWord[i]=== letter) {
                //assign it to letter
                answerArray[i]= letter;
            }
        }
        //here is how many times it takes to guess
        count ++; 
        document.getElementById("numberOfGuesses").innerHTML="numberOfGuesses: " + count;
        document.getElementById("answer").innerHTML= answerArray.join(" ");
    }
}



//label all of the id's from the html here
// var txtInstructions = document.getElementById("instructions");
// var txtWins = document.getElementById("wins");
// var txtCurrentWord = document.getElementById("currentWord");
// var txtHint = document.getElementById("hint");
// var txtNumberOfGuessesLeft = document.getElementById("NumberOfGuessesLeft");
// var txtlettersGuessed = document.getElementById("lettersGuessed");

// //variable that holds the number of wins for the user
// var wins = 0;

// //variable that holds the number of guessed left for the user
// var NumberOfGuessesLeft = 15;

// //variable that holds the current word to guess
// var currentWord = " ";

// //here are some globals
// var s; 
// var count = 0;

// //empty array that holds the split letters on function grabNewWord
// var splitWordsArr = [];

// //empty array that holds letters already guessed for display to the user
// var lettersGuessedArr= [];  

// //empty array for holding the dashes
// var dashesArr = [];

// //BEGINNIN OF FUNCTION grabNewWord $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// //this function returns new words from the wordbank
// function grabNewWord () {
//     grab = wordBank ; //wordItems is the function in the word bank
//     words = grab.words //words (with a plural) is what it set for the [word (singular) and hints] in the wordbank 

//     //now the comuputer must go in and randomly select a word/hint
//     randomSelection = [Math.floor(Math.random() * words.length)]; 

//     //here we include the hints that correspond with the word
//     txtHint.textContent = words[randomSelection].hint; 

//     //Now we will add the letters of the selected word individually by using split (differentiate between the plural and singular version of "word")
//     var splitWordsArr = words[randomSelection].word.split("");

//     //and here is where the computer will return the random words selection (the word/hint combos)
//     return words[randomSelection];
// }
// ////END OF FUNCTION grabNewWord $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// //BEGINNING of funtion to begin game -------------------------------------------
// function beginGame () {
//     //grab a new word from the function grabNewWord above ( that function for the wordbank with words and hints)

//     var newWord = grabNewWord(); 
//     //we are going to place the newWord in the console to see that it is working
//     console.log(newWord);
//     //words and hints 
//     txtHint.textContent = newWord.hint;
//     currentWord = newWord.word;

//     //here is where we will put in the dashes
//     for(var i= 0; i < currentWord.length; i++) {
//         dashesArr.push("_");
//     }
//     txtCurrentWord.textContent = dashesArr.join("");

//END of function -------------------------------------------------------------

//randomize the words in worbank
//var wordBank = wordBankArr[Math.floor(Math.random() * wordBankArr.length)];

//Press any key to continue
//document.onkeyup = function(event) {
 //   var letter = String.fromCharCode(event.keyCode).toLowerCase();

    //
// }


 
//Here are the beginning of our functions
//here we fill the answer array with underscores
// function underscores () {
//     for ( var i=0; i< words.length; i++) {
//         currentWord[i] = "_"
//     }
//     //put them in a string
//     s = currentWord.join(" ");
//     document.getElementById("")
// }

// function letter () {
//     //here we get the letter the user typed 
//     var letter = document.getElementById("letter").value ;
//     //make sure we have a guess
//     if (letter > 0 ) {
//         for (var i= 0; i < wordBank; i++) {
//         //now, if the wordBank contains a letter the user typed in
//             if (wordBank[i] === letter) {
//                 //assign it to the letter
//                 currentWord  [i] = letter; 
//             }
//         }
//     }
// }

//herer we 

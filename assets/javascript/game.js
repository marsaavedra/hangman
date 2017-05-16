// javascipt file

//the very first thing I want to create is my word bank and hints
function wordBank () {
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
    ]
};


//randomize the word bank
var randomWord = hangmanGame.words[Math.floor(Math.floor()* hangmanGame.words.length)].word;
console.log("randomWord: ", randomWord);

document.getElementById("curWord").innerHTML = randomWord; 

};

console.log ("randomWord");


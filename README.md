```javascript

Describe: findFirstChar()

Test: "It should recognize the first character of a word."
Code:
  const word = "jersey";
  const firstChar = word[0];
  findFirstChar(word);
Expected Output: "j"

Test: "It should recognize if the first character of a word is a vowel."
Code:
  const word = "jersey";
  const firstChar = word[0];
  const vowel = ["a", "e", "i", "o", "u"];
    if (firstChar === vowel) {
    return true;
    }
Expected Output: false;

Test: "It should recognize if the first character of a word is a q."
Code:
  const word = "jersey";
  const firstChar = word[0];
    if (firstChar === "q") {
    return true;
    }

Test: "It should add "way" to the end of words beginning with a vowel."
Code:
  let pigVowelWord;
  const word = "elevator";
  const firstChar = word[0];
  if (firstChar === vowel) {
  let pigVowelWord = word.concat("way");
  }

Test: "It should move the first two characters of the word at the end first and then add "AY" to the end after." 
Code: 
let pigConsWord;
const word = "quick";
const firstChar = word[0];
  if (firstChar === "q")
  let pigConsWord = word.slice(1).concat("quay")
expected output; 
    "ickquay"
    

Test: "If it starts with any other letter move to end and add "ay""
code: 
const word = "latin";
const firstChar = word[0];
  if (firstChar !== vowel && firstChar !== "q" )
  let pigConsWord = (word.slice(0) + firstChar).concat("ay");

// Example
function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}

// function findFirstChar(word) {
// let firstChar = word[0];
// }


```
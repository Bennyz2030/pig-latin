// business Logic

// function pigLatin(word) {
//   //const testWord = "okay";
//   //console.log(testWord);
//   const firstChar = word[0];
//   const vowel = ["a","e","i","o","u"];
//   for (i=0; i<word.length; i+=1) {
//     //for (i=0; i<vowel.length; i+=1)
//     if (firstChar[i] !== "a" && ) {
//     return true;
//       }
//     }
//   }

function pigVowel(word) {
  let input = word;
  if (input[0] === "a" || input[0] === "e" || input[0] === "i" || input[0] === "o" || input[0] === "u") {
    return true;
  } else {
    return false;
  }
}

function pigQu(word){
  let input = word;
  if (input[0] === "q" && input[1] === "u") {
    return true;
  }
  return false;
}

// function pigConst(word) {
//   if (pigVowel(word) === false) {
//     return true;
//   }
//   return false;
// }

function pigLatin(string) {
  let splitPig = string.toLowerCase().split(" ");
  console.log(splitPig);
  let pigArray = [];
  for (i = 0; i < splitPig.length; i++) {
    if (pigVowel(splitPig[i]) === true);
      pigArray.push(splitPig[i] + "way");
   }
  //if (pigQu(splitPig[i]) === true);
  //  let splitPigQu = splitPig[i].slice(1);
  //  pigArray.push((splitPigQu) + "quay")
return pigArray;
}


  
  
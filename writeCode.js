// 1. sum to zero function 
// take in an array as a parameter
// loop through each number in the array compared against every other numberin the array
// if theres a sum pair that's equal to zero return true
// if list is empty return false or if no sum pair of 0
function sumToZero(array) { 
    for (let i=0; i < array.length; i++) {
        for (let j= i +1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true 
            }
        }
    }
        return false
    }

//runtime is quadratic 

// arrayOne = []
// console.log(sumToZero(arrayOne))
// arrayTwo = [1,2,3]
// console.log(sumToZero(arrayTwo))
// arrayThree = [-1, 0, 1, 2, 3]
// console.log(sumToZero(arrayThree))

//-------------------------------------------

//2. Unique Characters function 
// take in single word
// loop through each letter in the word
//compare against other letters in word
//return false if theres a matching letter
//return true if all characters are unique 

function uniqueCharacters(word) {
    for (let i = 0; i< word.length; i++) {
        for (let j = i+1; j< word.length; j++) {
            if (word[i] === word[j]) {
                return false
            }
        }
    }
    return true 
}


//runtime is quadratic 


// wordOne = 'lilo'
// console.log(uniqueCharacters(wordOne))
// wordTwo = 'alien'
// console.log(uniqueCharacters(wordTwo))

//--------------------------------------------


//3. Pangram Sentence function
//take in a sentence
//compare against the letters of the alphabet
//return false if theres a match for each letter of the alphabet
//keep a log of matches, compare to alphabet

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const found = [];
  
   
    const letters = sentence.toLowerCase().split('');
  
    for (const letter of letters) {
      if (alphabet.indexOf(letter) !== -1 && !found.includes(letter)) {
        found.push(letter);
      }
    }

    return found.length === alphabet.length;
  }

//runtime is linear


//   sentenceOne = 'The quick brown fox jumps over the lazy dog'
//   console.log(isPangram(sentenceOne))
//   sentenceTwo = 'I love vanilla icecream'
//   console.log(isPangram(sentenceTwo))

//--------------------------------------------------------------

//4. Return longer word

function isLongestWord(array) {
    let longestWord = "";
    let longestLength = 0;

    for (const word of array) {
      const currentLength = word.length;

      if (currentLength > longestLength) {
        longestWord = word;
        longestLength = currentLength;
      }
    }
  
    return longestWord;
  }

//runtime is linear 

//   arrayOne= ['yessir', 'absolutely']
//   console.log(isLongestWord(arrayOne))
//   arrayTwo= ['abc', 'defghi']
//   console.log(isLongestWord(arrayTwo))

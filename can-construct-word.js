"use strict";
/** Accepts 1 word and 1 string of letters, returns true if the string has all the letters in the word
 * returns false if letters are missing.
 * 1) If letterString length < word, return false
 * 2) Make frequency counter of word characters
 * 3) Make frequency counter of letterString
 * 4) Loop over word Obj
 *  4a) If key DNE in letterObj, return false
 *  4b) If key exists in letterOBJ 
 *      - value in letterObj is less than value in wordObj, return false
 * 5) Loop ends, return true  
 */
// add whatever parameters you deem necessary & write doc comment

function canConstructWord(word, letters) {
    if (letters.length < word.length) {
        return false;
    }
    const wordObj = makeFrequencyCounter(word);
    const lettersObj = makeFrequencyCounter(letters);
    for (let char in wordObj) {
        if (lettersObj[char] === undefined || lettersObj[char] < wordObj[char]) {
            return false;
        }
    }
    return true;
}

/** Accepts a string input and returns a frequency counter of the characters as an object) */
function makeFrequencyCounter(string) {
    let charObj = {};
    for (let char of string) {
        charObj[char] = (charObj[char] || 0) + 1;
    }
    return charObj
}

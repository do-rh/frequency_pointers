"use strict";

/** Inputs 2 positive integers, returns true if frequency of digits are same.
 * Otherwise, return false.
 */

/** Use frequency counters
 * 1. Create map for integer 1 and integer 2
 * 2. Compare size of maps if not equal, return false
 * 3. Loop through map 1 keys, compare with map 2 keys
 * 3.a) If key doesn't exist, return false;
 * 3.b) Compare values corresponding to keys, if different return false;
 * 4. Return true when loop ends
 */
// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const num1Map = numToMaps(num1);
    const num2Map = numToMaps(num2);
    console.log(num1Map);
    
    if (num1Map.size != num2Map.size) {
        return false;
    }
    for (let key of num1Map.keys()) {
        let isSameVal = (num2Map.get(key) === num1Map.get(key));
        if (!(num2Map.has(key)) || !isSameVal) {
            return false;
        }
    }
    return true;
}

/** Create maps given an input integer with digit count */
/** turn num into string
 * iterate string and input into map with count
 */
function numToMaps(num) {
    const numStr = num.toString();
    let numMap = new Map();
    for (let digit of numStr) {
        let count = (numMap.get(digit) || 0) + 1;
        numMap.set(digit, count);
    }
    return numMap;
}

"use strict";

/** Accepts 2 arrays of varying length. 
 * Return object with keys from array1, paired with values from array2.
 * If there are more keys than values, values are null.
 * If there are more values than keys, values will not be in object.
 */

/**
 * 1. Create empty object
 * 2. Loop through array 1 and 2 at the same time and insert in object
 * 2.a) If element in array2 does not exist, set value as null.
 * 3. Return object
*/
// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let pairs = {};
    for (let i = 0; i < keys.length; i++) {
        (values[i] === undefined) ? pairs[keys[i]] = null : pairs[keys[i]] = values[i];
    }
    return pairs;
}

"use strict";

/**
 * Input: array of non-zero integers
 * Returns array with negative values followed by positive values
 * Constraints: output array must be the same as input, ie. cannot build a copy of the input array
 */

/**
 * Use pointer starting from 0
 * While the pointer is less than the array length
 *   - If value is negative, keep in place, increment pointer to right
 *   - If value is positive, splice value and push onto end of array.
 * return array
 */
// add whatever parameters you deem necessary
function separatePositive(integers) {
    let left = 0;
    let right = integers.length - 1;
    while (left < right) {
        if (integers[left] > 0) {
            left++;
        } else {
            integers.push(integers[left]);
            integers.splice(left,1);
            right--;
        }
    }
    return integers;
}

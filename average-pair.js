"use strict";
/** Takes inputs of 1 sorted array of integers & 1 target average and evaluates whether there are 2 integers in the array that average to the target average.
 * Use 2 pointers to compare against average
 * 1) Make left (first array element) & right (last array element) pointer
 * 2) Calculate average of 2 pointers (their value) & compare against the target average while right pointer > left pointer
 *    - if equals target, return true
 *    - if greater, move right pointer left
 *    - if smaller, move left pointer to right
 * 3) return false
*/
// add whatever parameters you deem necessary
function averagePair(integers, targetAvg) {
    let left = 0;
    let right = integers.length-1;
    while (left < right) {
        if (((integers[left] + integers[right]) / 2) === targetAvg) {
            return true;
        }
        if (((integers[left] + integers[right]) / 2) < targetAvg) {
            left++;
        }
        if (((integers[left] + integers[right]) / 2) > targetAvg) {
            right--;
        }
    }
    return false;
}
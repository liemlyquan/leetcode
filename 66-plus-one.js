/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let indexToPlus = digits.length - 1;
    digits[indexToPlus] = digits[indexToPlus] + 1
    while (digits[indexToPlus] == 10) {
        digits[indexToPlus] = 0;
        indexToPlus -= 1;
        if (indexToPlus == -1) {
          digits.unshift(1)
        } else {
          digits[indexToPlus] = digits[indexToPlus] + 1  
        } 
        
    }
    return digits
};
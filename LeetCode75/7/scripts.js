/**
 * @param {number[]} nums
 * @return {number[]}
 */

// an important concept to the resolution of this problem is the "suffixes" and "prefixes" of a number in an array
// basically, the prefix of an number (in an array) is the multiplication of all the items that come before it
// meanwhile, the suffix of a number (in an array) is the multiplication of all the numbers that come after it
// therefore, if you multiply the prefix by the suffix of a number you'll have the multiplication of all the items
// except itself

var productExceptSelf = function (nums) {
  // creating an array that will have the same length as the given one and filling with 1s
  let result = new Array(nums.length).fill(1);

  // defining the variables that will store the values of prefixes and suffixes
  let prefix = 1;
  let suffix = 1;

  // this loop will multiply the previous value (in the order of the array) by the previous prefix
  // this way we'll have the prefixes of all numbers stores in the 'result' array
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // now, we'll have the suffixes of the numbers, multiplying the next number by itself prefix
  // and then we add it to the 'result' array
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= suffix;
    suffix *= nums[j];
  }

  // returning the result array with the multiplyed values of prefixes and suffixes
  return result;
};

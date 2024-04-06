/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // initialize two variables with infinity values (then any number will be smaller)
  // these variables will run through the array and keep the values of the minimum and medium values
  // until the loop find a bigger one
  let first = Infinity;
  let second = Infinity;

  // a loop that will iterate the list
  for (let num of nums) {
    // if the number is samller than the 'first', updates the value of 'first'
    if (num <= first) {
      first = num;
      // if the number is bigger than 'first', but it's smaller than 'second', updates 'second' value
    } else if (num <= second) {
      second = num;
      // if the number is bigger than 'second', we found the sequence
    } else {
      return true; // returns true if the sequence is found
    }
  }
  // returns false if the conditions are not met
  return false;
};

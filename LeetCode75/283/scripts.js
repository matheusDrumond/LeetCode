/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// initially i thought about this problem in a very simple way
// a loop that go through the array and if it find a 0, use .splice(i, 1)
// to remove it, and .push(0) to add a 0 to the end of the array
// even though it's working, the performance was bad, and i had to search for a better algorithm

// then i found a better performing code
// instead of looking for the 0s and using two methods to remove and add to the end,
// it uses two pointers, one is called "lastNonZeroFoundAt"(LnZ) and will save the positions where te next non-zero will be placed
// and the other pointer is the i of the loop

// it works this way:
// if nums[i] !== 0 it swap values with the LnZ variable, so we will be placing the non-zero numbers at left
// then LnZ is increased and 'i' keep going until all the non-zero numbers are all placed at the left

var moveZeroes = function (nums) {
  // this variable will keep track of the last non-zero element we swaped
  let lastNonZeroFoundAt = 0;

  // this is the loop that will iterate the array elements
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i > lastNonZeroFoundAt) {
        // if the element !== 0 and 'i' > LnZ we swap them
        [nums[lastNonZeroFoundAt], nums[i]] = [
          nums[i],
          nums[lastNonZeroFoundAt],
        ];
      }
      // Lnz is increased
      lastNonZeroFoundAt++;
    }
  }
  // the problem doesn't asks for a return, but if needed, the answer would be just "return nums"
};

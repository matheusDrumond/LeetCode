/**
 * @param {number[]} nums
 * @return {number}
 */

function longestSubarray(nums) {
  // declaring the pointer that will be the left edge of the window
  let left = 0;

  // declaring the variable that will store the longest subarray found
  let longest = 0;

  // these variables will make sure that only a zero is allowed in the subarray
  let zeroCount = 0;
  let maxZeroCount = 1;

  // this is the loop that will iterate the array
  for (let right = 0; right < nums.length; right++) {
    // if there is a 0 we increase the zeroes counter
    if (nums[right] === 0) {
      zeroCount++;
    }

    // this is the case if theres more than one 0 in the window
    while (zeroCount > maxZeroCount) {
      // if the 0 is in the left edge, we move the window forwards and decrease the zeroes counter
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // if the current subarray is bigger than the longest one found, we update 'longest'
    if (right - left > longest) {
      longest = right - left;
    }
  }

  // return the longest subarray
  return longest;
}

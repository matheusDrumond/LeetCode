/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // this variables will keep track of sums
  // (prefixe is for the sum of the left side and suffix is for the sum of right side)
  let prefix = 0,
    suffix = 0;

  // this variable has the default value if there's no pivot, and will be changed if we found one
  let pivot = -1;

  // totalSum is the sum of all the numbers in the array
  let totalSum = nums.reduce((acc, curr) => acc + curr, 0);

  // this loop will iterate the array
  for (let i = 0; i < nums.length; i++) {
    // the suffix is the totalSum - the prefix and the element
    suffix = totalSum - prefix - nums[i];

    // if the prefix and the suffix are equal, we found a pivot, so we break the loop and get the pivot position
    if (prefix === suffix) {
      pivot = i;
      break;
    }

    // after every iteration we update the prefix value, adding the current element
    prefix += nums[i];
  }

  // then we return the position of the first (leftmost) pivot found
  return pivot;
};

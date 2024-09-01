/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  // these variables creates hash maps with the numbers of the arrays
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  // loop that will verify the different numbers
  for (let num of nums1) {
    // if a number from nums1 is in nums2, we delete it from both maps
    if (set2.has(num)) {
      set1.delete(num);
      set2.delete(num);
    }
  }

  // then, only the numbers that were not shared by them will be in the sets
  // and we return the answer array with an array for each set with the numbers that weren't in both arrays
  return [[...set1], [...set2]];
};

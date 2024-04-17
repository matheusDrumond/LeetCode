/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
  // declaring the variable that will define the left side of the window
  let left = 0;

  // here's the variable that will count if the number os 0s is smaller that k
  let zerosCount = 0;

  // here will keep track of the current longest sequence of 1s
  let maxOnesCount = 0;

  // in this loop we'll slide the window
  for (let right = 0; right < nums.length; right++) {
    // if the number is 0, we increase the count of 0s to keep track if the count is < k
    if (nums[right] === 0) {
      zerosCount++;
    }

    // move the window if zerosCount > k and the left limir is === 0
    while (zerosCount > k) {
      if (nums[left] === 0) {
        zerosCount--;
      }
      left++;
    }

    // if the size of the current window is bigger than the maxOnesCount, we update the maxOnesCount value
    if (right - left + 1 > maxOnesCount) {
      maxOnesCount = right - left + 1;
    }
  }

  // return the longest sequence of 1s
  return maxOnesCount;
}

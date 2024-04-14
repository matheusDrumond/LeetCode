/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
To solve this problem is important to know an especific algorithmic concept: Sliding Window

The sliding window technique is a common algorithmic approach used for solving various problems
that involve processing or analyzing a sequential data structure, such as arrays, strings, or streams.
It involves creating a fixed-size window that moves through the data structure one step at a time, 
typically from left to right, to perform specific operations or computations on the elements within the window.

In this case, we are going to use this technique to slide the window of length k
and get the average of the items inside the window.
*/

var findMaxAverage = function (nums, k) {
  // declaring the two pointers that will define our window
  let left = 0,
    right = k;

  // declaring the sum of the items inside the window, to get the average after
  let sum = 0;

  // get the sum of all the numbers inside the window
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // get the average of the numbers in the window
  let maxAverage = sum / k;

  // the loop that will slide our window
  while (right < nums.length) {
    // to get the new sum
    // we remove the last item and add the next one
    sum = sum - nums[left] + nums[right];
    // then, we slide the window
    left++;
    right++;

    // getting the current average
    let average = sum / k;

    // if the current average is bigger than the current biggest, we update the current maxAverage
    if (average > maxAverage) {
      maxAverage = average;
    }
  }

  // in the end we return the maximum average found
  return maxAverage;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  // we are creating an object that will store the quantity  of every number
  // in this format { number: amount } ex: { 3: 1 } it means that one number 3 is available to sum
  let countMap = {};

  // this variable will keep track of how many operations are possible
  let operations = 0;

  // that's the loop that will iterate the array
  for (let num of nums) {
    // discovering the number we need to sum to make 'num' === k
    let complement = k - num;

    // checking if there are a complement available to make the sum
    if (countMap[complement] > 0) {
      // in case that there is a complement available, increase the possibilities number
      operations++;
      // and than, decrease the availablity of the complement
      countMap[complement]--;
    }
    // if there's no complement available, we increase the amount of that number available
    else {
      countMap[num] = (countMap[num] || 0) + 1;
    }
  }

  // return the total possibilities of operations
  return operations;
};

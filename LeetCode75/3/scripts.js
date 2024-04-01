/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // declaring the array where the values of verifications will be stored
  let result = [];
  // finding the greatest number in the given array
  let max = Math.max(...candies);

  // function that verifies if each number + extraCandies number would be the bigger in the array
  candies.map((item) => {
    result.push(item + extraCandies >= max); // pushing the result of each comparison into the result array
  });
  return result;
};

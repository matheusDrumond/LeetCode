/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // declaring the variable that will count how many fowers can be planted
  let possibilities = 0;

  // loop to check every element of the array
  for (let i = 0; i <= flowerbed.length; i++) {
    // checks if: element === 0, previous element === 0 or undefined and next element === 0 or undefined
    if (
      flowerbed[i] === 0 &&
      (!flowerbed[i - 1] || flowerbed[i - 1] === 0) &&
      (!flowerbed[i + 1] || flowerbed[i + 1] === 0)
    ) {
      // if the element meet the requirements, it turns into 1, filling the space
      flowerbed[i] = 1;
      // and the number of possible places to plant the flower is increased
      possibilities++;
    }
  }

  // returns if the number of possibilities is bigger or equal to the needed number of spaces (if all the flowers can be planted)
  return possibilities >= n;
};

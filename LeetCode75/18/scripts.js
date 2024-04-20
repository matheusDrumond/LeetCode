/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function (gain) {
  // this variable will be keeping tracking of the value
  let prefix = 0;
  // this one will be updated with the maximum heights found
  let maxHeight = 0;

  // loop thta will run through the array
  for (let i = 0; i <= gain.length; i++) {
    // the current height is the sum of all heights before, so we itearte it
    prefix += gain[i];

    // if the current height > maximum height found, we update maxHeight
    if (prefix > maxHeight) {
      maxHeight = prefix;
    }
  }

  // return the maximum height found
  return maxHeight;
};

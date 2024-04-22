/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // this object will keep the occurences of each number
  let occurrences = new Object();

  // this loop will fill the object with how many times each number appears
  for (let num of arr) {
    // if the number has already appeared, we increase its count
    if (occurrences[num] > 0) {
      occurrences[num]++;
    }
    // if it has not appeared, we start its count
    else {
      occurrences[num] = 1;
    }
  }

  // now, we turn the values (that are the occurrences) into an array
  let quantities = Object.values(occurrences);

  // this loop will irate through the new array
  for (let i = 0; i < quantities.length; i++) {
    // this conditional verifies if the index of the current number
    // is equal to the first index that this number appears in the array
    // if it's not, it means that it appears more than once
    // therefore it is not unique
    if (quantities.indexOf(quantities[i]) !== i) {
      return false;
    }
  }

  // if the loop finishes and no non-unique number is found, we return true
  return true;
};

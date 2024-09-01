/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let fullMergedLength = word1.length + word2.length; // defining the length of final string

  let mergedArr = []; // declaring the array that will conain the letters of new string

  let pointer1 = 0; // declaring the pointer that will run through word1 and select the letters
  let pointer2 = 0; // declaring the pointer that will run through word2 and select the letters

  for (i = 1; i <= fullMergedLength; i++) {
    // starting the loop that will make the pointers run
    if (mergedArr.length === fullMergedLength.length) break; // verifying if the merged string is already complete
    if (pointer1 === word1.length && pointer2 < word2.length) {
      // in case of all the letters from word1 are merged, it stops the pointer1 and add the rest of word2 letters
      mergedArr.push(word2[pointer2]);
      pointer2++; // slide the pointer
    } else if (pointer2 === word2.length && pointer1 < word1.length) {
      // in case of all the letters from word2 are merged, it stops the pointer2 and add the rest of word1 letters
      mergedArr.push(word1[pointer1]);
      pointer1++; // slide the pointer
    } else if (i % 2 !== 0) {
      // when the next letter index is odd, add the next letter from word1
      mergedArr.push(word1[pointer1]);
      pointer1++; // slide the pointer
    } else {
      // when the next letter index is odd, add the next letter from word1
      mergedArr.push(word2[pointer2]);
      pointer2++; // slide the pointer
    }
  }

  return mergedArr.toString().replace(/,/g, ""); // turns the array of letters into a string and take the commas away and return it
};

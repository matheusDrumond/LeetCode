/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// at the first moment, i thought about setting a variable with the position of 's' that we are comparing
// and a loop that would be the pointer in the 't' string trying the letters
// this algorithm worked, however the performance was not that good, so i looked for other ways to solve it
// then i decided to change the loop i wa using, this way i replaced the 'for' loop for a 'while' loop
// this way, the logic was the same, but the chosen loop was very importante to the performance of the algorithm

var isSubsequence = function (s, t) {
  // the pointers that will run through the strings (pointer1 in string 's' and pointer2 in string 't')
  let pointer1 = 0,
    pointer2 = 0;

  // the loop that will do the verifications
  while (pointer1 < s.length && pointer2 < t.length) {
    // in case that both pointers point at equal elements, increase both
    if (s[pointer1] === t[pointer2]) {
      pointer1++;
      pointer2++;
    }
    // otherwise, the pointer2 keep increasing and looking for matching leeters in 't'
    else {
      pointer2++;
    }
  }

  // at the end, return if the pointer found all the letters of 's'
  return pointer1 === s.length;
};

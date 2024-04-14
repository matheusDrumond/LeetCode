/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// To solve this problem, we'll use the sliding window tchnique
// if you don't know this tchnique, the previous code (14) in this list explains the concept

var maxVowels = function (s, k) {
  // here we are going to declare the two pointers that will define our window
  let left = 0,
    right = k;

  // defining the vowels we are searching for
  let vowels = ["a", "e", "i", "o", "u"];

  // this variable will keep the track of the current count of vowels in each window
  let count = 0;

  // and this variable will store the maximum number of vowels found in a window
  let maxVowels = 0;

  // here, we analyze the first window, to get the first values of count and maxVowels
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      maxVowels++;
      count++;
    }
  }

  // now that we have the information of the fisrt window, we slide it using the loop
  while (right <= s.length) {
    // checking if the umber os vowels will change
    if (vowels.includes(s[left])) {
      count--;
    }
    if (vowels.includes(s[right])) {
      count++;
    }

    // if the current number of vowels is bigger than the current maximum we update maxVowels value
    if (count > maxVowels) maxVowels = count;

    // if the maximum number of vowels is equal to the length of the window it means that it is impossible to have more vowels
    // so we return this value and stop the loop
    if (maxVowels === k) return maxVowels;

    // slide the window
    left++;
    right++;
  }

  // return the value of maxVowels
  return maxVowels;
};
